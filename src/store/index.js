import Vue from "vue";
import Vuex from "vuex";
// import Constants from "../Constants";
// import http from "../http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTypeOption: "1",
    houseTypeOption: "1",
    searchTerm: "",
    searchOpacity: 1,
  },
  mutations: {
    setSearchTypeOption(state, payload) {
      state.searchTypeOption = payload;
    },
    setHouseTypeOption(state, payload) {
      state.houseTypeOption = payload;
    },
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    },
    setSearchOpacity(state, payload) {
      state.searchOpacity = payload;
    },
  },
  getters: {
    getSearchTypeOption(state) {
      return state.searchTypeOption;
    },
    getHouseTypeOption(state) {
      return state.houseTypeOption;
    },
    getSearchTerm(state) {
      return state.searchTerm;
    },
    getSearchOpacity(state) {
      return state.searchOpacity;
    },
  },
});
