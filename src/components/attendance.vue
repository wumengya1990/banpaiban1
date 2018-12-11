<template>
    <div class="attendance">
      <h1 class="titleTop">我的考勤</h1>
      <div class="eventCho">
        <ul>
          <!--<li><el-button @click="trajectoryShow = true,leaveShow = false" type="primary">考情轨迹</el-button></li>-->
          <!--<li><el-button @click="trajectoryShow = false,leaveShow = true" type="primary">我的请假</el-button></li>-->
          <li><el-button @click="changtype()" :type="btType">考情轨迹</el-button><el-button @click="changtype1()" :type="btType1">我的请假</el-button></li>
          <li><em>选择日期：</em>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </li>
          <li><el-button type="primary">查询</el-button></li>
        </ul>
      </div>

      <div class="trajectoryBox" v-show="trajectoryShow">

        <div class="timeBoxList">
            <div class="timeBox">
              <div class="timeImg type1"></div>
              <h3>进入学校</h3>
              <em class="line"></em>
              <span class="timepoint">8:40</span>
            </div>
            <div class="timeBox">
              <div class="timeImg type2"></div>
              <h3>进入学校</h3>
              <em class="line"></em>
              <span class="timepoint">9:00</span>
            </div>
          <div class="timeBox">
            <div class="timeImg type3"></div>
            <h3>进入学校</h3>
            <em class="line"></em>
            <span class="timepoint">11:00</span>
          </div>
          <div class="timeBox">
            <div class="timeImg type4"></div>
            <h3>进入学校</h3>
            <em class="line"></em>
            <span class="timepoint">12:00</span>
          </div>
          <div class="timeBox">
            <div class="timeImg type5"></div>
            <h3>进入学校</h3>
            <em class="line"></em>
            <span class="timepoint">14:00</span>
          </div>
          <div class="timeBox">
            <div class="timeImg type6"></div>
            <h3>进入学校</h3>
            <em class="line"></em>
            <span class="timepoint">15:00</span>
          </div>
          <div class="timeBox">
            <div class="timeImg type7"></div>
            <h3>进入学校</h3>
            <em class="line"></em>
            <span class="timepoint">16:00</span>
          </div>
          <div class="timeBox">
            <div class="timeImg type8"></div>
            <h3>进入学校</h3>
            <em class="line"></em>
            <span class="timepoint">17:00</span>
          </div>
          <div class="timeBox">
            <div class="timeImg type9"></div>
            <h3>进入学校</h3>
            <em class="line"></em>
            <span class="timepoint">18:00</span>
          </div>

          <div class="timeLine"></div>
          <div class="clear"></div>
        </div>

      </div>

      <div class="leaveBox" v-show="leaveShow">
        <el-table
          :data="tableData4"
          style="width: 100%"
          height="100%">
          <el-table-column
            label="请假摘要">
            <template slot-scope="scope">
              <ul>
                <li>请假人：{{scope.row.name}}</li>
                <li>请假类型：{{scope.row.vacation}}</li>
                <li>开始时间：{{scope.row.startTime}}</li>
                <li>结束时间：{{scope.row.endTime}}</li>
              </ul>
            </template>
          </el-table-column>
          <el-table-column
            prop="beiginTime"
            label="发起时间">
          </el-table-column>
          <el-table-column
            prop="queryState"
            label="查询状态">
          </el-table-column>
        </el-table>
      </div>

    </div>
</template>

<script>
    export default {
        name: "attendance",
      data(){
          return{
            value1:'',
            btType:'primary',
            btType1:'primary',
            trajectoryShow:true,
            leaveShow:false,
            tableData4: [{
              name: '王小虎',
              vacation: '事假',
              startTime: '2018-05-30 10:00:00',
              endTime: '2018-05-31 20:00:00',
              beiginTime:'2018-05-30',
              queryState:'已查询'
            },{
              name: '王小虎',
              vacation: '事假',
              startTime: '2018-05-30 10:00:00',
              endTime: '2018-05-31 20:00:00',
              beiginTime:'2018-05-30',
              queryState:'已查询'
            },{
              name: '王小虎',
              vacation: '事假',
              startTime: '2018-05-30 10:00:00',
              endTime: '2018-05-31 20:00:00',
              beiginTime:'2018-05-30',
              queryState:'已查询'
            },{
              name: '王小虎',
              vacation: '事假',
              startTime: '2018-05-30 10:00:00',
              endTime: '2018-05-31 20:00:00',
              beiginTime:'2018-05-30',
              queryState:'已查询'
            },{
              name: '王小虎',
              vacation: '事假',
              startTime: '2018-05-30 10:00:00',
              endTime: '2018-05-31 20:00:00',
              beiginTime:'2018-05-30',
              queryState:'已查询'
            },{
              name: '王小虎',
              vacation: '事假',
              startTime: '2018-05-30 10:00:00',
              endTime: '2018-05-31 20:00:00',
              beiginTime:'2018-05-30',
              queryState:'已查询'
            },{
              name: '王小虎',
              vacation: '事假',
              startTime: '2018-05-30 10:00:00',
              endTime: '2018-05-31 20:00:00',
              beiginTime:'2018-05-30',
              queryState:'已查询'
            }]
        }
      },
      methods:{
        changtype:function () {
          this.btType = "success";
          this.btType1 = "primary";
          this.trajectoryShow = true;
          this.leaveShow = false;
        },
        changtype1:function () {
          this.btType = "primary";
          this.btType1 = "success";
          this.trajectoryShow = false;
          this.leaveShow = true;
        }
      }
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .attendance{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index:2000; width:80%; height:90%; margin: auto;}
  .eventCho{ border-bottom: 2px solid #FFFFFF; text-align: center; padding:30px 0 10px;}
  .eventCho ul li{ display: inline-block; margin: 0 5px;}
  .timeBoxList{ position: relative; height:580px; margin: 20px 0 0;}
  .timeBoxList .timeLine{ position: absolute; height:6px; left:0; top: 0; right: 0; bottom: 0; margin: auto; border-radius: 50px; background: #b0b0b0;}
  .timeBoxList .timeBox{ float: left; width:128px;  height: 50%; text-align: center; position: relative}
  .timeBoxList .timeBox h3{ position: absolute; top:155px; bottom: auto;  text-align: center;  width: 100%}
  .timeBoxList .timeBox .timepoint{ position: absolute; display: block; left: 0; bottom: -40px; top: auto;  width: 100%; font-size: 22px;}
  .timeBoxList .timeBox .line{ width: 2px; height: 80px; position: absolute; left:0; top:auto; right: 0; bottom: 0; margin: auto; background: #808080; z-index: 50;}
  .timeBoxList .timeBox .line:before{ position: absolute; content: ""; width: 12px; height: 12px; border-radius: 50px; background: #808080; top: -10px; left: -5px;}
  .timeBoxList .timeBox .line:after{ position: absolute; content: ""; width: 16px; height: 16px; border-radius: 50px; background: #808080; bottom:-7px; left: -7px;}
  .timeBoxList .timeBox .timeImg{ position: absolute; top: 0; left: 0; right: 0; bottom: auto;  width: 128px; height: 143px; margin: auto; background: url(./../../static/images/activityType_03.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox:nth-child(even){ margin: 270px 0 0;}
  .timeBoxList .timeBox:nth-child(even) .timeImg{ bottom: 0; left: 0; right:0; top: auto;}
  .timeBoxList .timeBox:nth-child(even) h3{ position: absolute; bottom:155px; top: auto;  text-align: center;  width: 100%;}
  .timeBoxList .timeBox:nth-child(even) .timepoint{ position: absolute; display: block; left: 0; bottom:auto; top:-40px;  width: 100%;}
  .timeBoxList .timeBox:nth-child(even) .line{ transform:rotate(180deg); width: 2px; height: 80px; position: absolute; left:0; top:0; right: 0; bottom:auto; margin: auto; background: #808080; z-index: 50;}
  .timeBoxList .timeBox .type1{background: url(./../../static/images/activityType_03.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type2{background: url(./../../static/images/activityType_05.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type3{background: url(./../../static/images/activityType_07.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type4{background: url(./../../static/images/activityType_09.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type5{background: url(./../../static/images/activityType_11.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type6{background: url(./../../static/images/activityType_19.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type7{background: url(./../../static/images/activityType_22.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type8{background: url(./../../static/images/activityType_25.png) no-repeat scroll center center; background-size: 100% 100%;}
  .timeBoxList .timeBox .type9{background: url(./../../static/images/activityType_28.png) no-repeat scroll center center; background-size: 100% 100%;}
  .leaveBox{ height:80%;}

  @media screen and (min-width: 1024px) and ( max-width:1365px) {
    .timeBoxList .timeBox .timepoint{ position: absolute; display: block; left: 0; bottom: -40px; top: auto;  width: 100%; font-size:18px;}
    .timeBoxList .timeBox{ float: left; width:90px;  height: 50%; text-align: center; position: relative}
    .timeBoxList{ position: relative; height:410px; margin: 20px 0 0;}
    .timeBoxList .timeBox .timeImg{ position: absolute; top: 0; left: 0; right: 0; bottom: auto;  width:90px; height:100px; margin: auto; background-size: 100% 100%;}
    .timeBoxList .timeBox .line{ width: 2px; height:60px; position: absolute; left:0; top:auto; right: 0; bottom: 0; margin: auto; background: #808080; z-index: 50;}
    .timeBoxList .timeBox:nth-child(even) .line{ transform:rotate(180deg); width: 2px; height: 60px; position: absolute; left:0; top:0; right: 0; bottom:auto; margin: auto; background: #808080; z-index: 50;}
    .timeBoxList .timeBox h3{ position: absolute; top:105px; bottom: auto;  text-align: center;  width: 100%}
    .timeBoxList .timeBox:nth-child(even){ margin: 205px 0 0;}
    .timeBoxList .timeBox:nth-child(even) h3{ position: absolute; bottom:105px; top: auto;  text-align: center;  width: 100%;}
  }

  @media screen and (min-width: 1366px) and (max-width: 1919px){
    .timeBoxList{ position: relative; height:540px; margin: 20px 0 0;}
    .timeBoxList .timeBox{ float: left; width:121px;  height: 50%; text-align: center; position: relative}
    .leaveBox{ height:80%;}
  }

  @media screen and (min-width: 1920px) {
    .timeBoxList .timeBox:nth-child(even){ margin: 290px 0 0;}
    .eventCho{ border-bottom: 2px solid #FFFFFF; text-align: center; padding:100px 0 10px; margin: 0 0 10px;}
    .timeBoxList{ position: relative; height:580px; margin:60px 0 0;}
    .timeBoxList .timeBox{ float: left; width:170px;  height: 50%; text-align: center; position: relative;}
  }

</style>
