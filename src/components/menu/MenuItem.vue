<!-- 子组件 menu-list -->

<template>
  <template v-for="item in menuList" :key="item.label">
    <el-sub-menu v-if="item.children" :index="item.path || item.label">
      <template #title>
        <!-- <Icon v-if="item.icon" :type="item.icon" /> -->
        <span>{{ item.title }}</span>
      </template>
      <MenuList :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path || item.label">
      <template #title>
        <!-- <Icon v-if="item.icon" :type="item.icon" /> -->
        <span>{{ item.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import { defineProps, defineAsyncComponent } from 'vue'
defineProps({
  menuList: {
    type: Array,
    require: true
  },
})

// 创建一个只有在需要时才会加载的异步组件。
// 引入自身组件，来做递归组件生成无限菜单
const MenuList = defineAsyncComponent({
  loader: () => import('./MenuItem.vue'),
})
</script>

