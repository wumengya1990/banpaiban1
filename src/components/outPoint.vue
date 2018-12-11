<template>
    <div class="outPoint">
      <div class="outPointBt"><img src="./../../static/images/outBtIco_03.png"></div>
    </div>
</template>

<script>
    export default {
        name: "outPoint"
    }
</script>

<style scoped>
  .outPoint{ position: fixed; z-index: 1000; right: 0; bottom:10%; border-radius: 50px 0 0 50px; padding: 10px;}
  .outPoint .outPointBt{ width: 50px; height: 50px; margin: 0 20px 0 0; border:5px solid #ffffff; background: #ffffff; overflow: hidden; border-radius:50%; position: relative; background: -webkit-linear-gradient( #79d6fc, #39d69e); background: -moz-linear-gradient( #79d6fc, #39d69e); background: linear-gradient( #79d6fc, #39d69e); /* 标准的语法 */}
  .outPoint .outPointBt img{ width: 100%; height: 100%; overflow: hidden; position: absolute; left: 0; top: 0;}
</style>
