import Vue from "vue";
import Vuex from "vuex";
// import Constants from "../Constants";
// import http from "../http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeSearchOption: "",
  },
  getters: {
    homeSearchOption(state) {
      return state.homeSearchOption;
    },
  },
});
