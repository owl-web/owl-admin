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
    },
    {
      path: "/system/role",
      name: '用户管理',
      component: () => import("@/views/system/index.vue")
    },
    {
      path: "/system/menu",
      name: '菜单管理',
      component: () => import("@/views/system/menu.vue")
    },
    {
      path: "/system/department",
      name: '部门管理',
      component: () => import("@/views/system/index.vue")
    },
    {
      path: "/system/logs",
      name: '日志管理',
      component: () => import("@/views/system/index.vue")
    },
  ]
}


export default systemRouter