

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import VueSocketIO from 'vue-socket.io'
import Vuelidate from "vuelidate"
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
Vue.use(Vuelidate)

// export const EventBus = new Vue()
Vue.config.productionTip = false

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:8082', //options object is Optional
//   vuex: {
//     store,
//     actionPrefix: "SOCKET_",
//     mutationPrefix: "SOCKET_"
//   }
// })
// );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')