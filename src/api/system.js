import http from "@/utils/http"


export const getData = ()=>{
  return http.get("/mock/news")
}
// 登录

export const login  = (data)=>{
  return http.post("/api/base/login"  , data)
}

// 获取菜单列表
export const getMenuData = ()=>{
  return http.get("/api/api/system/menu")
}

// 获取用户列表
export const getUserData = ()=>{
  return http.get("/api/api/user/list")
}


// 获取菜单列表

export const getRoleData = ()=>{
  return http.get("/api/api/system/roles")
}

// 获取用户角色信息

export const getUserRole = (data)=>{
  return http.get("/api/api/system/userroles" , {params:data})
}