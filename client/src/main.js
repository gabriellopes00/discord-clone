  import Vue from 'vue'
  import VueSocketIO from 'vue-socket.io'

  import './assets/styles/global.scss'
  import Layout from './Layout.vue'

Vue.use(new VueSocketIO({
  connection: 'http://localhost:3001'
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(Layout),
}).$mount('#app')
