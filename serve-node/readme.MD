#### 实现思路

- 基础框架的搭建
- 在基础框架实现以后进行框架重构，使用 ES6 的方法进行封装，装饰器等

#### 准备工作

- npm init 初始化空架构
- npm install --save koa koa-router koa-bodyparser 安装

- npm install nodemon --save 热更新模块
- 修改 package.json

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

- 运行 npm start
