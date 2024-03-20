import { createRouter, createWebHashHistory } from "vue-router";
import nProgress from "nprogress";

import componentsRouter from "./modules/components";
import aboutRouter from './modules/about'
import systemRouter from './modules/system';
import errorRouter from "./modules/error";
import routes from "./routes";
import {genterRoutes} from '../utils/asyncRoutes.js'


const allRoutes =  [...routes , aboutRouter , componentsRouter , systemRouter , errorRouter]
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes
})

// 添加路由



// 防止路由无限循环
let routeFlag = false;

router.beforeEach((to ,form ,netx)=>{
 

  if(routeFlag === false){

    routeFlag = true

    const rs = genterRoutes()

    rs.forEach(item=>{
      router.addRoute(item)
    })
    netx({
      ...to, 
      replace:true
    })
  }

  
  nProgress.start()

  netx()

})

router.afterEach((to , form , netx)=>{
  nProgress.done()
})
export default router
