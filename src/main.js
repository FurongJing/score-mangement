import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'   // 映入状态管理store
import { Cell, Skeleton } from 'vant'
// import { Cell } from 'mint-ui'
import './assets/css/reset.css'
import 'vant/lib/button/style';
import './mock/mockServer'  // 加载mockServer

Vue.config.productionTip = false
Vue.component(Cell.name, Cell)
Vue.component(Skeleton.name, Skeleton)

// compiler模式

// runtime模式
new Vue({
  router,
  store, // 注册store
  render: h => h(App)
}).$mount('#app')
