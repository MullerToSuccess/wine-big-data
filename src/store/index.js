import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'


/* 分模块的store */
import declareStore from '@/pages/declare/store/index';
import common from './common/index';

//新整理目录
import accusationAndAppealStore from '@/pages/accusationAndAppeal/store/index';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // runEnv: runEnvStore, // 环境变量
    declare: declareStore, // 自主申报
    common: common, // 公用
    accusationAndAppealStore: accusationAndAppealStore, // 申诉举报
  },
  plugins: [
    persistedState()
  ]
})
