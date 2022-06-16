//模块引入
const application=require('./application')

const Router=require('koa-router')//路由

/**
 * 添加路由前缀
 */
const router=new Router({
    prefix:'/api'
})

router.use(application)

module.exports=router

