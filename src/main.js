import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式表
import 'assets/css/global.css'

// 导入axios
import axios from 'axios'
// 将axios挂载到vue原型对象上 作用：使每个组件都可以使用this.$http使用axios
Vue.prototype.$http = axios
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
