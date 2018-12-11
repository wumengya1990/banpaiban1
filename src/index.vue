<template>
  <div id="index">
    <Nav></Nav>
    <mainContent></mainContent>
    <outPoint></outPoint>
    <suspensionPortrait></suspensionPortrait>
    <router-view/>
  </div>
</template>


<script>
  import Nav from '../src/components/Nav.vue'
  import mainContent from '../src/components/mainContent.vue'
  import suspensionPortrait from '../src/components/suspensionPortrait'
  import outPoint from '../src/components/outPoint'
export default {
  name: 'index',
  components:{
    mainContent,
    Nav,
    suspensionPortrait,
    outPoint }

}
</script>

<style>
  .contentBox{ position: fixed; z-index: 11; width: 80%; height:80%; left:0; top:6%; right:0; bottom:auto;  margin: auto; background: rgba(0,0,0,0.6)}
</style>
