const application=require('../json/application')
const parseUrl=require('../common/index')
const {cloneDeep}=require('lodash')

/**
 * 查询
 * @param {*} ctx 上下文
 * @param {*} next 下一个中间件
 */
const selectHome=(ctx,body)=>{
  ctx.body=1111
}
/**
 * 查询应用中心信息
 * @param {*} ctx 上下文
 * @param {*} next 下一个中间件
 */
const selectAppCard=async (ctx,next)=>{
  let body={data:{records}}=cloneDeep(application)
  let {appName}=ctx.query
  if(!!appName){
    body.data.records=records.map(i=>{
        i.appList=i.appList.filter(j=>j.label.includes(appName))
        return i
    })
  }
  ctx.body=body
}


module.exports={
  selectHome,
  selectAppCard
}
