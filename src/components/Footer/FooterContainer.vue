<template>
  <div>
    <div
      class="wrapper"
      v-bind:style="{
        backgroundColor: getBgColor,
      }"
    >
      <div class="footer_logo_div">
        <img
          class="common_menu_logo_img1"
          src="../../assets/demologo1.png"
          v-bind:style="{
            opacity: getBgOpacity1,
          }"
        /><img
          class="common_menu_logo_img2"
          src="../../assets/demologo2.png"
          v-bind:style="{
            opacity: getBgOpacity2,
          }"
        />
      </div>
      <div class="footer_content_div">
        <div class="footer_content_top">
          <div class="footer_content_top_left">
            <div class="footer_content_sitemap">About</div>
            <div class="footer_content_sitemap">FAQ</div>
            <div class="footer_content_sitemap">Terms</div>
            <div class="footer_content_sitemap">Contribute</div>
          </div>
          <div class="footer_content_top_right">
            <div class="footer_content_contact">Follow us on</div>
          </div>
        </div>
        <div class="footer_content_bottom" v-bind:style="{ color: getColor }">
          <div class="footer_content_copyright">
            Copyright © 2020 SSAFY 4기 서울 4반 [ 박유진 & 이재욱 ]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBgOpacity1() {
      return this.$store.getters.getSearchTypeOption == "1" ? "1" : "0";
    },
    getBgOpacity2() {
      return this.$store.getters.getSearchTypeOption == "2" ? "1" : "0";
    },
    getBgColor() {
      return this.$store.getters.getSearchTypeOption == "1"
        ? "#464646"
        : "#2368c7";
    },
    getColor() {
      return this.$store.getters.getSearchTypeOption == "1"
        ? "#888888"
        : "#bbbbbb";
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  padding: 30px;
  transition: background-color 0.4s;
}
.footer_logo_div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-right: 10px;
  border-right: 1px solid #888888;
  position: relative;
}
.footer_content_div {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
  font-weight: 300;
  font-size: 14px;
}
.footer_content_top {
  display: flex;
  justify-content: space-between;
  color: white;
  margin-bottom: 10px;
}
.footer_content_top_left {
  display: flex;
}
.footer_content_top_right {
  display: flex;
}
.footer_content_sitemap {
  margin-right: 30px;
  cursor: pointer;
}
.footer_content_contact {
  margin-left: 30px;
}
.footer_content_bottom {
  transition: color 0.4s;
}
.common_menu_logo_img1 {
  position: absolute;
  min-width: 240px;
  width: 240px;
  object-fit: contain;
  margin-right: 20px;
  transition: opacity 0.4s;
}
.common_menu_logo_img2 {
  min-width: 240px;
  width: 240px;
  object-fit: contain;
  margin-right: 20px;
  transition: opacity 0.4s;
}
</style>
