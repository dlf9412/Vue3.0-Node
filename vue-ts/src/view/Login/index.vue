<template>
  <div class="login-bg">
    <div class="login-contain">
        <div class="login-title">
          <div>账户登录</div>
        </div>
        <a-input :style="inputStyle" v-model:value="loginMes.username"></a-input>
        <input-password :style="inputStyle" v-model:value="loginMes.password"></input-password>
        <a-button :style="inputStyle" type="primary" @click="gotoApp" class="login-btn">登录</a-button>
      </div>
    
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Input as aInput,InputPassword,Button as aButton } from 'ant-design-vue';
import {login} from '@/serve/login'
import { onMounted,onUnmounted } from '@vue/runtime-core'
interface loginMes{
  username:string,
  password:string
}

const router = useRouter()
const inputStyle={
  width:'400px',
  margin:'20px 0'
}
const loginMes=reactive<loginMes>({
  username: '',
  password: ''
})
// 登录
async function gotoApp(){
  const data =await login(loginMes)
  if(data.code===200){
    router.push('/home')
  }
    
}
// enter键盘登录
const addEvent=()=>{
 document.onkeyup=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if(e && e.keyCode==13){ // enter 键
    gotoApp()
  }
 }
}
onMounted(() => {
  addEvent()
})
onUnmounted(()=>{
  document.onkeyup=function(){}
  console.log('注销')
})

</script>
<style lang="less" scoped>
@import '@/common/css/index.less';

.login-bg{
  height: 100%;
  width: 100%;
  background: url('@/assets/login-bg.png') center center / 100% ;
  .displayFlex(center);
  .login-contain{
    width: 680px;
    height: 452px;
    background: white;
    .login-title{
      width: 400px;
      color: #1890ff;
      position: relative;
      left: 50%;
      transform: translate(-50%,0);
      margin: 80px 0 20px 0;
      border-bottom: 3px solid #1890ff;
      .displayFlex(center);
      div{
        width: 100px;
        
      }
    }
  }
}
</style>