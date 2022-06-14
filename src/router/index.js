import { createRouter , createWebHashHistory } from "vue-router";
const routes = [
  {
    name : 'home',
    path : '/',
    meta:{
      title : '首页'
    },
    component :() => import('@/components/Home.vue') ,
  },
  {
    name : 'info',
    path : '/info',
    meta:{
      title : '首页'
    },
    component :()=> import ('@/components/Info.vue')
  },
]

console.log(routes)

const router = createRouter({
  history : createWebHashHistory(),
  routes
})
export default router
