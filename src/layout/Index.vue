<template>
  <div :class="classNmae">
    <div class="nav">
      <TreeMenu />
    </div>
    <div class="content_warp">
      <Navbar />
      <Bread />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue'
import Tags from './components/tags.vue'
import TreeMenu from './components/treeMenu.vue'
import Bread from './components/bread.vue'
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
