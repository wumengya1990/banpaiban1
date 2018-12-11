<template>
  <div class="classCard">
    <h1 class="titleTop">我的课表</h1>
    <h2>
      <span>{{classR}}{{studentName}}同学课表</span>
    </h2>
    <div class="classTable">
        <div class="classTableList">
          <h3><span>时间</span></h3>
          <div class="morningBox"><p>上午</p></div>
          <div class="afternoonBox"><p>下午</p></div>
        </div>

        <div class="classTableList">
          <h3><span>节次</span></h3>
          <div class="morningBox">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
          <div class="afternoonBox">
            <ul>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </div>
        </div>

      <div class="classTableList">
        <h3><span>星期一</span></h3>
        <div class="morningBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
        <div class="afternoonBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
      </div>

      <div class="classTableList">
        <h3><span>星期二</span></h3>
        <div class="morningBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
        <div class="afternoonBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
      </div>

      <div class="classTableList">
        <h3><span>星期三</span></h3>
        <div class="morningBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
        <div class="afternoonBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
      </div>

      <div class="classTableList">
        <h3><span>星期四</span></h3>
        <div class="morningBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
        <div class="afternoonBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
      </div>

      <div class="classTableList">
        <h3><span>星期五</span></h3>
        <div class="morningBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
        <div class="afternoonBox">
          <ul>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
            <li>语文01</li>
          </ul>
        </div>
      </div>

    <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import "../../static/css/main.css"
    export default {
        name: "classCard",
      data(){
          return{
            classR:"01班",
            studentName:"张洋"
          }
      }
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .classCard{ position: fixed; top: 0 ;left: 0; z-index: 2000; width: 100%; text-align: center;}
  .classCard h2{ position: relative; background: #38a7a3; color: #FFFFFF; font-weight: normal; display: inline-block; padding:10px 40px; margin:100px 0 60px;}
  .classCard h2:before{ position: absolute; content: ""; border:solid; border-width:26px 15px; border-color:#38a7a3  #38a7a3  transparent transparent; left: -30px; top: 0;}
  .classCard h2:after{ position: absolute; content: ""; border:solid; border-width:26px 15px; border-color: #38a7a3  transparent transparent #38a7a3; right: -30px; top: 0;}

  .classTable{ background: #FFFFFF; width: 1110px; margin: 0 auto}
  .classTableList{ float: left; width:150px; overflow: hidden; border-radius: 10px 10px 0 0; margin:-40px 10px 0 0}
  .classTableList:nth-child(7){ margin:-40px 0 0;}
  .classTableList h3{ height:40px;}
  .classTableList h3 span{  display: block; height: 30px; line-height: 30px; color:#FFFFFF;  border-radius: 10px; overflow: hidden}
  .classTableList:nth-child(1) h3{ background: #00aaaf;}
  .classTableList:nth-child(1) h3 span{ background: #00c5c9;}
  .classTableList:nth-child(2) h3{ background: #0075af;}
  .classTableList:nth-child(2) h3 span{ background: #0087c9;}
  .classTableList:nth-child(3) h3{ background: #009baf;}
  .classTableList:nth-child(3) h3 span{ background: #00b3c9;}
  .classTableList:nth-child(4) h3{ background: #eab400;}
  .classTableList:nth-child(4) h3 span{ background: #fcc800;}
  .classTableList:nth-child(5) h3{ background: #7eb427;}
  .classTableList:nth-child(5) h3 span{ background: #a1cb4a;}
  .classTableList:nth-child(6) h3{ background: #ec9298;}
  .classTableList:nth-child(6) h3 span{ background: #f5b6bb;}
  .classTableList:nth-child(7) h3{ background: #e17405;}
  .classTableList:nth-child(7) h3 span{ background: #ef7d01;}
  .classTableList ul li{ height:40px; line-height:40px; background: #f3efd7; color:#333333; font-size:15px;}

  .classTableList .morningBox ul li:nth-child(even){ background: #e8e0ba}
  .classTableList .afternoonBox ul li:nth-child(odd){ background: #e8e0ba}
  .classTableList .morningBox{ height: 200px; margin: 0 0 20px;}
  .classTableList .morningBox p{ line-height: 200px; background: #8fe6e3; color:#0f7b8b; font-size: 22px;}
  .classTableList .afternoonBox{ height:160px; }
  .classTableList .afternoonBox p{ line-height:160px; background: #8fe6e3; color:#0f7b8b;font-size: 22px;}

  @media screen and (min-width: 1024px) and ( max-width:1365px)  {
    .classCard h2{ position: relative; background: #38a7a3; color: #FFFFFF; font-weight: normal; display: inline-block; padding:10px 40px; margin:40px 0 60px;}
    .classTable{ background: #FFFFFF; width: 844px; margin: 0 auto;}
    .classTableList{ float: left; width:112px; overflow: hidden; border-radius: 10px 10px 0 0; margin:-40px 10px 0 0;}
    .classTableList ul li{ height:35px; line-height:35px; background: #f3efd7; color:#333333; font-size:15px;}
    .classTableList .morningBox{ height: 175px; margin: 0 0 20px;}
    .classTableList .morningBox p{ line-height: 175px; background: #8fe6e3; color:#0f7b8b; font-size: 22px;}
    .classTableList .afternoonBox p{ line-height:140px; background: #8fe6e3; color:#0f7b8b;font-size: 22px;}
    .classTableList .afternoonBox{ height:140px; }
  }



  @media screen and (min-width: 1920px) {
    .classTable{ background: #FFFFFF; width: 1460px; margin: 0 auto}
    .classTableList{ float: left; width:200px; overflow: hidden; border-radius: 10px 10px 0 0; margin:-40px 10px 0 0}
    .classTableList ul li{ height:60px; line-height:60px; background: #f3efd7; color:#333333; font-size:16px;}
    .classTableList .morningBox{ height: 300px; margin: 0 0 20px;}
    .classTableList .afternoonBox{ height:240px; }
    .classTableList .morningBox p{ line-height: 300px; background: #8fe6e3; color:#0f7b8b; font-size: 22px;}
    .classTableList .afternoonBox p{ line-height:240px; background: #8fe6e3; color:#0f7b8b;font-size: 22px;}
    .classCard h2{ font-size: 25px; position: relative; background: #38a7a3; color: #FFFFFF; font-weight: normal; display: inline-block; padding:10px 85px; margin:100px 0 85px;}
    .classCard h2:before{ position: absolute; content: ""; border:solid; border-width:29px 15px; border-color:#38a7a3  #38a7a3  transparent transparent; left: -30px; top: 0;}
    .classCard h2:after{ position: absolute; content: ""; border:solid; border-width:29px 15px; border-color: #38a7a3  transparent transparent #38a7a3; right: -30px; top: 0;}

  }


</style>
