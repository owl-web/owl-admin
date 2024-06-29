<template>
  <div>
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all>
      <el-table-column prop="date" label="Date" sortable />
      <el-table-column prop="name" label="菜单名称" sortable />
      <el-table-column prop="path" label="菜单路径" sortable />
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
import { getUserData } from '@/api/system.js'


const tableData = ref<any>([])
getUserData().then(res => {
  tableData.value = res.data
  console.log(res)
})


interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}



// const tableData: User[] = [
//   {
//     id: 1,
//     date: '2016-05-02',
//     name: 'wangxiaohu',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     id: 2,
//     date: '2016-05-04',
//     name: 'wangxiaohu',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     id: 3,
//     date: '2016-05-01',
//     name: 'wangxiaohu',
//     address: 'No. 189, Grove St, Los Angeles',
//     children: [
//       {
//         id: 31,
//         date: '2016-05-01',
//         name: 'wangxiaohu',
//         address: 'No. 189, Grove St, Los Angeles',
//       },
//       {
//         id: 32,
//         date: '2016-05-01',
//         name: 'wangxiaohu',
//         address: 'No. 189, Grove St, Los Angeles',
//       },
//     ],
//   },
//   {
//     id: 4,
//     date: '2016-05-03',
//     name: 'wangxiaohu',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]


</script>
