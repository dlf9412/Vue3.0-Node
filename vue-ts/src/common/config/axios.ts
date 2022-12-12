import axios from "axios";
const instance=axios.create()
instance.interceptors.request.use(config=>{
  // console.log(config)
  return config
},error=>{

})
export default instance