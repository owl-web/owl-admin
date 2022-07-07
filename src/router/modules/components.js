// 组件路由
const layout = import('@/layout/Index.vue')

const componentsRouter = {
  path: '/components',
  component: layout,
  redirect: "/components/json",
  meta: {

  },
  children:[
    {
      path: "/components/json",
      name: 'json',
      component: () => import("@/views/components/json.vue")
    },
    {
      path: "/components/video",
      name: 'video',
      component: () => import("@/views/components/video.vue")
    }
  ]
}


export default componentsRouter