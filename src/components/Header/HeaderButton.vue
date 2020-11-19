<template>
  <div>
    <div class="wrapper" @mouseover="overButton" @mouseout="outButton">
      <div
        class="header_btn_bg"
        v-bind:style="{ opacity: computedOpacity }"
      ></div>
      {{ buttonName }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      opacity: 0,
    };
  },
  props: {
    buttonName: String,
  },
  computed: {
    computedOpacity() {
      return this.opacity;
    },
  },
  methods: {
    overButton: function() {
      this.opacity = 0.1;
    },
    outButton: function() {
      this.opacity = 0;
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
</style>
