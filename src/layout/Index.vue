<template>
  <div :class="classNmae">
    <div class="nav">
      <el-menu :collapse-transition="false" :collapse="$store.state.app.collapse" text-color="#fff"
        active-text-color="#ffd04b" background-color="#545c64" style="height : 100% " default-active="2"
        class="el-menu-vertical-demo" :router = "true">

        <el-menu-item index="2">
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
    </div>
    <div class="content_warp">
      <Navbar />
      <Tags />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Tags from './components/Tags.vue'
import { Location, Menu as IconMenu, Document, Setting } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

let classNmae = computed(() => {
  return store.state.app.collapse ? 'layout hide_menu' : "layout"
})
let isOpen = computed(() => {
  return store.state.app.collapse
})
</script>

<style lang="scss" scoped>
.layout {
  .nav {
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 210px;
  }

  .content_warp {
    margin-left: 210px;
    transition: 0.2s;
  }
}

.layout.hide_menu {
  .nav {
    width: 64px;
  }

  .content_warp {
    margin-left: 64px;
  }
}
</style>
