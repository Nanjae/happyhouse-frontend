<template>
  <div>
    <div
      class="wrapper"
      @mouseover="overButton"
      @mouseout="outButton"
      v-bind:style="{ color: getColor }"
    >
      <div class="header_btn_bg" v-bind:style="{ opacity: getOpacity }"></div>
      <img
        class="header_btn_img"
        v-if="buttonImg != ''"
        :src="require(`@/assets/icons/${buttonImg}`)"
      />
      {{ buttonName }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: { opacity: 0, color: this.textColor },
    };
  },
  props: {
    buttonName: String,
    buttonImg: { type: String, default: "" },
    textColor: { type: String, default: "white" },
  },
  computed: {
    getOpacity() {
      return this.style.opacity;
    },
    getColor() {
      return this.style.color;
    },
  },
  methods: {
    overButton() {
      this.style.opacity = 0.1;
      this.style.color = "white";
    },
    outButton() {
      this.style.opacity = 0;
      this.style.color = this.textColor;
    },
  },
};
</script>
<style scoped>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  margin: 0px 5px;
  height: 40px;
  cursor: pointer;
  transition: color 0.4s;
}
.header_btn_bg {
  z-index: -5;
  position: absolute;
  background-color: white;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s;
}
.header_btn_img {
  width: 14px;
  margin-right: 6px;
}
</style>
