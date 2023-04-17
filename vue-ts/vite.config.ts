import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import devServer from './scripts/server/index.js'

// 项目相关的配置都在这里，包括文件夹别名、跨域、自动打开浏览器，设置启动的端口等等
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/common/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
  })],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  server:{
    ...devServer
    // open:true,//启动项目自动弹出浏览器
    // port:8000,//启动端口
    // proxy:{//设置代理
    //   '/api':{
    //     target:'http://localhost:6060',//实际请求地址
    //     changeOrigin:true,
    //     rewrite:(path)=>path.replace(/^\api/,'')
    //   },
    //   "/gwapi/v1": {
    //     "target":"https://paastest.zhixueyun.com/",
    //     "changeOrigin": true,
    //   },
    // }
  },
  
})
