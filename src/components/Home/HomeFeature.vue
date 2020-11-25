<template>
  <div v-bind:style="{ opacity: getSearchOpacity, transition: 'opacity 1.2s' }">
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
          도로명, 건물명을 모르셔도 괜찮습니다. 키워드로 검색하여 주변을
          둘러보세요!
        </div>
        <div class="feature_title">키워드 검색</div>
      </div>
      <div class="feature_center_div">
        <div class="feature_content">
          검색하신 매물에서 직장, 학교 등 다양한 장소까지 가는데 걸리는 시간을
          알아보세요!
        </div>
        <div class="feature_title">길찾기</div>
      </div>
      <div class="feature_right_div">
        <div class="feature_content">
          다른 사람들은 어떤 지역을 가장 많이 검색했을까요?
        </div>
        <div class="feature_title">검색어 순위</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: { opacity: 0.5, mountOpacity: 0 },
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
    getSearchOpacity() {
      return this.$store.getters.getSearchOpacity;
    },
    getOpacity() {
      return this.style.opacity;
    },
    getMountOpacity() {
      return this.style.mountOpacity;
    },
  },
  methods: {
    overImg() {
      this.style.opacity = 0.8;
    },
    outImg() {
      this.style.opacity = 0.5;
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
