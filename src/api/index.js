import http from "../utils/http"


export const getData = ()=>{
  return http.get("/mock/news").then(res=>{
    console.log('---- api ---')
    console.log(res)
  })
}


