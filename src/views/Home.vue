<template>
  <div class="home">
    <home-container></home-container>
  </div>
</template>

<script>
import HomeContainer from "../components/Home/HomeContainer.vue";
export default {
  name: "Home",
  components: { HomeContainer },
};
</script>

<style scoped>
.home {
  padding-top: 230px;
}
</style>
