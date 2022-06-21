import { createRouter, createWebHashHistory } from "vue-router";
const layout = import('@/layout/Index.vue')
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('@/components/Home.vue'),
  },
  {
    name: 'info',
    path: '/info',
    meta: {
      title: '首页'
    },
    component: layout,
    children: [
      {
        name: 'detail',
        path: '/info/detail',
        meta: {
          title: '首页'
        },
        component: () => import('@/components/Info.vue')
      }
    ]
  },
]

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
