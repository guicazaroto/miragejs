import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'
import { makeServer } from "./server"

Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
  makeServer()
}

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
