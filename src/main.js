  import Vue from 'vue'

  import './assets/styles/global.scss'
  import Layout from './Layout.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Layout),
}).$mount('#app')
