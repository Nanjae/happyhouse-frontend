<template>
  <div>
    <div class="wrapper" v-bind:style="{ opacity: getMountOpacity }">
      <common-button buttonName="아파트 매매"></common-button>
      <common-button buttonName="아파트 전/월세"></common-button>
      <common-button buttonName="오피스텔 매매"></common-button>
      <common-button buttonName="오피스텔 전/월세"></common-button>
      <common-button buttonName="원룸/투룸 매매"></common-button>
      <common-button buttonName="원룸/투룸 전/월세"></common-button>
      <common-button buttonName="단독주택 매매"></common-button>
      <common-button buttonName="단독주택 전/월세"></common-button>
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
</style>
