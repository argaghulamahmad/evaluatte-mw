<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="consultants">
      <span>Konsultan</span>

      <v-icon>mdi-account-group-outline</v-icon>
    </v-btn>
    <v-btn value="schedules">
      <span>Jadwal</span>

      <v-icon>mdi-calendar</v-icon>
    </v-btn>
    <v-btn value="home">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn value="cart">
      <span>Transaksi</span>

      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn value="profile">
      <span>Profil</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: 'BottomNavigation',
  props: {
    value: {}
  },
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
</style>
