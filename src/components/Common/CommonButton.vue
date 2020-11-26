<template>
  <div>
    <div
      class="wrapper"
      @mouseover="overButton"
      @mouseout="outButton"
      @click="onClick"
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
    houseType: { type: Number, default: 0 },
    searchType: { type: Number, default: 0 },
    isRange: { type: Boolean, default: false },
    range: { type: Number, default: 0 },
  },
  computed: {
    getOpacity() {
      if (this.$store.getters.getSearchRange == this.range) {
        return 0.1;
      }
      return this.style.opacity;
    },
    getColor() {
      if (this.$store.getters.getSearchRange == this.range) {
        return "white";
      }
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
    onClick() {
      if (this.isRange) {
        this.$store.commit("setSearchRange", this.range);
        this.$router.push({
          path: "search",
          query: {
            term: this.$route.query.term,
            housetype: this.$store.getters.getHouseTypeOption,
            searchtype: this.$store.getters.getSearchTypeOption,
            range: this.$store.getters.getSearchRange,
          },
        });
      } else {
        if (this.houseType != 0) {
          if (this.searchType != 0) {
            this.$store.commit("setSearchTypeOption", this.searchType);
            this.$store.commit("setHouseTypeOption", this.houseType);
          } else {
            this.$store.commit("setHouseTypeOption", this.houseType);
          }
        }
      }
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
  z-index: 0;
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
