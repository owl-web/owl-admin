// 组件路由
const layout = import('@/layout/Index.vue')

const abooutRouter = {
  path: '/about',
  component: layout,
  redirect: "/about/index",
  meta: {

  },
  children:[
    {
      path: "/about/index",
      name: 'index',
      component: () => import("@/views/about/index.vue")
    }
  ]
}


export default abooutRouter