<template>
  <div>
    <div class="wrapper">
      <div class="header_bg_gradient_div" />
      <div class="header_menu_div">
        <common-logo></common-logo>
        <div class="header_menu_button_div">
          <div class="header_menu_button_div_left">
            <common-button
              buttonName="아파트"
              buttonImg="apartment.png"
            ></common-button>
            <common-button
              buttonName="오피스텔"
              buttonImg="officetels.png"
            ></common-button>
            <common-button
              buttonName="원룸/투룸"
              buttonImg="oneroom.png"
            ></common-button>
            <common-button
              buttonName="단독주택"
              buttonImg="dandok.png"
            ></common-button>
          </div>
          <div class="header_menu_button_div_right">
            <common-button
              buttonName="로그인"
              buttonImg="login.png"
            ></common-button>
            <common-button
              buttonName="회원가입"
              buttonImg="signup.png"
            ></common-button>
          </div>
        </div>
      </div>
      <div
        class="header_search_div"
        v-bind:style="{ height: getHeight, fontSize: getFontSize }"
      >
        <div class="header_search_box">
          <img class="header_search_icon" src="../../assets/icons/search.png" />
          <input
            class="header_search_option_input"
            v-bind:style="{ fontSize: getFontSize }"
          />
          근처
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
import CommonButton from "../Common/CommonButton.vue";
import CommonLogo from "../Common/CommonLogo.vue";
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      style: { height: 150, fontSize: 22 },
    };
  },
  methods: {
    handleScroll() {
      // console.log(window.scrollY);
      if (window.scrollY >= 30) {
        this.style.height = 95;
        this.style.fontSize = 18;
      } else {
        this.style.height = 150;
        this.style.fontSize = 22;
      }
    },
  },
  computed: {
    getHeight() {
      return this.style.height + "px";
    },
    getFontSize() {
      return this.style.fontSize + "px";
    },
  },
  created() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 30);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },

  beforeDestroy() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
  components: { CommonButton, CommonLogo },
};
</script>

<style scoped>
.wrapper {
  z-index: 50;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
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
  /* border: 2px solid #d38fff; */
  border-radius: 12px;
  color: #d38fff;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
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
  color: #bbbbbb;
  font-weight: 400;
  transition: height 0.4s, font-size 0.4s;
}
.header_search_box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.header_search_icon {
  width: 22px;
  margin-right: 10px;
}
.header_search_option_input {
  padding: 5px;
  background-color: transparent;
  border: 0px;
  color: white;
  border-bottom: 1px solid #bbbbbb;
  margin-right: 10px;
  width: 160px;
  transition: font-size 0.4s;
}
.header_search_option_input:focus {
  outline: none;
}
.header_search_option_div {
  padding: 4px 30px;
  margin-left: 20px;
  margin-right: 4px;
  border-radius: 100px;
  background-color: #131313;
  color: white;
  cursor: pointer;
}
</style>
