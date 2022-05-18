<template>
  <div>
    应用内
    <!-- <router-link to="/">首页</router-link> -->
    <div @click="routeLink">首页</div>
  </div>
</template>
<script lang='ts'>
import {useRouter} from 'vue-router'

export default{
  name:'APP',
  setup() {
    const router=useRouter() //相当于this.$router
    const routeLink=()=>{
      router.push('/')
    }
    return { //要使用到data,methods要进行抛出，外部才能使用
      routeLink
    }
  },
}
</script>