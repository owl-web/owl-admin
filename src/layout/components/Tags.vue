<template>
  <div class="tags_warp">
    <el-tag>Tag 1</el-tag>
    <el-tag class="ml-2" type="success">Tag 2</el-tag>
    <el-tag class="ml-2" type="info" @click="changeRouter">Tag 3</el-tag>
    <el-tag class="ml-2" type="warning">Tag 4</el-tag>
    <el-tag class="ml-2" type="danger">Tag 5</el-tag>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function changeRouter() {
  router.push(
    {
      path: "/"
    }
  )
}
</script>


<style lang ='scss' scoped>
.tags_warp {
  padding: 10px 20px;
}
</style>