# Vue 3 + TypeScript + Vite

## 准备工作

- 升级当前的 vue/cli 的版
- 升级 node 版本在 12.0.0 以上

```js
npm install -g @vue/cli //升级脚手架的版本--兼容Vue2.0+/3.0+
//nodeJs 版本到node 官网下载
```

## 项目初始化

- 使用 vite 进行脚手架的搭建

```js
npm init vite-app <project-name>
//或
yarn create vite-app <project-name>

//进入项目
cd <project-name>
npm install
npm run dev
```

## 开发准备

- 安装相应的依赖

```js
npm install --save axios less ant-design-vue
```

- main.js 引入依赖并进行挂载

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$axios = axios
```

## 开发

- 配置相应的路由，进行路由跳转
- 页面组件化开发，组件进行 DefineComponent 声明，通过 env.d.ts 文件
