export default {
    namespaced: true,
    state: {
      currentNav: '', // 当前选择nav
      env: 'http://172.27.7.79:3333', // 当前开发环境
    //   env: "http://" + window.document.location.host
    },
    getters: {
        currentNav: state => state.currentNav,
        /* 当前文件上传地址 */
        apiUpload: state => {
            return `${state.env}/register/uploadHeadImg`
        },
        /* 当前环境 */
        currentEnv: state => {
            return `${state.env}`
        }
    },
    mutations: {
        setCurrentNav(state, payload){
            state.currentNav = payload
        },
    },
    actions: {
    }
  }
  