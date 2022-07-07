import http from "../utils/http"


export const getData = ()=>{
  return http.get("/api/getUser").then(res=>{
    console.log(res)
  })
}


export const Api_getUser = (params) => createAPI("/api/getUser", "get", params);
