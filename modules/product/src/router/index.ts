import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory('/micro/product'),
  routes: [
    {
      path: '/a',
      name: 'APage',
      component: ()=>import('../views/A.vue')
    },
    {
      path: '/b',
      name: 'BPage',
      component: ()=>import('../views/B.vue')
    },
  ]
})
if (window.microApp){
  window.microApp.addDataListener((e: any) => {
    console.log(e)
    if (e.path) return router.push({ path: e.path })
  }, true)
}

export default router
