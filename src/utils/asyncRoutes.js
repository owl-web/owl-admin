import Layout from '@/layout/index.vue'
export const genterRoutes = function () {
  return [
    {
      id: 1,
      title: "数据预览",
      icon: "el-icon-pie-chart",
      path: "/home",
    },
    {
      id: 3,
      title: "系统配置",
      icon: "el-icon-edit-outline",
      path: "/system",
      component: Layout,
      children: [
        {
          id: 4,
          title: "菜单列表",
          icon: "el-icon-office-building",
          path: "/system/menu",
          component: () => import('@/views/system/menu.vue')
        },
        {
          id: 5,
          title: "用户列表",
          icon: "el-icon-notebook-2",
          path: "/system/user",
          component: () => import('@/views/system/user.vue')
        },
      ],
    },
  ];
}