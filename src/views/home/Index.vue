<template>
  <div>
    HomeZZZAAA
    <el-button @click="handleLogout">退出</el-button>
  </div>
</template>

<script setup>
import { setToken } from '@/utils/utils';


function handleLogout (){
  setToken(null)
  window.location.reload()
}
 
</script>

