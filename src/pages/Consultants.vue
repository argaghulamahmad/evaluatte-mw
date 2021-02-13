<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          fixed
          color="#212529"
          dark
          shrink-on-scroll
          prominent
          src="https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/Header+Konsultan+Kami.png"
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

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>CV</v-tab>
            <v-tab>Interview</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <div
        class="overflow-y-auto"
      >
        <div style="margin-top: 100%;"/>

        <div v-for="(consultant, index) in consultantsPaginated.results" :key="'consultant'+index">
          <v-card
              outlined
              style="
                background: #FFFFFF;
                box-shadow: rgb(202 211 225) 0 1px 4px 0;
              "
              class="ma-2"
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
                  <v-list-item-subtitle>{{ consultant.company_name }} | {years_of_experience} Tahun</v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon size="12">mdi-briefcase</v-icon>
                    {industry}
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
                    <v-col cols="6">
                      <p class="mb-0" style="color: #000000;">Rp. 100.000</p>
                    </v-col>
                    <v-col cols="6">
                      <v-icon style="
                        caret-color: rgb(252, 207, 20) !important;
                        color: rgb(252, 207, 20) !important;
                      ">
                        mdi-star
                      </v-icon>
                      <p style="display: inline-block; vertical-align: middle; color: #000000;" class="mb-0">4.9</p>
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
                      to="/consultant"
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
export default {
  name: "Consultants",
  data() {
    return {
      consultantsPaginated: {
        "count": 8,
        "next": null,
        "previous": null,
        "results": [
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_15.jpg",
            "full_name": "Merina Anindita",
            "role": "Recruitment Specialist",
            "company_name": "Kitabisa",
            "consultant_schedules": []
          },
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_13.jpg",
            "full_name": "Teguh Priyantono",
            "role": "Talent Sourcer",
            "company_name": "IDN Media",
            "consultant_schedules": [
              {
                "start_date": "2021-01-23",
                "end_date": "2021-01-30",
                "start_time": "18:00:00",
                "end_time": "21:00:00"
              }
            ]
          },
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_16.jpg",
            "full_name": "Shofia A Hajaraswati",
            "role": "Former People Acquisition",
            "company_name": "Gojek",
            "consultant_schedules": []
          },
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/WhatsApp_Image_2021-02-01_at_5.38.57_PM.jpeg",
            "full_name": "Annisa Huljannah",
            "role": "Talent Sourcer",
            "company_name": "IDN Media",
            "consultant_schedules": []
          },
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_14.jpg",
            "full_name": "Devina Calista",
            "role": "Recruiter",
            "company_name": "Bank Mayapada",
            "consultant_schedules": []
          },
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_21.jpg",
            "full_name": "Alifa Kusuma",
            "role": "Recruiter",
            "company_name": "Bank Amar",
            "consultant_schedules": []
          },
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_22.jpg",
            "full_name": "Derry Pratama Reza",
            "role": "Sr. Talent Acquisition",
            "company_name": "Ruangguru",
            "consultant_schedules": []
          },
          {
            "profile_image": "https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_23.jpg",
            "full_name": "Dea Permata Sari",
            "role": "Recruiter",
            "company_name": "Kompas Gramedia",
            "consultant_schedules": []
          }
        ]
      }
    }
  },
}
</script>

<style scoped>
</style>
