import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCircleSlider from 'vue-circle-slider'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.use(VueCircleSlider)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
