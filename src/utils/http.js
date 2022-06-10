import axios from "axios";

const http = axios.create({
  baseURL : '/baseapi',
  timeout: 10 * 1000
})

http.interceptors.request.use(function(config){
  console.log('req config' , config)
  return config
} , function(err){
  console.log('req err' , err)
  return Promise.reject(err)
})

http.interceptors.response.use(function(response){
  console.log('res' , response)
  return response
} , function(err){
  console.log('res err' , err)
  return Promise.reject(err)
})

export default http