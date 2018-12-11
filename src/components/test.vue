<template>
  <div class="test">
    <ul>
      <li v-for="item in itemList "><span>{{item.name}}</span><span>{{item.address}}</span><span>{{item.age}}</span></li>
    </ul>
    <p>这个东西是不是{{author}}</p>

    <div class="Bts">
      <button v-for="(v,index) in itemList" :class="{butON:v.cho}" @click="duxuan(index)" type="primary" plain>{{v.name}}</button>


    </div>

  </div>
</template>


<script>
 import "../../static/js/jquery-1.11.3.min";
    export default {
        name: "test",
      data(){
          return{
            itemList:[
              { name:"张燕",address:"江苏省徐州市泉山区",age:26,cho:true},
              { name:"张燕",address:"江苏省徐州市泉山区",age:28,cho:false},
              { name:"张燕",address:"江苏省徐州市泉山区",age:32,cho:false},
              { name:"张燕",address:"江苏省徐州市泉山区",age:45,cho:false},
              { name:"张燕",address:"江苏省徐州市泉山区",age:35,cho:false}
            ]
          }
      },
      mounted(){
        // this.duxuan();
      },
      methods:{
        duxuan:function (index) {
          console.log(this.itemList[index].cho);
          this.itemList[index].cho = !this.itemList[index].cho;
        }
      },
      // ,
      // mounted(){
      //   this.getAjax();
      // },
      // methods:{
      //   getAjax:function () {
      //     this.$ajax.get('tabdata')
      //       .then((response)=>{this.itemList = response.data.data})
      //     }).catch((response)=>{
      //       console.log(response);
      //     })
      //   }
      // },
      computed:{
        author(){
          return this.$store.state.author
        }
      }
    }
</script>

<style scoped>
 .test{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index: 2000; width:80%; height:90%; margin: auto;}
 .Bts button{ height: 35px; line-height:35px; padding: 0 15px; background: #ffffff; cursor: pointer; outline: none; border: 1px solid #9accff; color:#428ad4; border-radius: 3px; margin: 0 10px 10px 0;}
 .Bts .butON{ background:#66aef8; border: 1px solid #66aef8; color: #ffffff;}
</style>
