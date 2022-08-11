<template>
  <el-menu 
    :collapse-transition="false" 
    :collapse="$store.state.app.collapse" 
    text-color="#fff"
    active-text-color="#ffd04b" 
    background-color="#545c64" 
    style="height : 100% " 
    default-active="2"
    class="el-menu-vertical-demo" 
    :router="true">

    <el-menu-item index="/home">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/components">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>组件</span>
      </template>
      <el-menu-item index="/components/json">JSON</el-menu-item>
      <el-menu-item index="/components/video">视频</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/error">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>错误页面</span>
      </template>
      <el-menu-item index="/error/401">401</el-menu-item>
      <el-menu-item index="/error/403">404</el-menu-item>
      <el-menu-item index="/error/404">404</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <span>系统配置</span>
    </el-menu-item>
    <el-menu-item index="/system/index">
      <el-icon>
        <setting />
      </el-icon>
      <span>关于我们</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { Location, Menu as IconMenu, Document, Setting } from '@element-plus/icons-vue'


</script>
