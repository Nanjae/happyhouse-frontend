<template>
  <div class="search"><search-container></search-container></div>
</template>

<script>
import SearchContainer from "../components/Search/SearchContainer.vue";
export default {
  name: "Search",
  components: { SearchContainer },
};
</script>

<style scoped>
.search {
  padding-top: 175px;
}
</style>
