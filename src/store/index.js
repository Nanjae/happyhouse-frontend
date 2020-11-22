import Vue from "vue";
import Vuex from "vuex";
// import Constants from "../Constants";
// import http from "../http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTypeOption: "1",
    houseTypeOption: "1",
  },
  mutations: {
    setSearchTypeOption(state, payload) {
      state.searchTypeOption = payload;
    },
    setHouseTypeOption(state, payload) {
      state.houseTypeOption = payload;
    },
  },
  getters: {
    getSearchTypeOption(state) {
      return state.searchTypeOption;
    },
    getHouseTypeOption(state) {
      return state.houseTypeOption;
    },
  },
});
