import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

Vue.use(Vuesax, {
  colors: {
    primary: "#5b3cc4",
    success: "rgb(23, 200, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 131, 0)",
    dark: "rgb(36, 33, 69)"
  }
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
