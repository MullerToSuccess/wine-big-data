import Vue from "vue"
import Router from "vue-router"

const Home = resolve => {
  import("@/components/Home").then(module => {
    resolve(module)
  })
}

const Login = resolve => {
  import("@/components/Login").then(module => {
    resolve(module)
  })
}

const Sign = resolve => {
  import("@/components/Sign").then(module => {
    resolve(module)
  })
}

// 模块
const SystemSurvey = resolve => {
  import("@/components/SystemSurvey").then(module => {
    resolve(module)
  })
}

const DevelopExponent = resolve => {
  import("@/components/DevelopExponent").then(module => {
    resolve(module)
  })
}

const Supervision = resolve => {
  import("@/components/Supervision").then(module => {
    resolve(module)
  })
}

const Example = resolve => {
  import("@/components/Example").then(module => {
    resolve(module)
  })
}

const Search = resolve => {
  import("@/components/Search").then(module => {
    resolve(module)
  })
}

const Declare = resolve => {
  import("@/components/Declare").then(module => {
    resolve(module)
  })
}

const Accusation = resolve => {
  import("@/components/Accusation").then(module => {
    resolve(module)
  })
}

const HotSpot = resolve => {
  import("@/components/HotSpot").then(module => {
    resolve(module)
  })
}

const Science = resolve => {
  import("@/components/Science").then(module => {
    resolve(module)
  })
}

const Support = resolve => {
  import("@/components/Support").then(module => {
    resolve(module)
  })
}
const Dynamics= resolve => {
  import("@/components/Dynamics").then(module => {
    resolve(module)
  })
}
const Detail = resolve => {
  import("@/components/Detail").then(module => {
    resolve(module)
  })
}

const searchDetail = resolve => {
  import("@/components/details/searchDetail").then(module => {
    resolve(module)
  })
}

const newsDetail = resolve => {
  import("@/components/details/newsDetail").then(module => {
    resolve(module)
  })
}

const integrityDetail = resolve => {
  import("@/components/details/integrityDetail").then(module => {
    resolve(module)
  })
}

const bussinessDetail = resolve => {
  import("@/components/details/bussinessDetail").then(module => {
    resolve(module)
  })
}

const bossDetail = resolve => {
  import("@/components/details/bossDetail").then(module => {
    resolve(module)
  })
}

const storeDetail = resolve => {
  import("@/components/details/storeDetail").then(module => {
    resolve(module)
  })
}

const goodsDetail = resolve => {
  import("@/components/details/goodsDetail").then(module => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/systemSurvey",
          name: "SystemSurvey",
          component: SystemSurvey
        },
        {
          path: "/developExponent",
          name: "DevelopExponent",
          component: DevelopExponent
        },
        {
          path: "/supervision",
          name: "Supervision",
          component: Supervision
        },
        {
          path: "/example",
          name: "Example",
          component: Example
        },
        {
          path: "/search",
          name: "Search",
          component: Search
          // children: [
          //   {
          //     path: "/search/newsDetail",
          //     name: "newsDetail",
          //     component: newsDetail
          //   },
          //   {
          //     path: "/search/searchDetail",
          //     name: "searchDetail",
          //     component: searchDetail
          //   }
          // ]
        },
        {
          path: "/declare",
          name: "Declare",
          component: Declare
        },
        {
          path: "/accusation",
          name: "Accusation",
          component: Accusation
        },
        {
          path: "/hotSpot",
          name: "HotSpot",
          component: HotSpot
        },
        {
          path: "/science",
          name: "Science",
          component: Science
        },
        {
          path: "/support",
          name: "Support",
          component: Support
        },
        {
          path: "/dynamics",
          name: "Dynamics",
          component: Dynamics
        },
        // 详情
        {
          path: "/detail",
          name: "Detail",
          component: Detail
        },
        {
          path: "/search/newsDetail",
          name: "newsDetail",
          component: newsDetail
        },
        {
          path: "/search/searchDetail",
          name: "searchDetail",
          component: searchDetail
        },
        {
          path: "/search/integrityDetail",
          name: "integrityDetail",
          component: integrityDetail
        },
        {
          path: "/detail/bussinessDetail",
          name: "bussinessDetail",
          component: bussinessDetail
        },
        {
          path: "/detail/goodsDetail",
          name: "goodsDetail",
          component: goodsDetail
        },
        {
          path: "/detail/storeDetail",
          name: "storeDetail",
          component: storeDetail
        },
        {
          path: "/detail/bossDetail",
          name: "bossDetail",
          component: bossDetail
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/sign",
      name: "Sign",
      component: Sign
    }
  ]
})
