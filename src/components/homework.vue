<template>
    <div class="homework">
      <h1 class="titleTop">我的作业</h1>
      <!--家庭作业列表-->
      <div class="homeworkList">
        <h3>全部（2）</h3>
        <el-table
          :data="tableData"
          height="90%"
          @row-click ="openDetails"
          style="width: 100%;">
          <el-table-column
            prop="sentPeo"
            label="发布人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间"
            width="180">
          </el-table-column>
        </el-table>
      </div>

      <!--家庭作业详情-->
      <div id="tc" class="homeworkDetails">
        <h3>作业详情</h3>
        <div class="homeworkMessage">
          <ul>
            <li>1、练习册上的201-205练习题全做，重新抄题</li>
            <li>2、练习册上的201-205练习题全做，重新抄题</li>
            <li>3、练习册上的201-205练习题全做，重新抄题</li>
            <li>4、练习册上的201-205练习题全做，重新抄题</li>
            <li>5、练习册上的201-205练习题全做，重新抄题</li>
            <li>6、练习册上的201-205练习题全做，重新抄题</li>
            <li>7、练习册上的201-205练习题全做，重新抄题</li>
            <li>8、练习册上的201-205练习题全做，重新抄题</li>
            <li>1、练习册上的201-205练习题全做，重新抄题</li>
            <li>2、练习册上的201-205练习题全做，重新抄题</li>
            <li>3、练习册上的201-205练习题全做，重新抄题</li>
            <li>4、练习册上的201-205练习题全做，重新抄题</li>
            <li>5、练习册上的201-205练习题全做，重新抄题</li>
            <li>6、练习册上的201-205练习题全做，重新抄题</li>
            <li>7、练习册上的201-205练习题全做，重新抄题</li>
            <li>8、练习册上的201-205练习题全做，重新抄题</li>
            <li>1、练习册上的201-205练习题全做，重新抄题</li>
            <li>2、练习册上的201-205练习题全做，重新抄题</li>
            <li>3、练习册上的201-205练习题全做，重新抄题</li>
            <li>4、练习册上的201-205练习题全做，重新抄题</li>
            <li>5、练习册上的201-205练习题全做，重新抄题</li>
            <li>6、练习册上的201-205练习题全做，重新抄题</li>
            <li>7、练习册上的201-205练习题全做，重新抄题</li>
            <li>8、练习册上的201-205练习题全做，重新抄题</li>
            <li>1、练习册上的201-205练习题全做，重新抄题</li>
            <li>2、练习册上的201-205练习题全做，重新抄题</li>
            <li>3、练习册上的201-205练习题全做，重新抄题</li>
            <li>4、练习册上的201-205练习题全做，重新抄题</li>
            <li>5、练习册上的201-205练习题全做，重新抄题</li>
            <li>6、练习册上的201-205练习题全做，重新抄题</li>
            <li>7、练习册上的201-205练习题全做，重新抄题</li>
            <li>8、练习册上的201-205练习题全做，重新抄题</li>

          </ul>
        </div>
        <div class="homeworkAttachment">
          <h4>附件</h4>
          <dl><dt></dt><dd></dd></dl>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "homework",
      data(){
          return{
            dialogFormVisible:false,
            tableData:[{
              sentPeo:'张洋',
              title:'周三语文作业',
              time:'2018-05-30 17:30'
            },{
              sentPeo:'王帅',
              title:'周三数学作业',
              time:'2018-05-30 17:30'
            },{
              sentPeo:'王宁',
              title:'周三英语作业',
              time:'2018-05-30 17:30'
            },{
              sentPeo:'李雪',
              title:'周三思想品德作业',
              time:'2018-05-30 17:30'
            },{
              sentPeo:'李雪',
              title:'周三思想品德作业',
              time:'2018-05-30 17:30'
            }]
          }
      },
    mounted(){
          let tc = document.getElementById("tc");
          tc.style.display = "none";
          this.closePage()
    },
      methods:{
        openDetails(){
          let tc = document.getElementById("tc");
          let mw = document.getElementsByClassName("homework");
          let zznr = document.createElement("div");
          zznr.setAttribute("class","zhezhao");
          zznr.style.cssText="position: fixed; left: 0; top:0; right: 0; bottom: 0; margin: auto; background:rgba(0,0,0,0.6); z-index: 2099;";
          mw[0].appendChild(zznr);
          tc.style.display = "block";
          event.stopPropagation();
          event.cancelBubble = true;
        },
        closePage(){
          let tc = document.getElementById("tc");
          let mw = document.getElementsByClassName("homework");
          let zznr = document.getElementsByClassName("zhezhao");
          document.onclick = function() {
            tc.style.display = "none";
            mw[0].removeChild(zznr[0]);
          }
          tc.onclick = function(event){
            //兼容IE低版本
            event.stopPropagation();
            event.cancelBubble = true;
          }
        }
      }
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .el-table th, .el-table tr{ background: #fffae4!important;}
  .homework{ position: fixed; text-align: left; top:50px ;left: 0; right: 0; bottom: 0; z-index: 2000; width:80%; height:90%; margin: auto;}
  .homeworkList{ position: absolute; left: 0; top: 0; right: 0; bottom: 0;}
  .homeworkList h3{  background: #81d2e3; color: #FFFFFF; font-weight: normal; font-size: 15px; padding: 10px; border-radius: 4px; overflow: hidden; margin: 0 0 10px;}
  .homeworkDetails{ margin: 10px 0 0; height:48%; background: url("./../../static/images/homeworkdetailsBg_03.png") no-repeat scroll center 0; background-size:100%;}
  .homeworkDetails h3{ padding:40px 50px 5px; font-weight: normal; color: #333333;}
  .homeworkMessage ul{ margin: 0 80px 0 60px; max-height:120px; overflow: hidden; overflow-y: auto;}
  .homeworkMessage ul li{ color: #666666; padding: 5px 0 0;}
  .homeworkAttachment{ padding: 10px 60px 0;}
  /*.zhezhao{ position: fixed; left: 0; top:0; right: 0; bottom: 0; margin: auto; background:rgba(0,0,0,0.6); z-index: 2099;}*/

  @media screen and (min-width: 1024px) and ( max-width:1365px)  {
    .homeworkDetails{ margin: 10px 0 0; height:48%; background: url("./../../static/images/homeworkdetailsBg_03.png") no-repeat scroll center 0; background-size:100%;}
    .homeworkMessage ul{ margin: 0 80px 0 60px; max-height:90px; overflow: hidden; overflow-y: auto;}
    .homeworkDetails{ position:absolute; z-index:2100; margin:130px 0 0; width:100%; height:51%; background: url("./../../static/images/homeworkdetailsBg_03.png") no-repeat scroll center 0; background-size:100%;}
  }

  @media screen and (min-width: 1366px) and ( max-width:1919px)  {
    .homework{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index: 2000; width:80%; height:80%; margin: auto;}
   .homeworkDetails{ position:absolute; z-index:2100; margin:100px 0 0; width:100%; height:56%; background: url("./../../static/images/homeworkdetailsBg_03.png") no-repeat scroll center 0; background-size:100%;}

  }

  @media screen and (min-width: 1920px) {
    .homework{ position: fixed; text-align: left; top:50px ;left: 0; right: 0; bottom: 0; z-index: 2000; width:80%; height:80%; margin: auto;}
    .homeworkDetails h3{ padding:60px 70px 0; font-weight: normal; color: #333333;}
    .homeworkMessage ul{ margin: 0 120px 0 90px; max-height:215px; overflow: hidden; overflow-y: auto;}
    .homeworkAttachment{ padding: 10px 85px 0;}
    .homeworkDetails{ position:absolute; z-index:2100; margin:210px 0 0; width:100%; height:51%; background: url("./../../static/images/homeworkdetailsBg_03.png") no-repeat scroll center 0; background-size:100%;}

  }
</style>
