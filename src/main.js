// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css' // 全局样式

Vue.config.productionTip = false
Vue.use(ElementUI)

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

// echart
// 引入 ECharts 主模块
import echarts from 'echarts'
// 引入百度地图
import BaiduMap from 'vue-baidu-map'
// 引入柱状图
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title' 
// import 'echarts/lib/component/bar' 
Vue.prototype.$echarts = echarts
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(BaiduMap, {
  ak: 'j68EIdG8rx4PvLZaG4r4f9iImyYdq55B'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

window.Vue = Vue