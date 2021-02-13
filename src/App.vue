<template>
  <div id="app">
    <router-view>
    </router-view>
    <div style="margin-top: 64px;"></div>
    <BottomNavigation/>
  </div>
</template>

<script>

import BottomNavigation from "@/components/BottomNavigation";

export default {
  name: 'App',
  components: {BottomNavigation},
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
