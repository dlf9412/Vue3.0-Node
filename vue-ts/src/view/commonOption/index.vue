<template>
  <div class="commonOption" @drop="dropFn"  @dragover="dragover" @dragenter="dragenter">
    <div :class="'div-form-item'+item" draggable="true" @drag="dragFn" v-for="item in 10" :key="item">1111{{item}}</div>
  </div>
</template>
<script lang="ts">
export default{
  name:'commonOption',
  setup(){
    const dragFn=(e:any)=>{
      // console.log(e)
      e.preventDefault();
    }
    const dropFn=(e:any)=>{
      console.log(e)
    }
    const dragover=(e:any)=>{
      e.preventDefault();
    }
    const dragenter=(e:any)=>{
      e.preventDefault();
    }
    return {
      dragFn,
      dropFn,
      dragover,
      dragenter
    }
  }
}
</script>
<style lang="less">
.commonOption{
  // background: white;
  min-height: 200px;
}

</style>