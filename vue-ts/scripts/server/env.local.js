export default{
  '/api':{
    target:'http://localhost:6060',//实际请求地址
    changeOrigin:true,
    rewrite:(path)=>path.replace(/^\api/,'')
  },
  "/gwapi/v1": {
    "target":"https://paastest.zhixueyun.com/",
    "changeOrigin": true,
  },
}