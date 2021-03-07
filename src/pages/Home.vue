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
      <div style="margin-top: 45%;"/>
      <div class="mx-4 mb-4">
        <v-carousel
            cycle
            height="230"
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
      <div class="mx-4 mb-8">
        <v-row no-gutters>
          <div style="min-width: 100%" class="mb-8">
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
              <router-link :to="service.url" active-class="active" style="text-decoration: none; color: inherit;">
                <div
                    class="mx-4 rounded-circle text-center"
                    style="box-shadow: rgb(202 211 225) 0 1px 4px 0;"
                >
                  <v-img :src="service.icon"></v-img>
                </div>
                <h6 class="mt-4">{{ service.name }}</h6>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="mx-4">
        <div style="min-width: 100%" class="mb-8">
          <h3 class="text-center">Testimoni</h3>
        </div>
        <v-carousel
            cycle
            height="500"
            hide-delimiters
            :show-arrows="false"
        >
          <v-carousel-item
              v-for="(testimonial, i) in testimonials"
              :key="i"
          >
            <v-card
                class="mx-auto"
                color="#ffffff"
                max-width="400"
            >
              <v-card-text class="headline font-weight-bold black--text subtitle-1">
                "{{ testimonial.testimony }}"
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar>
                    <v-img
                        class="elevation-6"
                        :alt="testimonial.client.full_name"
                        :src="testimonial.client.profile_image"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="black--text">{{ testimonial.client.full_name }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row
                      align="center"
                      justify="end"
                      class="black--text"
                  >
                    {{ testimonial.client.title }}
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="mb-4 text-center">
        <p>Evaluatte.com • {{ this.year }}</p>
      </div>
      <div class="mx-8 flex" style="margin: 0;">
        <v-row>
          <v-col v-for="(item, index) in social_links" :key="`social-${index}`">
            <a style="
                  font-size: 15px;
                  width: 40px;
                  height: 40px;
                  display: inline-block;
                  text-align: center;
                  background: 0 0;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  border-radius: 50%;
                  line-height: 40px !important;
                  color: #fff !important;
                  background: #FCCF14;
                  border-color: transparent;
                "
               class="px-0"
               :href="item.url">
              <i :class="item.icon"></i>
            </a>
          </v-col>
        </v-row>
      </div>
      <div style="margin-top: 20%;"/>
    </div>
  </v-card>
</template>

<script>
import fetchJson from "@/utils/fetch";

export default {
  name: "Home",
  async created() {
    this.consultantType = this.type;

    const endpoint = process.env.VUE_APP_ENDPOINT

    if (this.$store.state.testimonials.length === 0) {
      this.testimonials = await fetchJson(`${endpoint}/api/testimonials/`);
      this.setTestimonialsToVuex(this.testimonials);
    }

    if (this.$store.state.testimonials.length !== 0) {
      this.testimonials = this.$store.state.testimonials;
    }
  },
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
          url: '/consultants/CV',
        },
        {
          icon: 'https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/icon+interviw+1.png',
          name: 'Konsultasi Interview',
          url: '/consultants/Interview',
        },
        {
          icon: 'https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/icon+webinar+1.png',
          name: 'Webinar',
          url: '/consultants/Webinar',
        },
      ],
      testimonials: [],
      social_links: [
        {
          url: "https://www.facebook.com/evaluattecom",
          icon: "fab fa-facebook",
        },
        {
          url: "https://www.instagram.com/evaluatte_com/",
          icon: "fab fa-instagram",
        },
        {
          url: "https://www.youtube.com/channel/UCfmb7kcDMjW9lJpfADl132Q",
          icon: "fab fa-youtube",
        },
        {
          url: "https://www.linkedin.com/company/evaluatte",
          icon: "fab fa-linkedin-in",
        },
        {
          url: "https://www.tiktok.com/@evaluatte_com?lang=en",
          icon: "fab fa-tiktok",
        }
      ]
    }
  },
  methods: {
    setTestimonialsToVuex(testimonials) {
      this.$store.commit('setTestimonials', testimonials)
    },
  },
  computed: {
    year() {
      const date = new Date();
      return date.getFullYear();
    }
  },
}
</script>

<style scoped>
</style>
