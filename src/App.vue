<template>
  <div id="app">
    <v-app>
      <TopNavigation/>
      <div style="margin-top: 72px;"></div>
      <router-view>
      </router-view>
      <div style="margin-top: 72px;"></div>
      <BottomNavigation/>
    </v-app>
  </div>
</template>

<script>

import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";

export default {
  name: 'App',
  components: {TopNavigation, BottomNavigation},
}
</script>

<style>
#app {
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  color: rgba(0, 0, 0, .54);
}
</style>
