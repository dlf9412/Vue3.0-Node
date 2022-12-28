import axios from '@/common/config/axios'

interface loginParamsType{
  username:string,
  password:string
}
export const login=(params:loginParamsType)=>{
  return axios.post('/api/login',params)
}