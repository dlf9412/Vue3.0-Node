const Koa=require('koa')
const Router=require('koa-router')
const app=new Koa()
const router=new Router()
const R=require('./controller/index')


const {controllersArray} =require('./utils/decorator')
controllersArray.forEach(item=>{
    let {url,constructor,method,handler}=item;
    const {prefix}=constructor;
    if(prefix) url=`${prefix}${url}`
    router[method](url,handler)
})

app.use(router.routes())
app.use(router.allowedMethods())




app.listen(5000,()=>{
    console.log('服务器启动了')
})

//想要在nodejs中使用ESM进行引入，需要使用rollup进行编译打包再运行
//rollup -c -w
//-c 找根目录  'rollup.config.js' 作为我的构建的配置
//-w watch 监听文件的变化，实时构建