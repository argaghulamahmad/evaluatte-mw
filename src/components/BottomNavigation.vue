<template>
  <div style="
      height: 56px;
      position: fixed;
      bottom: 0;
      width: 100%;
      padding-bottom: 56px;
      background-color: rgb(255, 255, 255);
      z-index: 20;
      display: flex;
      max-width: 500px;
      margin: 0 auto;
      -webkit-box-pack: justify;
      justify-content: space-between;
      align-items: flex-start;
    ">
    <v-bottom-navigation v-model="value">
      <v-btn value="consultants" to="/consultants">
        <span>Konsultan</span>

        <v-icon>mdi-account-group-outline</v-icon>
      </v-btn>
      <v-btn value="home" to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="schedules" to="/schedules">
        <span>Jadwal</span>

        <v-icon>mdi-calendar</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  name: 'BottomNavigation',
  data: () => (
      {
        value: 'home',
      }
  ),
}
</script>
<style>
span {
  font-size: 80%;
}

.v-item-group.v-bottom-navigation .v-btn {
  min-width: 0 !important;
}
</style>
