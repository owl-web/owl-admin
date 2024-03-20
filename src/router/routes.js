


const layout = import('@/layout/Index.vue')
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: layout,
    redirect : '/home',
    children: [
      {
        name: 'info',
        path: '/info',
        meta: {
          title: 'Info'
        },
        component: () => import('@/components/Info.vue')
      },
      {
        name: 'home',
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/Index.vue'),
      },

    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/login/index.vue'),
  }
]

export default routes
