import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from "./store";
import VueToastr from "vue-toastr";
import VueTruncate from "vue-truncate-filter";
import Meta from "vue-meta";
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueTruncate)
Vue.use(Meta);
Vue.use(VueChatScroll)
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
  store
}).$mount('#app')
