<template>
    <div class="home">
      <h2>{{studentName}}同学,欢迎您！</h2>
      <div class="studentImg"><img src="./../../static/images/studentHD_03.png"></div>
      <div class="studentMessage">
        <ul>
          <li><em>姓名：</em><div class="rightCon"><p>孙涛</p></div></li>
          <li><em>班级：</em><div class="rightCon"><p>一年级二班</p></div></li>
          <li><em>职务：</em><div class="rightCon"><p>组长</p></div></li>
          <li><em>小组：</em><div class="rightCon"><p>励志组</p></div></li>
          <li><em>座右铭：</em><div class="rightCon">
            <el-button class="reviseButton" v-show="revisebt" size="small" @click="textHide" icon="el-icon-edit" circle></el-button>
            <div class="specialWord" v-show="Wordtext"><p @click="textHide">{{Motto}}</p></div>
            <div class="specialWordInput"  v-show="inputtext"><el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="shuruTextarea"></el-input><el-button type="primary" @click="inputHide">保存</el-button></div>
          </div></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
          return{
            studentName:'张洋',
            Motto:'人生最大的快乐不在于占有什么，而在于追求什么的过程中。',
            Wordtext:true,
            inputtext:false,
            revisebt:true,
            shuruTextarea:'',
          }
      },
      methods:{
          textHide:function(){
            this.shuruTextarea = this.Motto;
            this.revisebt = false;
            this.inputtext =!this.inputtext;
            this.Wordtext=!this.Wordtext;

          },
          inputHide:function () {
            if(this.shuruTextarea == '' || this.shuruTextarea =="暂无座右铭(点击设置座右铭)"){
              this.Motto = "暂无座右铭(点击设置座右铭)";
              this.revisebt = false;
            }else{
              this.Motto = this.shuruTextarea;
              this.revisebt = true;
            }
            this.inputtext =!this.inputtext;
            this.Wordtext=!this.Wordtext;
          }
      }
    }
</script>

<style scoped>
  .home{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index: 2000; width:80%; height:90%; margin: auto;}
  .home h2{ font-size:42px; color: #0f7b8b; letter-spacing:0.1em; text-align: center; padding: 80px 0 0;}
  .studentImg{ float:left; position: relative; margin: 0 50px 0 0;  width: 400px; height:400px; background:url(./../../static/images/touxiangBg_03.png) no-repeat scroll center center; background-size: 100%;}
  .studentImg img{ position: absolute; width: 49%; height: 49%;  left:-15px; top: 0; right: 0; bottom: 0; margin: auto; transform:rotate(7deg); -ms-transform:rotate(7deg);  -moz-transform:rotate(7deg);}
  .studentMessage{ overflow: hidden;}
  .studentMessage ul{ padding: 80px 0 0;}
  .studentMessage ul li{ padding: 10px 0; font-size: 22px;}
  .studentMessage ul li em{ float: left; margin: 0 10px 0 0;}
  .studentMessage ul li .rightCon{ overflow: hidden; position: relative;}
  .studentMessage ul li .rightCon .reviseButton{ position: absolute; right: 8px; top:10px;}
  .studentMessage ul li .rightCon .specialWord{ background: #FFFFFF; color: #0f7b8b; padding:10px 55px 10px 20px; border-radius: 4px; overflow: hidden;}
  .studentMessage ul li .rightCon .specialWordInput{ background: #FFFFFF; padding: 10px 20px; border-radius: 4px; overflow: hidden;}
  .studentMessage ul li .rightCon .specialWordInput button{ margin: 10px 0 0;}
  @media screen and (min-width: 1920px) {
    .home h2{ font-size:56px; color: #0f7b8b; letter-spacing:0.1em; text-align: center; padding: 200px 0 0}
  }
</style>
