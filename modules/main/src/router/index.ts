import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/micro',
      name: 'MICRO',
      component: Layout,
      children: [
        {
          path: 'product/:path(.*)*',
          component: () => import('@/views/micro-app/product.vue'),
          meta: { appName: "product" }
        },

      ]
   }
  ]
})

export default router
