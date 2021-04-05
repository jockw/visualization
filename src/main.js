import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import App from './App'
import store from './store'
import iView from 'iview';

Vue.use(iView)

Vue.use(Router)

const router = new Router({
  routes
})

console.log(router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

