import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import axios from 'axios'
// import Antd from 'ant-design-vue'
import axios from './common/config/axios'
import 'ant-design-vue/dist/antd.css'
import '@/common/icon/paas-icon/iconfont.css';
import '@/common/icon/icons/iconfont.css';
import '../public/iconfont.js'

const app=createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$axios=axios
