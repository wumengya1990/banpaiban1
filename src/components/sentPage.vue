<template>
    <div class="sentPage">
      <div class="sentPageTop"></div>
      <div class="sentPageContent">
        <el-input type="textarea" :rows="15" placeholder="请输入内容" style=" font-size: 1.5rem; line-height:2em;" v-model="textarea"></el-input>
      </div>
      <div class="sentPageBottom"></div>
    </div>
</template>

<script>
    export default {
        name: "sentPage",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
  .sentPage{ position: absolute; background: #ffffff; left: 0; top:50px; right:0; bottom:55px; border-radius: 10px; box-shadow:0 1px 2px #216563;}
  .sentPageContent{padding: 20px;}
</style>
