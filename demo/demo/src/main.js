import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import axios from 'axios'
// Vue.use(Axios)
Vue.prototype.$axios = axios

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
