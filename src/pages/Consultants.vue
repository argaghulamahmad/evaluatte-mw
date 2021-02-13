<template>
  <div>
    <div v-for="(consultant, index) in consultantsPaginated.results" :key="'consultant'+index">
      <v-card
          outlined
          max-width="90%"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{ consultant.full_name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ consultant.company_name }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
              tile
              size="80"
              color="grey"
          >
            <img
                v-if="consultant.profile_image"
                :alt="consultant.full_name"
                :src="consultant.profile_image"
            >
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions class="">
          <v-row>
            <v-col cols="6">
              <v-btn
                  outlined
                  text
              >
                Lihat Profil
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                  outlined
                  text
              >
                Konsultasi
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
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
