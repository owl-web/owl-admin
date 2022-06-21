import { createRouter , createWebHashHistory } from "vue-router";
const Layout = () => import('@/layout/index.vue')
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
    component : Layout,
    meta:{
      title : '首页'
    },
    children:[
      {
        path:'/info/detail',
        name : 'detail',
        component :()=> import ('@/components/Info.vue')

      }
    ]
  },
]


const router = createRouter({
  history : createWebHashHistory(),
  routes
})
export default router
