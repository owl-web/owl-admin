
export const setToken = function(token){
	if(token === null){
		localStorage.removeItem('_token')
	}else{
		localStorage.setItem("_token" , token )
	}
}

export const getToken = function(){
	return localStorage.getItem("_token")
}


// list转tree结构


export const listToTree = function (list) {
  // 创建一个映射，以id为键，节点对象为值
  const nodeMap = new Map(list.map((item) => [item.id, item]))

  // 定义树的根节点数组，如果有多个根节点，这里会存放所有根节点
  const roots = []

  // 遍历列表，构建树结构
  for (const item of list) {
    const node = nodeMap.get(item.id)
    const parent = nodeMap.get(item.pId)
	 
    // 如果父节点不存在，说明是根节点
    if (!parent) {
      roots.push(node)
    } else {
      // 如果父节点的children属性不存在，初始化一个数组
      if (!parent.children) {
        parent.children = []
      }
      // 将当前节点添加到父节点的children数组中
      parent.children.push(node)
    }
  }
   // 如果只有一个根节点，可以直接返回这个节点，否则返回根节点数组
  return roots
}
