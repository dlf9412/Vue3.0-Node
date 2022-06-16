import axios from 'axios'

export const selectAppliction=()=>{
  return axios.get('/api/application/select')
}