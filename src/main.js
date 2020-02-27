// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "../src/router";

import store from "./store/index";
Vue.config.productionTip = false;
import VueLazyload from "vue-lazyload";
import toast from './toast';
Vue.use(toast);
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require("./assets/img/common/placeholder.png")
});
// 事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");