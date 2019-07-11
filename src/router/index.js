import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// 模块
import SystemSurvey from '@/components/SystemSurvey'
import DevelopExponent from '@/components/DevelopExponent'
import Supervision from '@/components/Supervision'
import Example from '@/components/Example'
import Search from '@/components/Search'
import Declare from '@/components/Declare'
import Accusation from '@/components/Accusation'
import HotSpot from '@/components/HotSpot'
import Science from '@/components/Science'
import Support from '@/components/Support'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/systemSurvey',
      name: 'SystemSurvey',
      component: SystemSurvey
    },
    {
      path: '/developExponent',
      name: 'DevelopExponent',
      component: DevelopExponent
    },
    {
      path: '/supervision',
      name: 'Supervision',
      component: Supervision
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/declare',
      name: 'Declare',
      component: Declare
    },
    {
      path: '/accusation',
      name: 'Accusation',
      component: Accusation
    },
    {
      path: '/hotSpot',
      name: 'HotSpot',
      component: HotSpot
    },
    {
      path: '/science',
      name: 'Science',
      component: Science
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    },
  ]
})
