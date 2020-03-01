// @ts-nocheck
import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);
const cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
const state = {
  cartList
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
