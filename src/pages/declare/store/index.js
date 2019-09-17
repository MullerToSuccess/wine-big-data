export default {
    namespaced: true,
    state: {
      declareInfo: [], // 四个表单详情
    },
    getters: {
        declareInfo: state => state.declareInfo,
    },
    mutations: {
        setDeclareInfo(state, payload){
            state.declareInfo = payload
        },
    },
    actions: {
    }
  }
  