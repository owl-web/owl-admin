import { createRouter, createWebHashHistory } from "vue-router";


import componentsRouter from "./modules/components";

const layout = import('@/layout/Index.vue')
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: layout,
    redirect : '/home',
    children: [
      {
        name: 'info',
        path: '/info',
        meta: {
          title: '首页'
        },
        component: () => import('@/components/Info.vue')
      },
      {
        name: 'home',
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('@/components/Home.vue'),
      },
    ]
  },
  componentsRouter,
  // permission
]

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
