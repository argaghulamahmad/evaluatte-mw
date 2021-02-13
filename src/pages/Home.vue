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
      ]
    }
  },
}
</script>

<style scoped>

</style>
