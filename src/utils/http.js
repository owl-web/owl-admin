import axios from "axios";
import  {getToken , setToken} from '@/utils/utils'
import { ElNotification } from 'element-plus'

const http = axios.create({
  // baseURL : '/',
  timeout: 10 * 1000
})

http.interceptors.request.use(function(config){

  config.headers['Authorization'] = getToken()
  
  return config
} , function(err){
  return Promise.reject(err)
})

http.interceptors.response.use(function(response){
 
  return response.data
} , function(err){
  console.log(err)
  const { status, data } = err.response
  if(status === 401){
    ElNotification({ title:  '温馨提示',message: "登录超时", type: 'error' })

    setToken(null)
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  return Promise.reject(err)
})

export default http