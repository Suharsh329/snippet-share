import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/css/tailwind.css'
import vueHljs from "vue-hljs"
import "vue-hljs/dist/vue-hljs.min.css"

Vue.config.productionTip = false
Vue.use(vueHljs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
