<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          fixed
          color="#212529"
          dark
          shrink-on-scroll
          prominent
          src="https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/layanan+kami+-+interview-min.png"
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

        <v-toolbar-title>Profil Konsultan</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <div
          class="overflow-y-auto"
      >
        <div style="margin-top: 45%;"/>

        <div class="mb-4">
          <v-layout class="mb-4" justify-center>
            <v-avatar
                color="#FCCF14"
                size="56"
            >
              <img
                  src="https://evaluatte-system.s3.amazonaws.com/media/public/New_Project_13.jpg"
                  alt="Teguh"
              >
            </v-avatar>
          </v-layout>

          <v-layout justify-center>
            <h2>
              Teguh Priyantono
            </h2>
          </v-layout>
          <v-layout justify-center>
            <h4>
              Talent Sourcer at IDN Media
            </h4>
          </v-layout>
        </div>

        <div class="my-2 mt-4">
          <v-expansion-panels
              v-model="panel"
              multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header>Latar Belakang</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <v-row>
                    <v-col class="pb-2 py-0">
                      <b>Perusahaan</b>
                    </v-col>
                    <v-col class="pb-2 py-0">
                      IDN Media
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pb-2 py-0">
                      <b>Industri</b>
                    </v-col>
                    <v-col class="pb-2 py-0">
                      Digital Media
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pb-2 py-0">
                      <b>Total Pengalaman</b>
                    </v-col>
                    <v-col class="pb-2 py-0">
                      1 Tahun
                    </v-col>
                  </v-row>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Pengalaman</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <ul>
                    <li>Talent Sourcer di IDN Media | 2020 - 2021</li>
                    <li>CEO Evaluatte</li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Deskripsi Pekerjaan</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="pl-2">
                  <ul>
                    <li>Melakukan screening CV kandidat</li>
                    <li>Melakukan interview dengan calon kandidat</li>
                    <li>Membuat jadwal interview dengan calon kandidat</li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Role Expertise</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <ul>
                    <li>Marketing Manager</li>
                    <li>Copywriter</li>
                    <li>Graphic Designer</li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Jadwal Konsultasi</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <ul>
                    <li>
                      Senin:
                      <ul>
                        <li>19.00 - 20.00  |  21.00 - 22.00</li>
                        <li>19.00 - 20.00  |  21.00 - 22.00</li>
                      </ul>
                    </li>
                    <li>
                      Rabu:
                      <ul>
                        <li>19.00 - 20.00  |  21.00 - 22.00</li>
                        <li>19.00 - 20.00  |  21.00 - 22.00</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
              Pilih Jadwal
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
  name: "Consultant",
  data() {
    return {
      panel: [],

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
  methods: {
    hasHistory: () => window.history.length > 2
  },
}
</script>

<style scoped>
</style>
