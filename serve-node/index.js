const Koa=require('koa')
const Router=require('koa-router')//路由
const bodyParser=require('koa-bodyparser')//解析request的body
const config=require('./action/config')

//初始化
const app=new Koa()
const router=new Router()

//设置允许跨域--这一步在前端做了，所以先注释掉
// app.use(config)

//解析request的body
app.use(bodyParser())


router.get('/api',async (ctx,next)=>{
  ctx.response.body='111'
})


app.use(router.routes())
// 在端口3000监听
app.listen(3001,()=>{
  console.log('3001,服务启动了')
})
