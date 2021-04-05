import Vue from 'vue'
import Router from 'vue-router'
import echarts from 'echarts'
import routes from './router'
import App from './App'
import store from './store'
import iView from 'iview';

Vue.use(iView)

Vue.use(Router)
Vue.prototype.$echarts = echarts;

const router = new Router({
  routes
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

