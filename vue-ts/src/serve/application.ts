import axios from '@/common/config/axios'
import {selectApplictionParams} from './type/application'

export const selectAppliction=(params:selectApplictionParams)=>{
  return axios.get('/api/application/select',{params})
}