<template>
  <div>
    应用内
    <!-- <router-link to="/">首页</router-link> -->
    <div @click="routeLink">首页</div>
    <a-input></a-input>
  </div>
</template>
<script lang='ts'>
import { onMounted } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
import {Input} from 'ant-design-vue'

export default{
  name:'APP',
  components:{
    aInput:Input
  },

  setup() {
    const router=useRouter() //相当于this.$router
    const routeLink=()=>{
      router.push('/')
    }

    onMounted(() => {
      console.log(888)
    })
    return { //要使用到data,methods要进行抛出，外部才能使用
      routeLink
    }
  },
  
}
</script>