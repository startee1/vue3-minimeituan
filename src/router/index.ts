import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/index/index.vue'
import WaimaiIndex from '../views/waimai/index/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          name: 'waimaiindex',
          component: WaimaiIndex
        }
      ],
    },
  ]
})

export default router
