<template>
  <div class="top_navbar" @click="menuToggle">
    topNavBar
  </div>
</template>


<script setup>
import { useStore } from 'vuex'
const store = useStore()

function menuToggle(){
  store.commit("changeCollapse")
}

</script>

<style lang="scss" scoped>
.top_navbar{
    line-height: 80px;
    font-size: 24px;
    padding: 0 40px;
    background: #eee;
}
</style>