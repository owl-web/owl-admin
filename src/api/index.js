import http from "../utils/http"


export const getData = ()=>{
  return http.get("/mock/news").then(res=>{
 
  })
// 获取菜单列表
export const getMenuData = ()=>{
  return http.get("/api/api/system/menu")
}


