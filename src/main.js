import Vue from 'vue'
import App from './App.vue'

import Registration from './components/Registration'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
