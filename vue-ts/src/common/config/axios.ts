import axios from "axios";
import errorMessage from "./errorMsg";
const instance=axios.create()
// 请求超时
instance.defaults.timeout=5000
// 请求拦截
instance.interceptors.request.use(config=>{
  return config
},error=>{
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(response=>{
  const {data}=response
  if(data.code!==200){
    errorMessage(data)
  }
  return data
},error=>{
  errorMessage(error)
})
export default instance