<template>
  <div id="app">
    <div style="
      width: 100vw;
      max-width: 500px;
      color: rgba(0, 0, 0, 0.7);
      z-index: 30;
      transition: all 0.3s ease 0s;
      position: fixed;
      top: 0;
      padding: 8px 16px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.15) 0 1px 3px 0;
    ">
      <h1>Evaluatte</h1>
    </div>
    <div style="margin-top: 72px;"></div>
    <router-view>
    </router-view>
    <div style="margin-top: 72px;"></div>
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
