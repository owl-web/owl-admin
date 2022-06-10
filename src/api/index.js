import http from "../utils/http"


export const getData = ()=>{
  return http.get("/qaq").then(res=>{
    console.log(res)
  })
}

