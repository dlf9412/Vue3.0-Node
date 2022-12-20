<template>
  <div>
    <button @click="gotoApp">登录页面</button>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()

function gotoApp(){
  router.push('/home')
}

</script>