<template>
  <div v-bind:style="{ opacity: getSearchOpacity, transition: 'opacity 1.2s' }">
    <div class="wrapper" v-bind:style="{ opacity: getMountOpacity }">
      <div
        class="info_left_div"
        v-bind:style="{ transform: 'translateX(' + getLeftPos + ')' }"
      >
        <home-info-top-10-img imgSrc="apartment_inside.jpg" />
      </div>
      <div
        class="info_right_div"
        v-bind:style="{ transform: 'translateX(' + getRightPos + ')' }"
      >
        <home-info-news-img imgSrc="apartment_outside.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeInfoNewsImg from "./HomeInfoNewsImg.vue";
import HomeInfoTop10Img from "./HomeInfoTop10Img.vue";
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
  components: {
    // HomeInfoImg,
    HomeInfoTop10Img,
    HomeInfoNewsImg,
  },
  computed: {
    getSearchOpacity() {
      this.unchangePos();
      return this.$store.getters.getSearchOpacity;
    },
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
    unchangePos() {
      this.style.leftPos = "-100%";
      this.style.rightPos = "100%";
      this.style.mountOpacity = 0;
    },
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
  width: 35%;
  height: 500px;
  margin-right: 20px;
  transition: transform 1.2s;
}
.info_right_div {
  position: relative;
  width: 65%;
  height: 500px;
  transition: transform 1.2s;
}
</style>
