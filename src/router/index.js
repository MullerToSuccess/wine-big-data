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


const supervisionDetail = resolve => {
  import("@/components/details/supervisionDetail").then(module => {
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
  import("@/pages/declare/index").then(module => {
    resolve(module)
  })
}

const AccusationAndAppeal = resolve => {
  import("@/pages/AccusationAndAppeal/index").then(module => {
    resolve(module)
  })
}

const HotSpot = resolve => {
  import("@/components/HotSpot").then(module => {
    resolve(module)
  })
}

const Science = resolve => {
  import("@/pages/science/index").then(module => {
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

const newsDetail2 = resolve => {
  import("@/components/details/newsDetail2").then(module => {
    resolve(module)
  })
}

const integrityDetail = resolve => {
  import("@/components/details/integrityDetail").then(module => {
    resolve(module)
  })
}

const ScienceDetail =  resolve => {
  import("@/components/details/ScienceDetail").then(module => {
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

const accusationDetail = resolve => {
  import("@/components/details/accusationDetail").then(module => {
    resolve(module)
  })
}

/* 资质填报 */
const QualificationForm = resolve => {
  import("@/pages/declare/qualificationForm").then(module => {
    resolve(module)
  })
}
/* 奖励填报 */
const PrizeForm= resolve => {
  import("@/pages/declare/PrizeForm").then(module => {
    resolve(module)
  })
}
/* 财务数据填报 */
const FinanceForm = resolve => {
  import("@/pages/declare/FinanceForm").then(module => {
    resolve(module)
  })
}
/* 管理数据填报 */
const ManagementForm = resolve => {
  import("@/pages/declare/managementForm").then(module => {
    resolve(module)
  })
}
/* 酒企申述 */
const AppealForm = resolve => {
  import("@/pages/accusationAndAppeal/appealForm").then(module => {
    resolve(module)
  })
}
const AccusationForm = resolve => {
  import("@/pages/accusationAndAppeal/accusationForm").then(module => {
    resolve(module)
  })
}
// 酒企申述

const Accusation = resolve => {
  import("@/pages/accusationAndAppeal/accusation").then(module => {
    resolve(module)
  })
}

const Appeal = resolve => {
  import("@/pages/accusationAndAppeal/Appeal").then(module => {
    resolve(module)
  })
}
// 图谱关系

const contact = resolve => {
  import("@/components/common/contact").then(module => {
    resolve(module)
  })
}

// 风险
const riskInfo = resolve => {
  import("@/components/common/riskInfo").then(module => {
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
          path: "/supervision/supervisionDetail",
          name: "supervisionDetail",
          component: supervisionDetail
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
          path: "/Declare",
          name: "Declare",
          component: Declare
        },
        {
          path: "/Declare/QualificationForm",
          name: "QualificationForm",
          component: QualificationForm
        },
        {
          path: "/Declare/PrizeForm",
          name: "PrizeForm",
          component: PrizeForm
        },
        {
          path: "/Declare/FinanceForm",
          name: "FinanceForm",
          component: FinanceForm
        },
        {
          path: "/Declare/ManagementForm",
          name: "ManagementForm",
          component: ManagementForm
        },
        {
          path: "/AccusationAndAppeal/Appeal/AccusationForm",
          name: "AccusationForm",
          component: AccusationForm
        },
        {
          path: "/AccusationAndAppeal/Appeal/AppealForm",
          name: "AppealForm",
          component: AppealForm
        },
        {
          path: "/AccusationAndAppeal",
          name: "AccusationAndAppeal",
          component: AccusationAndAppeal
        },
        {
          path: "/AccusationAndAppeal/Accusation",
          name: "Accusation",
          component: Accusation
        },
        {
          path: "/AccusationAndAppeal/Appeal",
          name: "Appeal",
          component: Appeal
        },
        {
          
          path: "/accusation/accusationDetail",
          name: "accusationDetail",
          component: accusationDetail
        },
        {
          path: "/hotSpot",
          name: "HotSpot",
          component: HotSpot
        },
        {
          path: "/Science",
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
          path: "/search/newsDetail2",
          name: "newsDetail2",
          component: newsDetail2
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
          path: "/Science/ScienceDetail",
          name: "ScienceDetail",
          component: ScienceDetail
        },
        {
          path: "/search/integrityDetail/contact",
          name: "contact",
          component: contact
        },
        {
          path: "/search/integrityDetail/riskInfo",
          name: "riskInfo",
          component: riskInfo
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
