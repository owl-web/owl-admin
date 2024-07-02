import { createRouter, createWebHashHistory } from "vue-router";
import nProgress from "nprogress";

import componentsRouter from "./modules/components";
import aboutRouter from './modules/about'
import errorRouter from "./modules/error";
import routes from "./routes";
import {genterRoutes} from '../utils/asyncRoutes.js'
import { getToken } from "@/utils/utils.js";


const allRoutes =  [...routes , aboutRouter , componentsRouter  , errorRouter]
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes
})

// 添加路由



// 防止路由无限循环
let routeFlag = false;

router.beforeEach(async (to ,form ,next)=>{
  // 获取token 

  const token = getToken()
  
  if(!token){
    if(to.path === '/login'){

      next()
    }else{
       router.replace({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      return
    }

  }

 

  if(routeFlag === false){

    routeFlag = true

    const rs = await genterRoutes()
    console.log(rs  , 'rs-------')
    rs.forEach(item=>{
      router.addRoute(item)
    })
    next({
      ...to, 
      replace:true
    })
  }

  
  nProgress.start()

  next()

})

router.afterEach((to , form , next)=>{
  nProgress.done()
})
export default router
