// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.scss' // 全局样式

import util from '@/utils/util.js'
Vue.config.productionTip = false
Vue.use(ElementUI)

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

// echart
// 引入 ECharts 主模块
import echarts from 'echarts'
// 引入crypto-js
import crypto from 'crypto-js'
// 引入百度地图
import BaiduMap from 'vue-baidu-map'
// 引入柱状图
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title' 
// import 'echarts/lib/component/bar' 
Vue.prototype.$echarts = echarts
Vue.prototype.$crypto = crypto
Vue.prototype.util = util
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(BaiduMap, {
  ak: 'j68EIdG8rx4PvLZaG4r4f9iImyYdq55B'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

window.Vue = Vue

// 页面跳转顶部
router.beforeEach((to, from, next) => {    

  // 判断当前登录用户类型
  console.log('to', to)
  // if(localStorage.getItem('userType') == 2 && to.name === 'Declare'){
    
  //   return ;
  // }
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})