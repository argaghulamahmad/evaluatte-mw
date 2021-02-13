<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          fixed
          color="#212529"
          dark
          shrink-on-scroll
          prominent
          src="https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/header+layanan+kami+-+new-min.png"
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
                    v-model="name"
                    :rules="[() => !!name || 'Harus diisi!']"
                    :error-messages="errorMessages"
                    label="Nama Lengkap"
                    placeholder="Khoirunnisa Mazaya"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    placeholder="khoirunnisa@gmail.com"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="phoneNumber"
                    :rules="[() => !!phoneNumber || 'Harus diisi!']"
                    label="No. Telp."
                    placeholder="087788888888"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="consultantName"
                    disabled
                    label="Nama Konsultan"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="meetAt"
                    disabled
                    label="Konsultasi pada"
                    required
                ></v-text-field>
                <v-textarea
                    v-model="problem"
                    :rules="[() => !!problem || 'Harus diisi!']"
                    label="Masalah yang dihadapi"
                    required
                ></v-textarea>
                <v-file-input
                    accept="image/*"
                    counter
                    dense
                    label="Lampirkan CV"
                    outlined
                    required
                    show-size
                    truncate-length="15"
                ></v-file-input>
              </v-card-text>
              <v-divider class="mt-12"></v-divider>
              <v-expansion-panels
                  v-model="panel"
                  multiple
              >
                <v-expansion-panel>
                  <v-expansion-panel-header><h4>Prosedur Standar Operasional</h4></v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div>
                      <div class="mb-4">
                        <h4>Tujuan</h4>
                        <p>
                          Memberikan pemahaman tentang CV dan teknik interview yang tepat, serta membuat peluang yang lebih besar untuk diterima di suatu pekerjaan.
                        </p>
                      </div>
                      <div class="mb-4">
                        <h4>Kewajiban</h4>
                        <div>
                          <ul>
                            <li>User wajib mendaftar dan melakukan pembayaran sebelum melakukan konsultasi (1 hari sebelumnya)</li>
                            <li>User harus menyiapkan segala pertanyaan, bahan diskusi, dll sebelum sesi konsultasi, agar sesi konsultasi dapat berjalan efektif</li>
                            <li>User wajib membaca SOP yang berlaku</li>
                            <li>User harus memilih jadwal konsultasi sesuai dengan jadwal konsultan</li>
                            <li>User wajib berkomunikasi dengan sopan</li>
                            <li>User hanya dapat menanyakan pertanyaan sesuai konteks konsultasi</li>
                            <li>Apabila user menanyakan pertanyaan di luar konteks konsultasi, maka user akan mendapatkan penalti.</li>
                            <li>Apabila user mendapatkan penalti sebanyak 3x, maka konsultan berhak mengakhiri sesi konsultasi meskipun waktu konsultasi belum berakhir.</li>
                            <li>User wajib mengisi dan menilai kinerja konsultan</li>
                          </ul>
                        </div>
                      </div>
                      <div class="mb-4">
                        <h4>Hak</h4>
                        <div>
                          <ul>
                            <li>User berhak memilih konsultan yang diinginkan (selama konsultan tersebut masih tersedia).</li>
                            <li>User berhak bertanya tentang apa pun (selama masih dalam konteks konsultasi).</li>
                            <li>User berhak mendapat waktu konsultasi sesuai dengan yang telah ditentukan.</li>
                            <li>User berhak memberi penilaian (kepada konsultan) sesuai dengan yang dirasakan selama sesi konsultasi.</li>
                            <li>User berhak mendapatkan resume hasil konsultasi.</li>
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
                <v-slide-x-reverse-transition>
                  <v-tooltip
                      v-if="formHasErrors"
                      left
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          icon
                          class="my-0"
                          v-bind="attrs"
                          @click="resetForm"
                          v-on="on"
                      >
                        <v-icon>mdi-refresh</v-icon>
                      </v-btn>
                    </template>
                    <span>Refresh form</span>
                  </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn
                    outlined
                    text
                    style="
                        background: #FCCF14;
                        color: #FFFFFF;
                        border: none;
                      "
                    to="/pay"
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
export default {
  name: "Checkout",
  data: () => ({
    emailRules: [
      value => !!value || 'Harus diisi!.',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'E-mail tidak valid!'
      },
    ],

    panel: [],

    name: null,
    email: null,
    phoneNumber: null,
    consultantName: 'Teguh Priyantono',
    meetAt: 'Rabu, 21.00 - 22.00',
    problem: null,
    resumeUrl: null,
    isTocAccepted: false,

    errorMessages: null,
    formHasErrors: null
  }),
  methods: {
    hasHistory: () => window.history.length > 2,
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    },
  },
}
</script>

<style scoped>

</style>
