export const genterRoutes = function () {
  return  [
    {
      id: 1,
      title: "数据预览",
      icon: "el-icon-pie-chart",
      path: "/home",
    },
    {
      id: 2,
      title: "用户列表",
      icon: "el-icon-user",
      path: "/zs",
      meta:{
        title:'q'
      },
      component: () => import('@/components/Info.vue')
    },
    {
      id: 3,
      title: "题库列表",
      icon: "el-icon-edit-outline",
      path: "/home",
      children: [
        {
          id: 4,
          title: "企业列表",
          icon: "el-icon-office-building",
          path: "/home",
        },
        {
          id: 5,
          title: "学科列表",
          icon: "el-icon-notebook-2",
          path: "/home",
        },
      ],
    },
  ];
}