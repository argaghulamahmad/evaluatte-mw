<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          fixed
          color="#212529"
          dark
          shrink-on-scroll
          prominent
          src="https://evaluatte.argaghulamahmad.dev/media/banner/2021/09/04/HeaderKonsultanKami.png"
          fade-img-on-scroll
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(33,37,41,.3), rgba(33,37,41,.3)"
          ></v-img>
        </template>

        <v-toolbar-title>Konsultan Evaluatte</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <div
          class="overflow-y-auto"
      >
        <div style="margin-top: 100%;"/>

        <v-select
            :items="['CV', 'INTERVIEW']"
            label="Tipe Konsultasi"
            v-model="consultantType"
            class="ma-2"

            @change="setConsultantTypeToVuex(consultantType)"
        >
          <template v-slot:item="{ item, attrs, on }">
            <v-list-item
                v-bind="attrs"
                v-on="on"
            >
              <v-list-item-title
                  :id="attrs['aria-labelledby']"
                  v-text="item"
              ></v-list-item-title>
            </v-list-item>
          </template>
        </v-select>

        <div v-for="(consultant, index) in consultants" :key="'consultant'+index">
          <v-card
              outlined
              style="
                  background: #FFFFFF;
                  box-shadow: rgb(202 211 225) 0 1px 4px 0;
                "
              class="ma-2"
              v-if="
                  ((consultantType === 'CV' && consultant.is_cv)
                  ||
                  (consultantType==='INTERVIEW' && consultant.is_interview))
                "
          >
            <v-list-item three-line>
              <v-list-item-avatar
                  tile
                  size="60"
                  color="white"
                  min-width="30%"
              >
                <img
                    style="border-radius: 100%;"
                    v-if="consultant.profile_image"
                    :alt="consultant.full_name"
                    :src="consultant.profile_image"
                >
              </v-list-item-avatar>
              <div>
                <v-list-item-content>
                  <v-list-item-title class="heading-3">
                    {{ consultant.full_name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{ consultant.company_name }} | {{ consultant.year_of_experience }} Tahun
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon size="12">mdi-briefcase</v-icon>
                    {{ consultant.industry }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </div>
            </v-list-item>

            <v-card-actions class="">
              <v-row>
                <v-col cols="6">
                  <v-btn
                      text
                      depressed
                      disabled
                      class="pr-0"
                  >
                    <v-col cols="3">
                      <p v-if="consultantType === 'CV'" class="mb-0 pr-4" style="color: #000000;">
                        {{ consultant.formatted_cv_price }}</p>
                      <p v-if="consultantType === 'INTERVIEW'" class="mb-0 pr-4" style="color: #000000;">
                        {{ consultant.formatted_interview_price }}</p>
                    </v-col>
                    <v-col cols="9">
                      <v-icon style="
                        caret-color: rgb(252, 207, 20) !important;
                        color: rgb(252, 207, 20) !important;
                        font-size: 10px;
                      ">
                        mdi-star
                      </v-icon>
                      <p v-if="consultant.rating === null"
                         style="display: inline-block; vertical-align: middle; color: #000000; font-size: 10px;"
                         class="mb-0 pr-2">-</p>
                      <p v-if="consultant.rating !== null"
                         style="display: inline-block; vertical-align: middle; color: #000000; font-size: 10px;"
                         class="mb-0 pr-2">
                        {{ consultant.rating }}</p>
                      <v-icon style="
                        caret-color: rgb(252, 207, 20) !important;
                        color: rgb(252, 207, 20) !important;
                        font-size: 10px;
                      ">
                        mdi-account
                      </v-icon>
                      <p v-if="consultant.total !== null"
                         style="display: inline-block; vertical-align: middle; color: #000000; font-size: 10px;"
                         class="mb-0 pr-2">
                        {{ consultant.total }}
                      </p>
                    </v-col>
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                      outlined
                      text
                      style="
                          min-width: 100%;
                          background: #FCCF14;
                          color: #FFFFFF;
                          border: none;
                        "
                      v-if="consultant.consultant_schedules.filter(schedule => schedule.type === consultantType).length === 0"

                      :disabled="consultant.consultant_schedules.filter(schedule => schedule.type === consultantType).length === 0"

                      @click.native="seeProfile(consultant)"
                  >
                    Jadwal Tidak Ada
                  </v-btn>
                  <v-btn
                      outlined
                      text
                      style="
                          min-width: 100%;
                          background: #FCCF14;
                          color: #FFFFFF;
                          border: none;
                        "

                      v-if="consultant.consultant_schedules.filter(schedule => schedule.type === consultantType).length !== 0"

                      @click.native="seeProfile(consultant)"
                  >
                    Lihat Profil
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </div>

        <div style="margin-top: 50%;"/>
      </div>
    </v-card>
  </div>
</template>

<script>
import {fetchJson} from "@/utils/fetch";

export default {
  name: "Consultants",
  props: ['type'],
  async created() {
    this.consultantType = this.type;
    this.setConsultantTypeToVuex(this.consultantType);

    const endpoint = process.env.VUE_APP_ENDPOINT;

    if (this.$store.state.consultants.length === 0) {
      this.consultants = await fetchJson(`${endpoint}/api/consultants/`);
      this.setConsultantsToVuex(this.consultants);
    }

    if (this.$store.state.consultants.length !== 0) {
      this.consultants = this.$store.state.consultants;
    }
  },
  data() {
    return {
      consultants: {},
      consultantType: '',
    }
  },
  methods: {
    async seeProfile(consultant) {
      await this.setConsultantToVuex(consultant);
      await this.$router.push(`/consultant/${consultant.id}`)
    },

    setConsultantsToVuex(consultants) {
      this.$store.commit('setConsultants', consultants)
    },
    setConsultantToVuex(consultant) {
      this.$store.commit('setSelectedConsultant', consultant)
    },
    setConsultantTypeToVuex(category) {
      this.$store.commit('setSelectedConsultantType', category)
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-btn__content {
    font-size: 10px;
  }
}
</style>
