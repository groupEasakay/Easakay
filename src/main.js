import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from "vuelidate"
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { CardPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(CardPlugin)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
//     libraries: "places" // necessary for places input
//   }
// });


export const EventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')