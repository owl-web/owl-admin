import Layout from '@/layout/index.vue'
import { getMenuData } from '@/api/system.js';
import { listToTree } from '@/utils/utils.js'

const modules = import.meta.glob('../views/*/*.vue');


function getCompoent(str) {
 
 
  if (str === '') {
    return () => import('@/Layout/index.vue')
  } else {
    console.log('1')
    console.log(str)
    console.log(modules)
    console.log(`../views${str}`)
    return modules[`../views${str}`]
  }
}

export const genterRoutes = async function () {
  let rs = await getMenuData()
  let tree = listToTree(rs.data)

  console.log(modules)

  const modifyTree = (tree) => {
    // 递归函数，用于遍历并修改每个节点
    const modifyNode = (node) => {
      // 创建新节点对象，保留原有属性，并修改name属性
      const newNode = {
        id: node.id,
        title: node.name,
        icon: "el-icon-pie-chart",
        path: node.path,
        component: getCompoent(node.component),
        children: node.children 
      };

      // 如果节点有子节点，递归修改子节点，并创建新的children数组
      if (newNode.children && newNode.children.length > 0) {
        newNode.children = newNode.children.map(modifyNode);
      }

      return newNode;
    };

    // 遍历树的根节点，生成新的树结构
    return tree.map(modifyNode);
  };

  return  modifyTree(tree);

}