<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          fixed
          color="#212529"
          dark
          shrink-on-scroll
          prominent
          src="https://evaluatte.argaghulamahmad.dev/media/banner/2021/09/04/headerlayanankami-new-min.png"
          fade-img-on-scroll
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(33,37,41,.3), rgba(33,37,41,.3)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon>
          <v-icon @click="
            hasHistory()
            ? $router.go(-1)
            : $router.push('/')
          "
          >mdi-chevron-left
          </v-icon>
        </v-app-bar-nav-icon>

        <v-toolbar-title>Isi Data Diri</v-toolbar-title>
      </v-app-bar>
      <div
          class="overflow-y-auto"
      >
        <div style="margin-top: 45%;"/>

        <v-row justify="center" class="mx-2">
          <v-col
              cols="12"
              sm="10"
              md="8"
              lg="6"
          >
            <v-card ref="form">
              <v-card-text>
                <v-text-field
                    ref="name"
                    v-model="clientName"
                    :rules="[() => !!clientName || 'Harus diisi!']"
                    label="Nama Lengkap"
                    placeholder="Khoirunnisa Mazaya"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="clientEmail"
                    :rules="emailRules"
                    label="E-mail"
                    placeholder="khoirunnisa@gmail.com"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="clientPhoneNumber"
                    :rules="[() => !!clientPhoneNumber || 'Harus diisi!']"
                    label="No. Telp."
                    placeholder="087788888888"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="consultant.full_name"
                    disabled
                    label="Nama Konsultan"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="consultantType"
                    disabled
                    label="Tipe Konsultasi"
                ></v-text-field>
                <v-text-field
                    v-model="formattedConsultantPrice"
                    disabled
                    label="Harga Konsultasi"
                ></v-text-field>
                <v-select
                    v-model="consultantScheduleId"
                    :items="notYetBookedConsultantSchedules"
                    item-text="formatted_option"
                    item-value="id"
                    label="Jadwal Konsultasi"
                ></v-select>
                <v-textarea
                    v-model="clientProblem"
                    :rules="[() => !!clientProblem || 'Harus diisi!']"
                    label="Permasalahan yang ingin dikonsultasikan"
                    required
                ></v-textarea>
                <S3FileUpload :obj="clientResume"
                              fieldName="cv_url"
                              directory="CV"
                              label="Berkas CV Anda" />
              </v-card-text>
              <v-divider class="mt-12"></v-divider>
              <v-expansion-panels
                  v-model="panel"
                  multiple
              >
                <v-expansion-panel>
                  <v-expansion-panel-header><h4>{{ this.sop.title }}</h4></v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div>
                      <div class="mb-4">
                        <h4>Tujuan</h4>
                        <p>
                          {{ this.sop.tujuan.text }}
                        </p>
                      </div>
                      <div class="mb-4">
                        <h4>Ketentuan</h4>
                        <div v-for="(item, index) in this.sop.ketentuan.contents" :key="'ketentuan'+index">
                          <ul>
                            <li>{{
                                item
                              }}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mb-4">
                        <h4>Hak</h4>
                        <div v-for="(item, index) in this.sop.hak.contents" :key="'hak'+index">
                          <ul>
                            <li>{{
                              item
                              }}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <div class="mx-4">
                <v-checkbox
                    v-model="isTocAccepted"
                    label="Saya menerima semua syarat dan ketentuan yang berlaku."
                ></v-checkbox>
              </div>
              <v-divider class="mt-12"></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    outlined
                    text
                    style="
                        background: #FCCF14;
                        color: #FFFFFF;
                        border: none;
                      "
                    :disabled="!isTocAccepted || submitting"
                    :loading="submitting"
                    @click="submit"
                >
                  Bayar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <div style="margin-top: 20%;"/>
      </div>
    </v-card>
  </div>
</template>

<script>
import S3FileUpload from "@/components/S3FileUpload";
import {fetchJson, postJson} from "@/utils/fetch";
import data from '@/../data'

export default {
  name: "Checkout",
  components: {S3FileUpload},
  async created() {
    if (Object.keys(this.$store.state.selectedConsultant).length === 0 || this.$store.state.selectedConsultantType === '') {
      await this.$router.push(`/consultants/CV`)
      return
    }

    this.consultantType = this.$store.state.selectedConsultantType;
    this.consultant = this.$store.state.selectedConsultant;
    this.consultantSchedules = this.schedulesOfType(this.consultant);

    // Price shown here is display only; the backend reads the real price from the consultant record.
    if (this.consultantType === 'CV') {
      this.formattedConsultantPrice = this.consultant.formatted_cv_price
    } else if (this.consultantType === 'INTERVIEW') {
      this.formattedConsultantPrice = this.consultant.formatted_interview_price
    }

    await this.refreshAvailability();
  },
  data: () => ({
    emailRules: [
      value => !!value || 'Harus diisi!.',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'E-mail tidak valid!'
      },
    ],

    panel: [],

    clientName: null,
    clientEmail: null,
    clientPhoneNumber: null,
    clientProblem: null,
    clientResume: {},
    clientResumeUrl: null,

    isTocAccepted: false,

    consultantType: '',
    formattedConsultantPrice: '',

    consultant: {},
    consultantSchedules: [],
    consultantScheduleId: null,

    submitting: false,

    sop: data.sop
  }),
  methods: {
    hasHistory: () => window.history.length > 2,

    schedulesOfType(consultant) {
      return (consultant.consultant_schedules || []).filter(schedule => schedule.type === this.consultantType);
    },

    // Cached store data goes stale. Re-read availability so already-booked slots are not offered.
    async refreshAvailability() {
      try {
        const endpoint = process.env.VUE_APP_ENDPOINT;
        const consultants = await fetchJson(`${endpoint}/api/consultants/`);
        const fresh = consultants.find(item => item.id === this.consultant.id);
        if (fresh) {
          this.consultantSchedules = this.schedulesOfType(fresh);
        }
      } catch (error) {
        console.error('Gagal memuat jadwal terbaru', error);
      }
    },

    async submit() {
      if (this.submitting) {
        return;
      }
      if (!this.isFormValid) {
        alert('Lengkapi data pemesanan terlebih dahulu!');
        return;
      }

      this.submitting = true;
      try {
        const postData = {
          clientEmail: this.clientEmail,
          clientName: this.clientName,
          clientPhoneNumber: this.clientPhoneNumber,
          clientProblem: this.clientProblem,
          clientResumeUrl: this.clientResume['cv_url'],
          consultantId: this.consultant.id,
          consultantName: this.consultant.full_name,
          consultantScheduleId: this.consultantScheduleId,
          consultantType: this.consultantType,
        }

        const endpoint = process.env.VUE_APP_ENDPOINT;
        const orderResponse = await postJson(`${endpoint}/api/order`, JSON.stringify(postData));

        if (orderResponse.success) {
          // Keep `submitting` true while the browser leaves for the payment page.
          window.location.href = orderResponse.data.transaction_redirect_url;
          return;
        }

        alert(orderResponse.message);
        this.consultantScheduleId = null;
        await this.refreshAvailability();
      } catch (error) {
        alert('Terjadi kendala jaringan. Silahkan coba lagi.');
      }
      this.submitting = false;
    },
  },
  computed: {
    notYetBookedConsultantSchedules() {
      return this.consultantSchedules.filter((schedule) => {
        return schedule.is_booked === false;
      });
    },

    isFormValid() {
      return !!this.clientName
          && this.emailRules.every(rule => rule(this.clientEmail) === true)
          && !!this.clientPhoneNumber
          && !!this.clientProblem
          && !!this.consultantScheduleId
          && !!this.clientResume['cv_url'];
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-list-item__title {
    white-space: unset !important;
  }

  .v-select__selection {
    white-space: unset !important;
  }
}
</style>
