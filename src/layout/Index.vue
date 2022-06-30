<template>
  <div :class="classNmae">
    <div class="nav">
      <el-menu :collapse="$store.state.app.collapse" text-color="#fff" active-text-color="#ffd04b"
        background-color="#545c64" style="height : 100% " default-active="2" class="el-menu-vertical-demo"
        @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>首页</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">首页1</el-menu-item>
            <el-menu-item index="1-2">首页1</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">首页3</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>引导页面</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <span>系统配置</span>
        </el-menu-item>
        <el-menu-item index="4">
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
let isOpen = computed(()=>{
 return store.state.app.collapse 
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  .nav {
    width: 210px;
    height: 100vh;
  }

  .content_warp {
    flex: 1;
  }
}

.layout.hide_menu {
  .nav {
    width: 64px;
  }
}
</style>