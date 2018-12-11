<template>
 <div  class="portrait">
   <div class="portrait_1">
      <div class="userHead">
        <router-link to="/home"><img src="./../../static/images/studentHD_03.png"></router-link>
      </div>
     <h3><router-link to="/home">张洋</router-link></h3>
   </div>
 </div>
</template>

<script>
    export default {
        name: "suspensionPortrait"
    }
</script>

<style scoped>
  .portrait{ position: fixed; left: 0; top:0; right: 0; bottom: auto; z-index: 1000; background:rgba(102, 174, 162, 0.5); padding: 5px; border-radius: 5px 0 0 5px;}
  .portrait_1{ float: right;}
  .portrait_1 .userHead{ float: left; width:50px; height:50px; border-radius: 50%; overflow: hidden;}
  .portrait_1 .userHead.userHead img{ width: 100%; height: 100%;}
  .portrait h3{ overflow: hidden; border-radius: 3px; color:#ffffff; text-align: center; font-weight: normal; margin: 10px 0 0; font-size: 15px; padding: 5px 20px;}
  .portrait h3 a{ color: #ffffff;}

  @media screen and (min-width: 1920px) {

  }
</style>
