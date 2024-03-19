const modules = import.meta.glob("../views/**/**.vue")

let jsonData = [
  {
    "id": "1769919189330706432",
    "appId": "1769907968770588672",
    "modId": "1769917707139170304",
    "menuName": "工作台",
    "menuLevel": 1,
    "code": "kso:gzt",
    "menuPath": "",
    "menuUrl": "/gzt",
    "imgPath": "",
    "openMode": "0",
    "disabled": "0",
    "sortId": 0,
    "descr": "{\n\t\"hideInMenu\": false,\n\t\"title\": \"工作台\",\n        \"type\":\"navList\",\n\t\"notCache\": true,\n         \"component\": \"Layout\",\n       \"name\": \"gzt\",\n       \"redirect\": \"/gzt/dbgz\"\n}",
    "isOpen": "0"
  },
  {
    "id": "1769919385380864000",
    "appId": "1769907968770588672",
    "modId": "1769917707139170304",
    "menuName": "待办工作",
    "menuLevel": 2,
    "code": "kso:dbgz",
    "menuPath": "",
    "pid": "1769919189330706432",
    "menuUrl": "/gzt/dbgz",
    "imgPath": "",
    "openMode": "0",
    "disabled": "0",
    "sortId": 0,
    "descr": "{\n\t\"hideInMenu\": false,\n\t\"title\": \"待办工作\",\n        \"type\":\"navList\",\n\t\"notCache\": true,\n         \"component\": \"/views/about/index.vue\",\n       \"name\": \"gzt\",\n       \"redirect\": \"/gzt/dbgz\"\n}",
    "isOpen": "0"
  },
	{
    "id": "1769919385380864000",
    "appId": "1769907968770588672",
    "modId": "1769917707139170304",
    "menuName": "线索来源跟",
    "menuLevel": 1,
    "code": "kso:dbgz",
    "menuPath": "",
    "pid": "1769919189330706432",
    "menuUrl": "/gzt/dbgz",
    "imgPath": "",
    "openMode": "0",
    "disabled": "0",
    "sortId": 0,
    "descr": "{\n\t\"hideInMenu\": false,\n\t\"title\": \"待办工作\",\n        \"type\":\"navList\",\n\t\"notCache\": true,\n         \"component\": \"/view/about/index.vue\",\n       \"name\": \"gzt\",\n       \"redirect\": \"/gzt/dbgz\"\n}",
    "isOpen": "0"
  },
  {
    "id": "1769919677447028736",
    "appId": "1769907968770588672",
    "modId": "1769917707139170304",
    "menuName": "线索来源",
    "menuLevel": 2,
    "code": "kso:xsly",
    "menuPath": "",
    "pid": "1769919592671756288",
    "menuUrl": "/xsgl/xsly",
    "imgPath": "",
    "openMode": "0",
    "disabled": "0",
    "sortId": 0,
    "descr": "",
    "isOpen": "0"
  },
  {
    "id": "1769919794182897664",
    "appId": "1769907968770588672",
    "modId": "1769917707139170304",
    "menuName": "12337",
    "menuLevel": 3,
    "code": "kso:12337",
    "menuPath": "",
    "pid": "1769919677447028736",
    "menuUrl": "/xsgl/xsly/12337",
    "imgPath": "",
    "openMode": "0",
    "disabled": "0",
    "sortId": 0,
    "descr": "",
    "isOpen": "0"
  },
  {
    "id": "1769919934855659520",
    "appId": "1769907968770588672",
    "modId": "1769917707139170304",
    "menuName": "上级交办",
    "menuLevel": 3,
    "code": "kso:sjjb",
    "menuPath": "",
    "pid": "1769919677447028736",
    "menuUrl": "/xsgl/xsly/sjjb",
    "imgPath": "",
    "openMode": "0",
    "disabled": "0",
    "sortId": 0,
    "descr": "",
    "isOpen": "0"
  }
]

export const genterRoutes = function(data){

	function getCompoent(str){
		if(str = 'Layout'){
			return '@/layout/Index.vue'
		}else{
			return `@/${str}`
		}
	}
	
	
	let rs = []

	for (let i = 0; i < jsonData.length; i++) {
		const item = jsonData[i];
		if(item.menuLevel === 1){
			let descr = {}

			if(item.descr){
				descr = JSON.parse(item.descr)
			}
			

			let componentPath = `..${descr.component}`

			console.log(componentPath)
			console.log(descr.component)
			console.log(modules)
 
			rs.push({
        path: item.menuUrl,
        name: item.code,
        // component: () => import('../views/about/index.vue'),
				component:modules['../views/about/index.vue'],
        meta: {
            title: '部门管理',
            permissionCode: 10404
        },
			})
		}


	}
	console.log(rs)
	return rs 


}