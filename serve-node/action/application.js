const application=require('../json/application')


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
const selectAppCard=(ctx,next)=>{
  ctx.body=application
}


module.exports={
  selectHome,
  selectAppCard
}
