import Vue from "vue";
import Vuex from "vuex";
// import Constants from "../Constants";
// import http from "../http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeSearchOption: "매매",
  },
  mutations: {
    setHomeSearchOption(state, payload) {
      state.homeSearchOption = payload;
    },
  },
  getters: {
    homeSearchOption(state) {
      return state.homeSearchOption;
    },
  },
});
