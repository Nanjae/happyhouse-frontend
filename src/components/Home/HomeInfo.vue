<template>
  <div>
    <div class="wrapper" v-bind:style="{ opacity: getMountOpacity }">
      <div
        class="info_left_div"
        v-bind:style="{ transform: 'translateX(' + getLeftPos + ')' }"
      >
        <home-info-img
          imgSrc="apartment_inside.jpg"
          titleText="검색어 순위"
          contentText="준비 중 입니다....."
        />
      </div>
      <div
        class="info_right_div"
        v-bind:style="{ transform: 'translateX(' + getRightPos + ')' }"
      >
        <home-info-img
          imgSrc="apartment_outside.jpg"
          titleText="아파트 매매"
          contentText="준비 중 입니다....."
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeInfoImg from "./HomeInfoImg.vue";
export default {
  data() {
    return {
      style: {
        leftPos: "-100%",
        rightPos: "100%",
        mountOpacity: 0,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.changePos();
      }, 300);
    });
  },
  components: { HomeInfoImg },
  computed: {
    getLeftPos() {
      return this.style.leftPos;
    },
    getRightPos() {
      return this.style.rightPos;
    },
    getMountOpacity() {
      return this.style.mountOpacity;
    },
  },
  methods: {
    changePos() {
      this.style.leftPos = "0%";
      this.style.rightPos = "0%";
      this.style.mountOpacity = 1;
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  transition: opacity 1.2s;
}
.info_left_div {
  width: 40%;
  height: 500px;
  margin-right: 20px;
  transition: transform 1.2s;
}
.info_right_div {
  position: relative;
  width: 60%;
  height: 500px;
  transition: transform 1.2s;
}
</style>
