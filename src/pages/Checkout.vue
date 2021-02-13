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

        <v-row class="mt-4 mx-1">
          <v-col cols="6">
          </v-col>
          <v-col cols="6">

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


    name: null,
    email: null,
    phoneNumber: null,
    consultantName: 'Teguh Priyantono',
    meetAt: 'Rabu, 21.00 - 22.00',
    problem: null,
    resumeUrl: null,

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
