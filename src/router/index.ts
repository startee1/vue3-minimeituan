import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/index/Index.vue'
import WaimaiIndex from '../views/waimai/index/Index.vue'
import WaimaiSearch from '../views/waimai/search/Search.vue'
import WaimaiShop from '../views/waimai/shop/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    if (to.name == 'waimaiShop' && from.name == 'waimaiShop') {
      document.getElementById('myApp')!.scrollTop = 400
    } else {
      document.getElementById('myApp')!.scrollTop = 0
    }
    return { el: '#myApp', top: 0, } 
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/waimai',
      children: [
        {
          path: '',
          name: 'waimaiIndex',
          component: WaimaiIndex
        },
        {
          path: 'search',
          name: 'waimaiSearch',
          component: WaimaiSearch
        },
        {
          path: 'shop',
          name: 'waimaiShop',
          component: WaimaiShop
        }
      ],
    },
  ]
})

export default router
