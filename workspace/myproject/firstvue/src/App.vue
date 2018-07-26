<template>
  <div>
    <input type="text" name="" v-model="text">
    显示：{{text | myFilter}}
  </div>
</template>
<script>
  export default{
    filter:{
      myFilter:function(value){
        return value.split('').reverse().join('');
      }
    },
    data(){
      return {
        text:''
      }
    }
  }
</script>
<style>
</style>