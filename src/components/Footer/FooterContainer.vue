<template>
  <div>
    <div class="wrapper">
      <div class="footer_logo_div"><common-logo></common-logo></div>
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
        <div class="footer_content_bottom">
          <div class="footer_content_copyright">
            Copyright © 2020 SSAFY 4기 서울 4반 [ 박유진 & 이재욱 ]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonLogo from "../Common/CommonLogo.vue";
export default { components: { CommonLogo } };
</script>

<style scoped>
.wrapper {
  display: flex;
  background-color: #464646;
  padding: 30px;
}
.footer_logo_div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-right: 10px;
  border-right: 1px solid #888888;
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
  color: #888888;
}
</style>
