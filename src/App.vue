<template>
  <div id="app">
    <div>

    </div>
    <div style="
        position: fixed;
        bottom: 0;
        min-width: 100%;
    ">
      <BottomNavigation :value="value"/>
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
