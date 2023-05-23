import { message as antMessage } from "ant-design-vue"
interface dataType{
  code:string|number,
  message:string
}
const codeOfMsg:Array<dataType>=[{
  code:'ECONNABORTED',
  message:'请求超时,请检查网络设置'
}]
// 错误提示
const errorMessage=(data:any)=>{
  const {code,message}=data
  const index=codeOfMsg.findIndex(i=>i.code===code)
  if(index>=0){
    const msg=codeOfMsg[index].message
    msg&&antMessage.error(msg)
  }else{
    code!==0&&antMessage.error(message)
  }
}

export default errorMessage