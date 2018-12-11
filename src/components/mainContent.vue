<template>
  <div class="mianContent1">
    <div class="cloud"></div>
  </div>
</template>

<script>
    export default {
        name: "mainContent"
    }
</script>

<style scoped>

 .mianContent1{ position: fixed; z-index: 9; left: 0; top: 0;  right: 0; bottom: 0; margin: auto; background:url("./../../static/images/bpBg.png") no-repeat scroll center bottom #cfeeed; background-size:100%; }
  .cloud{ position: absolute; left:5%;  top:5%; background: url("./../../static/images/yun.png") no-repeat scroll center center; width: 190px; height:105px; background-size:80%;}

</style>
