<template>
  <div>
    <Header></Header>
    <router-view />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/HeaderPanel.vue";

export default defineComponent({
  name: "app",
  components: { Header },
});
</script>

<style lang="scss">
@import url(./assets/global.scss);

#app {
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #515280;
  font-size: 14px;
}

body {
  margin: 0px 0px 0px 0px;
  background-color: rgb(242, 246, 253);
}
</style>
