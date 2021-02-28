<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
          color="#212529"
          dark
          fade-img-on-scroll
          fixed
          prominent
          shrink-on-scroll
          src="https://evaluatte-assets.s3-ap-southeast-1.amazonaws.com/layanan+kami+-+interview-min.png"
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
                  :alt="consultant.full_name"
                  :src="consultant.profile_image"
              >
            </v-avatar>
          </v-layout>

          <v-layout justify-center>
            <h2>
              {{ consultant.full_name }}
            </h2>
          </v-layout>
          <v-layout justify-center>
            <h4>
              {{consultant.role}} at {{ consultant.company_name }}
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
                      {{ consultant.company_name }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pb-2 py-0">
                      <b>Industri</b>
                    </v-col>
                    <v-col class="pb-2 py-0">
                      {{ consultant.industry }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pb-2 py-0">
                      <b>Total Pengalaman</b>
                    </v-col>
                    <v-col class="pb-2 py-0">
                      {{ consultant.year_of_experience }} Tahun
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
                    <li :key="`exp-${index}`" v-for="(experience, index) in consultant.experience_as_list">{{ experience }}</li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Deskripsi Pekerjaan</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="pl-2">
                  <ul>
                    <li :key="`desc-${index}`" v-for="(description, index) in consultant.job_description_as_list">{{ description }}</li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Role Expertise</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <ul>
                    <li :key="`role-exp-${index}`" v-for="(role_expertise, index) in consultant.role_expertise_as_list">{{ role_expertise }}</li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Jadwal Konsultasi</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <ul>
                    <li :key="`schedule-${idx}`" v-for="(consultant_schedule, idx) in consultant_schedules">
                      {{consultant_schedule.formatted_date}}  |
                      {{consultant_schedule.formatted_start_time}} - {{consultant_schedule.formatted_end_time}}
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
                style="
                        min-width: 100%;
                        background: #FCCF14;
                        color: #FFFFFF;
                        border: none;
                      "
                text
                to="/checkout"
            >
              Isi Data
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
  props: ['id'],
  async created() {
    async function http(url,
                        method = 'GET',
                        data,
    ) {
      // eslint-disable-next-line no-useless-catch
      try {
        const response = await fetch(url, {
          method,
          data
        });

        return await response.json();
      } catch (error) {
        throw error;
      }
    }

    const endpoint = process.env.VUE_APP_ENDPOINT

    this.consultant = await http(`${endpoint}/api/consultants/${this.id}/`);
    this.consultant_schedules = await http(`${endpoint}/api/consultant-schedule/consultant/${this.id}/`);
  },
  data() {
    return {
      panel: [],

      consultant: {},
      consultant_schedules: {}
    }
  },
  methods: {
    hasHistory: () => window.history.length > 2
  },
}
</script>

<style scoped>
</style>
