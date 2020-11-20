<template>
  <div>
    <div class="wrapper">
      <home-search></home-search>
      <home-info></home-info>
      <home-feature></home-feature>
    </div>
  </div>
</template>
<script>
import HomeSearch from "./HomeSearch.vue";
import HomeInfo from "./HomeInfo.vue";
import HomeFeature from "./HomeFeature.vue";
export default {
  components: {
    HomeSearch,
    HomeInfo,
    HomeFeature,
  },
};
</script>
<style scoped></style>
