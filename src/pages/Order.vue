<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          fixed
          color="#212529"
          dark
          shrink-on-scroll
          prominent
          src="https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/header+2+-+new-min.png"
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
          >mdi-chevron-left</v-icon>
        </v-app-bar-nav-icon>

        <v-toolbar-title>Pilih Jadwal</v-toolbar-title>
      </v-app-bar>
      <div
          class="overflow-y-auto"
      >
        <div style="margin-top: 45%;"/>

        <div class="mx-2 elevation-2">
          <h3 class="ml-2 mt-2 pl-2 pt-2 pb-2">Atur Tanggal</h3>
          <v-date-picker
              v-model="date"
              :allowed-dates="allowedDates"
              min="2016-06-15"
              max="2018-03-20"

              color="#FCCF14"

              full-width
          ></v-date-picker>
        </div>

        <div class="mx-2 elevation-2">
          <h3 class="ml-2 mt-2 pl-2 pt-2 pb-2">Atur Jam</h3>
          <v-time-picker
              v-model="time"
              :allowed-hours="allowedHours"
              :allowed-minutes="allowedMinutes"
              class="mt-4"
              format="24hr"
              scrollable
              min="9:30"
              max="22:15"

              color="#FCCF14"

              full-width
          ></v-time-picker>
        </div>

        <v-row class="mt-4 mx-1">
          <v-col cols="6">
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
                to="/order"
            >
              Isi Data Diri
            </v-btn>
          </v-col>
        </v-row>

        <div style="margin-top: 20%;"/>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Order",
  data: () => ({
    date: '2018-03-02',
  }),
  methods: {
    allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    hasHistory: () => window.history.length > 2
  },
}
</script>

<style scoped>

</style>
