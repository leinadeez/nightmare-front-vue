import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  BootstrapVueIcons,
  render: h => h(App)
}).$mount('#app')
