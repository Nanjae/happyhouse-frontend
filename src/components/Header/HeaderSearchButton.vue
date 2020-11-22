<template>
  <div>
    <div
      class="wrapper"
      @mouseover="overButton"
      @mouseout="outButton"
      v-bind:class="{ active: active, isTop: isTop }"
      v-bind:style="{
        opacity: getOpacity,
        backgroundColor: getBgColor,
        width: getWidth,
      }"
      @click="onClick"
    >
      {{ optionText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { style: { opacity: 0.6, bgColor: "rgba(255, 255, 255, 0.0)" } };
  },
  props: {
    active: Boolean,
    type: Number,
    optionText: String,
    optionNumber: Number,
    isTop: Boolean,
  },
  computed: {
    getOpacity() {
      return this.active ? 1 : this.style.opacity;
    },
    getBgColor() {
      return this.active ? "#131313" : this.style.bgColor;
    },
    getWidth() {
      return this.type == 1 ? "100px" : "80px";
    },
  },
  methods: {
    overButton() {
      if (!this.active) {
        this.style.opacity = 1;
        this.style.bgColor = "rgba(255, 255, 255, 0.1)";
      }
    },
    outButton() {
      if (!this.active) {
        this.style.opacity = 0.6;
        this.style.bgColor = "rgba(255, 255, 255, 0.0)";
      }
    },
    onClick() {
      this.style.opacity = 0.6;
      this.style.bgColor = "rgba(255, 255, 255, 0.0)";
      if (this.type == 1) {
        this.$store.commit("setHouseTypeOption", this.optionNumber);
        // console.log(
        //   "건물타입 : " +
        //     this.optionText +
        //     " = " +
        //     this.$store.getters.getHouseTypeOption
        // );
      } else {
        this.$store.commit("setSearchTypeOption", this.optionNumber);
        // console.log(
        //   "매매타입 : " +
        //     this.optionText +
        //     " = " +
        //     this.$store.getters.getSearchTypeOption
        // );
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  padding: 2px 0px;
  margin-top: 5px;
  border-radius: 100px;
  color: white;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #d38fff;
  opacity: 0.6;
  transition: padding 0.4s, opacity 0.4s, background-color 0.4s, border 0.4s;
}
.active.isTop {
  padding: 2px 25px;
}
.active {
  background-color: #131313;
  opacity: 1;
  border: 0px;
  padding: 2px 10px;
}
.isTop {
  padding: 2px 15px;
}
</style>
