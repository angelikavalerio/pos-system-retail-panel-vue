import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/Dashboard/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/product-management',
      name: 'product management',
      component: () => import('@/ProductManagement/index.vue')
    }
  ]
})

export default router
