<template>
  <div id="app">
    <div>
      <v-bottom-navigation v-model="value">
        <v-btn value="recent">
          <span>Recent</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({value: 'recent'}),
}
</script>

<style>
@media (min-width: 576px) {
  #app {
    border-left: 1px solid #e9ecef;
    border-right: 1px solid #e9ecef;
  }
}

#app {
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  color: rgba(0, 0, 0, .54);
}
</style>
