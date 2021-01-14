import Vue from 'vue'

import './assets/styles/global.scss'
import Layout from './layout.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(Layout),
}).$mount('#app')
