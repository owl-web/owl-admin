import { createRouter, createWebHashHistory } from "vue-router";
import nProgress from "nprogress";

import componentsRouter from "./modules/components";
import aboutRouter from './modules/about'
import systemRouter from './modules/system';
import routes from "./routes";

const allRoutes =  [...routes , aboutRouter , componentsRouter , systemRouter]
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes
})

router.beforeEach((to ,form ,netx)=>{
  console.log(to)
  console.log(form)
  nProgress.start()

  setTimeout(() => {
    netx()

  }, 1500);
})

router.afterEach((to , form , netx)=>{
  nProgress.done()
})
export default router
