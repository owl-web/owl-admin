<!-- 父组件 -->
<template>
  <el-menu
    :collapse-transition="false"
    :collapse="$store.state.app.collapse"
    text-color="#fff"
    active-text-color="#ffd04b"
    background-color="#545c64"
    style="height: 100vh"
    default-active="2"
    class="el-menu-vertical-demo"
    :router="true"
  >
    <MenuItem :menuList="menus" />
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import MenuItem from "./MenuItem.vue";
import { genterRoutes }from '@/utils/asyncRoutes.js'
const router = useRouter();
// 菜单数组
const menus = genterRoutes()
console.log(menus)
// 获取当前路由路径
const defaultActive = ref(router.currentRoute._rawValue.path);
</script>
