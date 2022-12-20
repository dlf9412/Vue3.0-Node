import axios from "axios";
const instance=axios.create()
instance.defaults.timeout=10000
instance.interceptors.request.use(config=>{
  return config
},error=>{
  return Promise.reject(error)
})
export default instance