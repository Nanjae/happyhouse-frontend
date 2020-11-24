<template>
  <div class="wrapper">
    <div class="detail_common_div">
      {{ detailData.name }}<br />{{ detailData.address }}<br />
      {{ detailData.builtYr }}
    </div>
    <!-- <div v-bind:for="info in getInfos">
        {{ info.price }}
      </div> -->
    <div class="detail_route_div"></div>
  </div>
</template>

<script>
export default {
  computed: {},
  props: {
    detailData: Object,
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
}
</style>
