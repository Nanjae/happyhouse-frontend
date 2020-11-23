<template>
  <div v-bind:style="{ opacity: getSearchOpacity, transition: 'opacity 1.2s' }">
    <div class="wrapper" v-bind:style="{ opacity: getMountOpacity }">
      <common-button
        buttonName="아파트 매매"
        v-bind:houseType="1"
        v-bind:searchType="1"
        textColor="#bbbbbb"
      ></common-button>
      <common-button
        buttonName="아파트 전/월세"
        v-bind:houseType="1"
        v-bind:searchType="2"
        textColor="#bbbbbb"
      ></common-button>
      <common-button
        buttonName="오피스텔 매매"
        v-bind:houseType="2"
        v-bind:searchType="1"
        textColor="#bbbbbb"
      ></common-button>
      <common-button
        buttonName="오피스텔 전/월세"
        v-bind:houseType="2"
        v-bind:searchType="2"
        textColor="#bbbbbb"
      ></common-button>
      <common-button
        buttonName="원룸/투룸 매매"
        v-bind:houseType="3"
        v-bind:searchType="1"
        textColor="#bbbbbb"
      ></common-button>
      <common-button
        buttonName="원룸/투룸 전/월세"
        v-bind:houseType="3"
        v-bind:searchType="2"
        textColor="#bbbbbb"
      ></common-button>
      <common-button
        buttonName="단독주택 매매"
        v-bind:houseType="4"
        v-bind:searchType="1"
        textColor="#bbbbbb"
      ></common-button>
      <common-button
        buttonName="단독주택 전/월세"
        v-bind:houseType="4"
        v-bind:searchType="2"
        textColor="#bbbbbb"
      ></common-button>
    </div>
  </div>
</template>
<script>
import CommonButton from "../Common/CommonButton.vue";
export default {
  data() {
    return { style: { mountOpacity: 0 } };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.onMounted();
      }, 1800);
    });
  },
  computed: {
    getSearchOpacity() {
      return this.$store.getters.getSearchOpacity;
    },
    getMountOpacity() {
      return this.style.mountOpacity;
    },
  },
  components: { CommonButton },
  methods: {
    onMounted() {
      this.style.mountOpacity = 1;
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  color: #bbbbbb;
  padding-top: 15px;
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
  transition: opacity 1.2s;
}
.isSearch {
  opacity: 0;
}
</style>
