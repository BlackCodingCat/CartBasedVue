import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
import intercepor from './interceptor'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 执行拦截器
intercepor(app);