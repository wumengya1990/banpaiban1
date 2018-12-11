<template>
 <div class="space">
   <h1 class="titleTop">我的空间</h1>
   <div class="spaceScroll">

   <div class="spaceList">

      <div class="spaceBox">
        <div class="userLeft">
        <div class="userImg"><img  src="./../../static/images/uerImg_07.png"></div>
        <h4>张洋（三年级四班）</h4>
        <p>2018年03月30日 14:33 绘画</p>
         </div>
       <div class="activityContent">
         <h3>学生体育活动</h3>
        <div class="activityMessageBox">
            <div class="activityMessageMain">
              <div class="activityText"></div>
              <ul class="imgList">
                <li><img src="./../../static/images/hdIMG.jpg"></li>
                <li><img src="./../../static/images/hdIMG.jpg"></li>
                <li><img src="./../../static/images/hdIMG.jpg"></li>
              </ul>
            </div>
            <div class="toolBar">
              <span><i class="icon ccFont CC-duihuaxinxi"></i>0</span>
              <span><i class="icon ccFont CC-zan"></i>0</span>
            </div>
        </div>
       </div>
        <div class="clear"></div>
      </div>

     <div class="spaceBox">
       <div class="userLeft">
         <div class="userImg"><img  src="./../../static/images/uerImg_07.png"></div>
         <h4>张洋（三年级四班）</h4>
         <p>2018年03月30日 14:33 绘画</p>
       </div>
       <div class="activityContent">
         <h3>学生体育活动</h3>
         <div class="activityMessageBox">
           <div class="activityMessageMain">
             <div class="activityText"></div>
             <ul class="imgList">
               <li><img src="./../../static/images/hdIMG.jpg"></li>
               <li><img src="./../../static/images/hdIMG.jpg"></li>
               <li><img src="./../../static/images/hdIMG.jpg"></li>
             </ul>
           </div>
           <div class="toolBar">
             <span><i class="icon ccFont CC-duihuaxinxi"></i>0</span>
             <span><i class="icon ccFont CC-zan"></i>0</span>
           </div>
         </div>
       </div>
       <div class="clear"></div>
     </div>

     <div class="spaceBox">
       <div class="userLeft">
         <div class="userImg"><img  src="./../../static/images/uerImg_07.png"></div>
         <h4>张洋（三年级四班）</h4>
         <p>2018年03月30日 14:33 绘画</p>
       </div>
       <div class="activityContent">
         <h3>学生体育活动</h3>
         <div class="activityMessageBox">
           <div class="activityMessageMain">
             <div class="activityText"></div>
             <ul class="imgList">
               <li><img src="./../../static/images/hdIMG.jpg"></li>
               <li><img src="./../../static/images/hdIMG.jpg"></li>
               <li><img src="./../../static/images/hdIMG.jpg"></li>
             </ul>
           </div>
           <div class="toolBar">
             <span><i class="icon ccFont CC-duihuaxinxi"></i>0</span>
             <span><i class="icon ccFont CC-zan"></i>0</span>
           </div>
         </div>
       </div>
       <div class="clear"></div>
     </div>


   </div>

   </div>
 </div>
</template>

<script>
  import "../../static/css/fonts/iconfont.css"
    export default {
        name: "space"
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .space{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index:2000; width:68%; height:80%; margin: auto;}
  .spaceScroll{ position:absolute; left: 0; top:0; right: 0; bottom: 0; margin: auto; overflow: hidden; overflow-y: auto; padding: 0 20px 0 0;}
  .spaceBox{ background: url(./../../static/images/spaceBoxBg1_03.png) no-repeat scroll center 0; background-size:100%; height: 305px;}
  .spaceBox .userLeft{ float: left; text-align: center; width: 300px; margin:65px 0 0;}
  .spaceBox .userLeft .userImg{ width: 100px; height: 100px; margin: 0 auto;}
  .spaceBox .userLeft .userImg img{ width: 100%; height: 100%;}
  .spaceBox .userLeft h4{ font-size: 16px; padding: 10px 0;}
  .spaceBox .userLeft p{ color: #666666;}
  .spaceBox .activityContent{ overflow: hidden;}
  .activityContent h3{ margin: 25px 0 0;}
  .activityMessageMain{ height: 185px; margin: 0 115px 0 0; overflow: hidden; overflow-y: auto;}
  .imgList{ margin: 20px 0 0;}
  .imgList li{ float: left; width:160px; margin: 0 10px 0 0;}
  .imgList li img{ width: 100%;}
  .toolBar span{ margin: 0 10px 0 0;}
  .toolBar span i{ vertical-align: middle; margin: 0 5px 0 0; font-size:18px;}

  @media screen and (min-width:1024px) and ( max-width: 1365px)  {
    .spaceBox .userLeft{ float: left; text-align: center; width: 230px; margin:35px 0 0;}
    .spaceBox .userLeft .userImg{ width: 80px; height: 80px; margin: 0 auto;}
    .spaceBox .userLeft h4{ font-size: 15px; padding: 5px 0;}
    .imgList li{ float: left; width:80px; margin: 0 10px 0 0;}
    .activityMessageMain{ height: 100px; margin: 0 115px 0 0; overflow: hidden; overflow-y: auto;}
    .spaceBox{ background: url(./../../static/images/spaceBoxBg1_03.png) no-repeat scroll center 0; background-size:100%; height: 235px;}
    .space{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index:2000; width:68%; height:75%; margin: auto;}
  }

  @media screen and (min-width:1366px)and( max-width:1919px)  {
    .space{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index:2000; width:68%; height:76%; margin: auto;}
    .spaceBox .userLeft{ float: left; text-align: center; width: 300px; margin:55px 0 0;}
    .activityMessageMain{ height: 170px; margin: 0 115px 0 0; overflow: hidden; overflow-y: auto;}
    .imgList li{ float: left; width:140px; margin: 0 10px 0 0;}
  }

  @media screen and (min-width: 1920px) {
  .spaceBox{ background: url(./../../static/images/spaceBoxBg1_03.png) no-repeat scroll center 0; background-size:100%; height: 435px; width: 95%;}
  }
</style>
