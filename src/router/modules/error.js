// 错误页面
const layout = import('@/layout/Index.vue')

const errorRouter = {
  path: '/error',
  component: layout,
  redirect: "/error/401",
  meta: {

  },
  children:[
    {
      path: "/error/401",
      name: '401',
      component: () => import("@/views/error/401.vue")
    },
    {
      path: "/error/403",
      name: '403',
      component: () => import("@/views/error/403.vue")
    },
    {
      path: "/error/404",
      name: '404',
      component: () => import("@/views/error/404.vue")
    },
  ]
}


export default errorRouter