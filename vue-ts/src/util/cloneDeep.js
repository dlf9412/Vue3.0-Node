//实现深拷贝的方式
//json.parse(json.stringfy())
// {...obj}扩展运算符
//object.assign()
// 以上方法都没法复制深层次的对象结构所以可以使用后面的方法进行深层次的深拷贝
//lodash/cloneDeep
//手写递归的方法
const cloneDeep=(obj)=>{
  const target={}
  Object.entries(obj).forEach(([key,value])=>{
    const type=Object.prototype.toString.call(value).slice(8,-1).toLowerCase()
    if(type==='object'){
      target[key]=cloneDeep(value)
    }else{
      target[key]=value
    }
  })
  return target
}
export default {
  cloneDeep
}