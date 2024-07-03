<template>
  <div>
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all>
      <el-table-column prop="name" label="用户名称" sortable />
      <el-table-column prop="email" label="邮箱" sortable />

       <el-table-column prop="sortOrder" label="编辑">
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleDialog(scope.row)">角色分配</el-button>
          <el-button type="primary" size="small">修改</el-button>
          <el-button type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
      <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="60%"
      >

      <userRole :id = 'activeId'/>

     <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getUserData } from '@/api/system.js'
import userRole from './components/userRole.vue';

const tableData = ref<any>([])
const activeId = ref<string>('')
getUserData().then(res => {
  tableData.value = res.data
  console.log(res)
})


function handleDialog(data){
 
  activeId.value = data.id
  dialogVisible.value = true
}

const  dialogVisible = ref<boolean>(false) 
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
