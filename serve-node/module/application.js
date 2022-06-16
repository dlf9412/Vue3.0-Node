//应用中心
const Router = require('koa-router')
const router=new Router()

const {selectHome,selectAppCard}=require('../action/application')

router.get('/',selectHome)

router.get('/application/select',selectAppCard)

module.exports=router.routes()
