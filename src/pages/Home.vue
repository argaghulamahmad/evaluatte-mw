<template>
  <v-card class="overflow-hidden">
    <v-app-bar
        fixed
        color="#212529"
        dark
        shrink-on-scroll
        prominent
        src="https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/Header+ke+1.png"
        fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(33,37,41,.3), rgba(33,37,41,.3)"
        ></v-img>
      </template>

      <v-toolbar-title>Evaluatte.</v-toolbar-title>
    </v-app-bar>
    <div
        class="overflow-y-auto"
    >
      <div style="margin-top: 35%;"/>
      <div class="mx-4">
        <v-carousel
            cycle
            height="200"
            hide-delimiters
            :show-arrows="false"
        >
          <v-carousel-item
              v-for="(banner, i) in banners"
              :key="i"
          >
            <v-img contain :src="banner"></v-img>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="mx-4">
        <v-row no-gutters>
          <div style="min-width: 100%">
            <h3 class="text-center">Layanan Kami</h3>
          </div>
          <v-col
              cols="3"
              class="d-flex justify-center mb-6"
              style="min-width: 100%;"
          >
            <div
                v-for="(service, index) in services"
                :key="`service-${index}`"
                class="text-center"
            >
              <div
                  class="mx-4 elevation-1 rounded-circle text-center"
              >
                <v-img :src="service.icon"></v-img>
              </div>
              <h6 class="mt-4">{{service.name}}</h6>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="mx-4">
        <div style="min-width: 100%;" class="mb-4">
          <h3 class="text-center">Testimoni</h3>
        </div>

      </div>
      <div style="margin-top: 20%;"/>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      banners: [
        'https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/banner+cv.png',
        'https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/banner+interview.png',
      ],
      services: [
          {
            icon: 'https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/icon+cv+1.png',
            name: 'Konsultasi CV',
          },
          {
            icon: 'https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/icon+interviw+1.png',
            name: 'Konsultasi Interview',
          },
          {
            icon: 'https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/icon+webinar+1.png',
            name: 'Webinar',
          },
      ],
      testimonials: [
        {
          content: 'Setelah saya konsultasi dengan Teguh tentang CV, saya jadi paham akan kualifikasi CV saya ' +
              'dan saya jadi lebih bisa mempersiapkan CV saya kedepan agar bisa diterima perusahaan impian saya!',
          client_img: 'https://evaluatte-system.s3.amazonaws.com/media/public/pandu.jpg',
          client_name: 'PANDU AJI WIJAYA',
          client_title: 'Fresh Graduate',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
