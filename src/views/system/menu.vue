<template>
  <div>


    <div>
      <el-button type="primary" @click="addMenuHadnle">新增菜单</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all
      :tree-props="{ children: 'children', hasChildren: true }">
      <el-table-column prop="name" label="菜单名称" sortable />
      <el-table-column prop="path" label="菜单路径" sortable />
      <el-table-column prop="component" label="组件路径" sortable />
      <el-table-column prop="sortOrder" label="排序" sortable />
      <el-table-column prop="sortOrder" label="编辑">
        <template #default="scope">

        <el-button type="primary" size="small">修改</el-button>
        <el-button type="primary" @click="deleteMenuHandle(scope.row.id)" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增弹窗 -->
    <el-dialog v-model="showDialog" title="Tips" width="1100px">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="菜单名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input v-model="form.path" />
        </el-form-item>
        <el-form-item label="排序">
          <el-col :span="11">
            <el-input v-model="form.sort_order" />
          </el-col>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="showDialog = false">取消</el-button>
          <el-button type="primary" @click="submitForm">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getMenuData, addMenu ,deleteMenu} from '@/api/system.js'
import { listToTree } from '@/utils/utils.js'

const form = ref<any>({
  "name": "主页3123",
  "path": "/index",
  "p_id": 0,
  "sort_order": 0,
})

const loading = ref<boolean>(false) 

const tableData = ref<any>([])
function getMenuDataHandle(){
  getMenuData().then(res => {
    tableData.value = listToTree(res.data)
  })
}
getMenuDataHandle()
const showDialog = ref<boolean>(false)

function addMenuHadnle() {

  showDialog.value = true
}

function submitForm(){
  addMenu(form.value).then(res => {
    console.log(res)
    getMenuDataHandle()
  })
}

function deleteMenuHandle(id){
  deleteMenu({
    id:id
  }).then(res => {
    getMenuDataHandle()
    console.log(res)
  })
}



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
