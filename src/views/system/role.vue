<template>
  <div>
    <h1>Juese</h1>
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all>
      <el-table-column prop="name" label="角色名称" sortable />
      <el-table-column prop="path" label="角色代码" sortable />
      <el-table-column prop="sortOrder" label="排序" sortable />
      <el-table-column prop="sortOrder" label="编辑">
        <el-button type="primary" size="small">修改</el-button>
        <el-button type="primary" size="small">删除</el-button>
      </el-table-column>
    </el-table>


  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getRoleData } from '@/api/system.js'


const tableData = ref<any>([])

getRoleData().then(res => {
  tableData.value = res.data
})

</script>
