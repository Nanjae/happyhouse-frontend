<template>
  <div @mouseover="overButton" @mouseout="outButton">
    <div class="info_img_div">
      <img
        class="info_bg_img"
        :src="require(`@/assets/images/homeinfo/${imgSrc}`)"
      />
      <div class="info_bg_opacity" v-bind:style="{ opacity: getOpacity }"></div>
      <div class="info_text_div">
        <home-info-text
          v-bind:titleText="titleText"
          v-bind:contentText="contentText"
        ></home-info-text>
      </div>
    </div>
  </div>
</template>

<script>
import HomeInfoText from "./HomeInfoText.vue";
export default {
  data() {
    return {
      style: { opacity: 0.25 },
    };
  },
  props: {
    imgSrc: String,
    titleText: String,
    contentText: String,
  },
  components: { HomeInfoText },
  computed: {
    getOpacity() {
      return this.style.opacity;
    },
  },
  methods: {
    overButton() {
      this.style.opacity = 0.7;
    },
    outButton() {
      this.style.opacity = 0.25;
    },
  },
};
</script>

<style scoped>
.info_img_div {
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: flex-end;
}
.info_bg_opacity {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  transition: opacity 0.4s;
}
.info_bg_img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}
.info_text_div {
  position: absolute;
  display: flex;
  width: 75%;
  height: 70%;
}
</style>
