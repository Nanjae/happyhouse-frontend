<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/Header/HeaderContainer.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");
/* The emerging W3C standard
   that is currently Firefox-only */
* {
  scrollbar-width: 0px;
}
/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 0px;
}
#app {
  font-family: "Noto Sans KR", "Nanum Gothic", sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  width: 100%;
  height: 1500px;
}
body {
  padding: 0px;
  margin: 0px;
  background-color: black;
  /* background-color: #292929; */
}
</style>
