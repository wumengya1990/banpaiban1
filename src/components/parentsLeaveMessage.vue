<template>
  <div class="parentsLeaveMessage">
    
    <h1 class="titleTop">家长留言</h1>
    <h2><span>共有5条留言</span><router-link :to="{path:'/parentsLeaveMessage/sentPage'}">发送信息</router-link></h2>
    <div class="leaveMessageBoxNew">
      <ul>
        <li>

          <div class="userMes">
            <div class="userMes_1">
            <img src="./../../static/images/studentHD_03.png">
            </div>
            <h4>张洋</h4>
            </div>
          <div class="leaveMessage">
            <div class="leaveMessageTop"></div>
            <div class="leaveMessageContent">
              <el-button type="primary" style="float:right; font-size:1.1em; margin:0 0 0 20px; width:100px;">回复</el-button>
              <div class="leaveMessageContent_1">
                <p>内容内容内容内容内容内容内容内容内容内容</p>
                <div class="replyBox"></div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </li>
      </ul>
    </div>

    <div class="girlImg"></div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "parentsLeaveMessage",
      data(){
          return{

          }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .parentsLeaveMessage{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index: 2000; width:80%; height:90%; margin: auto;}
  .parentsLeaveMessage h2{ background: url(./../../static/images/parentTopBg_03.png) no-repeat scroll center 0; margin: 50px 0 0; height: 163px; text-align: center; position: relative;}
  .parentsLeaveMessage h2 span{ display:inline-block; background: #ec4242; color: #FFFFFF; margin: 60px 0 0 20px; font-size: 26px; height:60px; line-height:60px; border-radius: 5px; padding: 0 30px;}
  .leaveMessageBox{ margin: 20px 0 0; background:url(./../../static/images/liuyanBG_07.png) no-repeat scroll center 0; background-size: 100%; padding: 50px 40px;}
  .leaveMessageBox ul{ height: 320px; overflow: hidden; overflow-y: auto; padding: 0 20px;}
  .leaveMessageBox ul li{ border-bottom: 1px solid #dedede; padding:10px 0;}
  .leaveMessageBox ul li span{ float: right; margin: 0 0 0 50px; text-align: left; width:200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis}
  .leaveMessageBox ul li .messageContent{ overflow: hidden;}
  .girlImg{ position: absolute; background: url(./../../static/images/parentImg_03.png) no-repeat scroll center 0; background-size: 100%; width:200px; height: 400px; left: -100px; bottom: -75px;}

  .leaveMessageBoxNew{ margin: 20px 0 0; background:url(./../../static/images/liuyanBG_07.png) no-repeat scroll center 0; background-size: 100%; padding: 50px 40px;}
  .leaveMessageBoxNew ul{ height: 320px; overflow: hidden; overflow-y: auto; padding: 0 20px;}
  .leaveMessageBoxNew ul li{ border-bottom: 1px solid #dedede; padding:10px 0;}
  .leaveMessageBoxNew ul li span{ float: right; margin: 0 0 0 50px; text-align: left; width:200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis}
  .leaveMessageBoxNew ul li .messageContent{ overflow: hidden;}

  @media screen and (min-width:1024px) and ( max-width:1365px) {
    .parentsLeaveMessage h2{ background: url(./../../static/images/parentTopBg_03.png) no-repeat scroll center 0; height: 136px; text-align: center; background-size: 80%;}
    .parentsLeaveMessage h2 span{ display:inline-block; background: #ec4242; color: #FFFFFF; margin:35px 0 0 20px; font-size: 26px; height:60px; line-height:60px; border-radius: 5px; padding: 0 30px;}
    .leaveMessageBox{ margin: 20px 0 0; background:url(./../../static/images/liuyanBG_07.png) no-repeat scroll center 0; background-size: 100%; padding: 25px 40px;}
    .leaveMessageBox ul{ height:255px; overflow: hidden; overflow-y: auto; padding: 0 20px;}
  }

  /*家长留言1920*/
  @media screen and (min-width: 1920px) {
    .parentsLeaveMessage h2 span{ display:inline-block; background: #ec4242; color: #FFFFFF; margin: 60px 0 0 20px; font-size:30px; height:80px; line-height:80px; border-radius: 5px; padding: 0 50px;}
    /*.leaveMessageBox ul{ height:460px; overflow: hidden; overflow-y: auto; padding: 0 20px;}*/
    /*.leaveMessageBox ul li{ border-bottom: 1px solid #dedede; padding:10px 0; font-size:20px;}*/
    .parentsLeaveMessage h2 a{ display: block; position: absolute; left: auto;  top:auto; right: 0; bottom: 0; margin: auto; padding: 0 40px; background: #f56e2c; height:70px; line-height: 70px; color: #ffffff; border-radius: 50px; font-size: 1.2em; font-weight: normal;}
    .leaveMessageBoxNew{ background-size:100% 100%;}
    .leaveMessageBoxNew ul{ height:550px; overflow: hidden; overflow-y: auto; padding: 0 20px;}
    .leaveMessageBoxNew ul li{ border-bottom: 1px solid rgba(102, 174, 162, 0.5); padding:20px 0; font-size:20px;}
    .leaveMessageBoxNew ul li .userMes{ float: left; margin: 0 20px 0 0;}
    .leaveMessageBoxNew ul li .userMes .userMes_1{ width: 100px; height: 100px; overflow: hidden; border-radius: 50%;}
    .leaveMessageBoxNew ul li .userMes .userMes_1 img{ width: 100%; height: 100%;}
    .leaveMessageBoxNew ul li .userMes h4{ text-align: center; font-size: 1.2em; padding: 5px 0;}
    .leaveMessageBoxNew ul li .leaveMessageContent_1{ overflow: hidden; background: #f7f4e3; margin: 0 10px; min-height: 105px; border:1px dashed #907c0d; border-radius: 10px; padding:15px; font-size:1.1em;}
    .girlImg{ position: absolute; background: url(./../../static/images/parentImg_03.png) no-repeat scroll center 0; background-size: 100%; width:280px; height: 400px; left: -150px; bottom:6px;}
  }

</style>
