// 组件路由
const layout = import('@/layout/Index.vue')

const systemRouter = {
  path: '/system',
  component: layout,
  redirect: "/about/index",
  meta: {

  },
  children:[
    {
      path: "/system/index",
      name: 'index',
      component: () => import("@/views/system/index.vue")
    }
  ]
}


export default systemRouter