<template>
  <div>
    <div
      class="wrapper"
      v-bind:style="{ opacity: getMountOpacity }"
      @mouseover="overImg"
      @mouseout="outImg"
    >
      <img
        class="feature_bg_img"
        src="../../assets/images/homefeature/banner.jpg"
      />
      <div
        class="feature_bg_opacity"
        v-bind:style="{ opacity: getOpacity }"
      ></div>
      <div class="feature_left_div">
        <div class="feature_content">
          오아시스도 따뜻한 가치를 과실이 인간의 물방아 심장의 것이다. 얼마나
          인생을 피는 구하기 것이다.
        </div>
        <div class="feature_title">오아시스</div>
      </div>
      <div class="feature_center_div">
        <div class="feature_content">
          유소년에게서 온갖 물방아 천고에 있음으로써 너의 하는 것은 뿐이다.
          열락의 많이 하는 부패뿐이다. 방지하는 목숨을 것이 영원히 이상은
          칼이다. 피에 낙원을 청춘이 귀는 보라.
        </div>
        <div class="feature_title">유소년</div>
      </div>
      <div class="feature_right_div">
        <div class="feature_content">
          만물은 무엇을 사랑의 희망의 청춘 뭇 것은 옷을 부패뿐이다.
        </div>
        <div class="feature_title">청춘만물</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: { opacity: 0.25, mountOpacity: 0 },
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.onMounted();
      }, 1800);
    });
  },
  computed: {
    getOpacity() {
      return this.style.opacity;
    },
    getMountOpacity() {
      return this.style.mountOpacity;
    },
  },
  methods: {
    overImg() {
      this.style.opacity = 0.7;
    },
    outImg() {
      this.style.opacity = 0.25;
    },
    onMounted() {
      this.style.mountOpacity = 1;
    },
  },
};
</script>
<style scoped>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 600px;
  color: white;
  margin-bottom: 20px;
  transition: opacity 1.2s;
}
.feature_bg_img {
  z-index: -10;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.feature_bg_opacity {
  z-index: -5;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  transition: opacity 0.4s;
}
.feature_left_div {
  width: 300px;
  height: 70%;
}
.feature_center_div {
  width: 300px;
  height: 70%;
  margin: 0px 100px;
}
.feature_right_div {
  width: 300px;
  height: 70%;
}
.feature_content {
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 20px;
}
.feature_title {
  font-weight: 800;
  font-size: 36px;
}
</style>
