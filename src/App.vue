<template>
  <div id="app">
    <div>

    </div>
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
      <BottomNavigation/>
    </div>
  </div>
</template>

<script>

import BottomNavigation from "@/BottomNavigation";

export default {
  name: 'App',
  components: {BottomNavigation},
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
