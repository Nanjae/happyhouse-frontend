<template>
  <div>
    <div class="wrapper">
      <div class="header_bg_gradient_div" />
      <div class="header_menu_div">
        <div class="header_menu_logo">
          <img
            class="header_menu_logo_img"
            src="../../assets/demologo.png"
          />임시로고
        </div>
        <div class="header_menu_button_div">
          <div class="header_menu_button_div_left">
            <header-button
              buttonName="아파트"
              buttonImg="apartment.png"
            ></header-button>
            <header-button
              buttonName="오피스텔"
              buttonImg="officetels.png"
            ></header-button>
            <header-button
              buttonName="원룸/투룸"
              buttonImg="oneroom.png"
            ></header-button>
            <header-button
              buttonName="단독주택"
              buttonImg="dandok.png"
            ></header-button>
          </div>
          <div class="header_menu_button_div_right">
            <header-button
              buttonName="로그인"
              buttonImg="login.png"
            ></header-button>
            <header-button
              buttonName="회원가입"
              buttonImg="signup.png"
            ></header-button>
          </div>
        </div>
      </div>
      <div class="header_search_div">
        <div class="header_search_box">
          <input class="header_search_option_input" /> 근처
          <div class="header_search_option_div">아파트</div>
          의
          <div class="header_search_option_div">전/월세</div>
          정보를 찾아드릴께요!
        </div>
      </div>
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
  border: 2px solid #d38fff;
  border-radius: 12px;
  color: #d38fff;
  cursor: pointer;
}
.header_menu_logo_img {
  width: 20px;
  margin-right: 6px;
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
  align-items: flex-end;
  width: 100%;
  height: 160px;
  color: #bbbbbb;
  font-size: 26px;
  font-weight: 500;
}
.header_search_box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.header_search_option_input {
  padding: 5px;
  background-color: transparent;
  border: 0px;
  color: white;
  border-bottom: 2px solid #bbbbbb;
  margin-right: 10px;
  font-size: 26px;
  width: 200px;
}
.header_search_option_input:focus {
  outline: none;
}
.header_search_option_div {
  padding: 4px 30px;
  margin: 0px 10px;
  border-radius: 100px;
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
