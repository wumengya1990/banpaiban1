<template>
  <div class="honor">
    <h1 class="titleTop">我的荣誉</h1>
    <div class="honorTop">
      <ul>
        <li><em>学期</em>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
      </ul>
      <div class="honorScr">
        <ul>
          <li><em>全部：</em>5</li>
          <li><em>校级：</em>5</li>
          <li><em>区级：</em>5</li>
          <li><em>市级：</em>5</li>
          <li><em>省级：</em>5</li>
          <li><em>国家级：</em>5</li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>

    <div class="honorShow">
      <div class="honorList">
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <dl><dt><img src="./../../static/images/honorImg.jpg"></dt><dd>省一等奖</dd></dl>
        <div class="clear"></div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "honor",
      data(){
          return{
            value:'',
            options:[{
                value:'选项1',
                label:'2017-2018第一学期'
              }, {
                value:'选项2',
                label:'2017-2018第二学期'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .honor{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index: 2000; width:80%; height:90%; margin: auto;}
  .honorTop{ background: #c7000a; color: #FFFFFF; padding:5px 30px; border-radius: 4px; overflow: hidden; margin:40px  0 10px;}
  .honorTop ul li{ float: left; margin: 0 10px 0 0;}
  .honorTop ul li em{ padding: 0 5px 0 0;}
  .honorScr{ float: right; padding:5px 0 0;}
  .honorShow{ background:url(./../../static/images/honorBG_07.png) no-repeat scroll center 0; background-size:100%; padding: 150px 0 80px;}
  .honorList{ margin:0 50px; height: 370px; overflow: hidden; overflow-y: auto;}
  .honorList dl{ float:left; width: 180px; margin:0 0 10px 23px;}
  .honorList dl dt{ width: 100%}
  .honorList dl dt img{ width: 100%;}
  .honorList dl dd{ width:100%; height: 48px; line-height: 40px; font-size: 16px; text-align: center; background:url(./../../static/images/caidai_03.png) no-repeat scroll center 0; background-size: 100%;}

  @media screen and (min-width: 1024px) and ( max-width:1365px) {
    .honorShow{ background:url(./../../static/images/honorBG_07.png) no-repeat scroll center 0; background-size:100%; padding: 110px 0 80px;}
    .honorList dl{ float:left; width:126px; margin:0 0 10px 17px;}
    .honorList{ margin:0 50px; height:265px; overflow: hidden; overflow-y: auto;}
    .honorList dl dd{ width:100%; height: 35px; line-height: 23px; font-size: 14px; text-align: center; background:url(./../../static/images/caidai_03.png) no-repeat scroll center 0; background-size: 100%;}
  }

  @media screen and (min-width: 1366px) and (max-width: 1919px){
    .honorShow{ background:url(./../../static/images/honorBG_07.png) no-repeat scroll center 0; background-size:100%; padding: 140px 0 80px;}
    .honorList{ margin:0 50px; height: 360px; overflow: hidden; overflow-y: auto;}
    .honorList dl{ float:left; width: 180px; margin:0 0 5px 55px;}
  }
  /*荣誉1920*/
  @media screen and (min-width: 1920px) {
    .honorShow{ background:url(./../../static/images/honorBG_07.png) no-repeat scroll center 0; background-size:100%; padding:230px 0 80px;}
    .honorList{ margin:0 50px; height:450px; overflow: hidden; overflow-y: auto;}
    .honorList dl{ float:left; width: 220px; margin: 0 0 50px 55px;}
    .honorList dl dt{ width: 220px; height: 160px;}
    .honorList dl dt img{ width: 100%; height: 100%;}
    .honorTop ul li{ float: left; margin: 0 10px 0 0; font-size:22px;}
    .honorTop>ul li em{ float: left; margin:4px 10px 0 0;}
    .honorTop{ background: #c7000a; color: #FFFFFF; padding:15px 30px; border-radius: 4px; overflow: hidden; margin:40px  0 10px;}
  }

</style>
