<template>
  <div>
    <div class="wrapper">
      <div class="header_bg_gradient_div" />
      <div class="header_menu_div">
        <div class="header_menu_logo">로고</div>
        <div class="header_menu_button_div">
          <div class="header_menu_button_div_left">
            <header-button buttonName="아파트"></header-button>
            <header-button buttonName="오피스텔"></header-button>
            <header-button buttonName="원룸/투룸"></header-button>
            <header-button buttonName="단독주택"></header-button>
          </div>
          <div class="header_menu_button_div_right">
            <header-button buttonName="로그인"></header-button>
            <header-button buttonName="회원가입"></header-button>
          </div>
        </div>
      </div>
      <div class="header_search_div">헤더 - 검색</div>
    </div>
  </div>
</template>

<script>
import HeaderButton from "./HeaderButton.vue";

export default { components: { HeaderButton } };
</script>

<style scoped>
.wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 230px;
  font-weight: 700;
  font-size: 14px;
}
.header_bg_gradient_div {
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #464646, #292929 230px);
}
.header_menu_div {
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 30px;
  height: 70px;
  color: white;
}
.header_menu_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  margin-right: 20px;
  border: 2px solid cornflowerblue;
  border-radius: 12px;
  color: cornflowerblue;
  cursor: pointer;
}
.header_menu_button_div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
}
.header_menu_button_div_left {
  display: flex;
}
.header_menu_button_div_right {
  display: flex;
}
.header_search_div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  color: #bbbbbb;
}
</style>
