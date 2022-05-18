import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app=createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$axios=axios
