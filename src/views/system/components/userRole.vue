<template>
		<div>
			{{props.id}}
			<el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all>
				<el-table-column prop="roleCode" label="角色名称" sortable />
				<el-table-column prop="sortOrder" label="编辑">
 
					<el-button type="error" size="small">删除</el-button>
				</el-table-column>	
			</el-table>
		</div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import { getUserRole , defineProps } from '@/api/system.js'
 
const props = defineProps({
  // 基本类型
  id: String,
 
});

const tableData = ref<any>([])

getUserRole({id: props.id}).then(res => {
  tableData.value = res.data
  console.log(res)
})



</script>

<style lang='less' scoped>

</style>