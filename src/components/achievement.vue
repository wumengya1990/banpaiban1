<template>
    <div class="achievement">
      <h1 class="titleTop">我的成绩</h1>
       <div class="conditionScr">
        <ul>
          <li><em>学期</em>
            <el-select v-model="value" size="small" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </li>
          <li><em>日期</em>
            <el-date-picker
              size="small"
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </li>
          <li><el-button type="primary" size="small" round>搜索</el-button></li>
        </ul>

       </div>

      <div class="achievementMain">

        <div class="achievementBox blueBox">
        <dl>
          <dt>
            <h3>课堂表现评价</h3>
            <p>得分：98</p>
            <div class="bts"><a @click="dialogTableVisible = true">详情</a></div>
          </dt>
          <dd>
            <p><em>评价者：</em>张琳</p>
            <p><em>评价日期：</em>2018-05-30</p>
          </dd>
        </dl>
          <dl>
            <dt>
              <h3>课堂表现评价</h3>
              <p>得分：98</p>
              <div class="bts"><a @click="dialogTableVisible = true">详情</a></div>
            </dt>
            <dd>
              <p><em>评价者：</em>张琳</p>
              <p><em>评价日期：</em>2018-05-30</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <h3>课堂表现评价</h3>
              <p>得分：98</p>
              <div class="bts"><a @click="dialogTableVisible = true">详情</a></div>
            </dt>
            <dd>
              <p><em>评价者：</em>张琳</p>
              <p><em>评价日期：</em>2018-05-30</p>
            </dd>
          </dl>
          <div class="clear"></div>
        </div>

        <div class="achievementBox redBox">
          <dl>
            <dt>
              <h3>课堂表现评价</h3>
              <p>得分：98</p>
              <div class="bts"><a @click="dialogTableVisible = true">详情</a></div>
            </dt>
            <dd>
              <p><em>评价者：</em>张琳</p>
              <p><em>评价日期：</em>2018-05-30</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <h3>课堂表现评价</h3>
              <p>得分：98</p>
              <div class="bts"><a @click="dialogTableVisible = true">详情</a></div>
            </dt>
            <dd>
              <p><em>评价者：</em>张琳</p>
              <p><em>评价日期：</em>2018-05-30</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <h3>课堂表现评价</h3>
              <p>得分：98</p>
              <div class="bts"><a @click="dialogTableVisible = true">详情</a></div>
            </dt>
            <dd>
              <p><em>评价者：</em>张琳</p>
              <p><em>评价日期：</em>2018-05-30</p>
            </dd>
          </dl>
          <div class="clear"></div>
        </div>


        <!--回来将遮罩层放开-->
        <el-dialog title="详情"  width="600px" :modal-append-to-body="false" :visible.sync="dialogTableVisible">
          <el-table :data="gridData" align="left" >
            <el-table-column property="quota" label="评价指标" width="450"></el-table-column>
            <el-table-column property="fraction" label="分数"></el-table-column>
          </el-table>
        </el-dialog>

      </div>



    </div>
</template>

<script>
    export default {
        name: "achievement",
      data() {
        return {
          gridData: [{
            quota: '课堂表现：善于与人合作，虚心听取别人的意见',
            fraction: 8
          },{
            quota: '课堂表现：上课迟到或没有准备学习用品，一人扣一分',
            fraction: 4
          },{
            quota: '课堂表现：注意力不够集中、纪律差的人每次扣小组1份，严重违纪的扣除2份。干扰教师正常上课，并与授课教师顶撞扣5份。',
            fraction: 8
          },{
            quota: '课堂表现：是否热爱学习，自习时间是否大部分时间在学习。',
            fraction: 8
          }],
          dialogTableVisible: false,
          value: '',
          options:[{
            value:'选项1',
            label:'2017~2018 第一学期'
          },{
            value:'选项2',
            label:'2017~2018 第二学期'
          }
          ],
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          value7: ''
        };
      },
      methods: {
      }
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .achievement{ position: fixed; top: 0 ;left: 0; right: 0; bottom: 0; margin: auto; z-index:2000; width: 80%; height:80%;}
  .conditionScr{ background: #FFFFFF; border-radius: 4px; padding: 10px 0; width: 80%; margin:0 auto 15px;}
  .conditionScr ul{ text-align: center;}
  .conditionScr ul li{ display: inline-block; margin: 0 10px 0 0;}
  .conditionScr ul li em{ padding: 0 5px 0 0;}

  .achievementMain{ margin: 0 auto;  background:url("./../../static/images/chengjimainbg_03.png") no-repeat scroll 0 0; background-size:100%; padding: 0 0 70px;}
  .achievementBox{ padding: 0 0 20px 50px;}
  .achievementBox dl{ width:270px; height:183px;float: left; margin:0 0 0 30px;}
  .achievementBox dl dt{ padding: 20px 0 0;}
  .achievementBox dl dt h3{ font-size: 18px; font-weight: normal}
  .achievementBox dl dt p{  color: #ff3300; font-size: 16px; padding:3px 0;}
  .achievementBox dl dt .bts{ text-align: right; padding: 0 30px;}
  .achievementBox dl dd{ padding: 15px 0 0;}
  .achievementBox dl dd p{ font-size: 15px;}

  .blueBox{ padding: 100px 0 20px 50px;}
  .blueBox dl{ background:url("./../../static/images/chengjinrBG_07.png") no-repeat scroll center center;background-size:100%; text-align: center;}
  .blueBox dl dt .bts a{ display: inline-block; background: #2e7cb7; font-size:13px; color: #FFFFFF; border-radius: 3px; padding: 2px 8px;}
  .redBox dl{ background:url("./../../static/images/chengjinrBG1_10.png") no-repeat scroll center center;background-size:100%;  text-align: center;}
  .redBox dl dt .bts a{ display: inline-block; background: #e089a1; font-size:13px; color: #FFFFFF; border-radius: 3px; padding: 2px 8px;}

  @media screen and (min-width: 1024px) and ( max-width:1365px) {
    .conditionScr{ background: #FFFFFF; border-radius: 4px; padding: 10px 0; width:90%; margin:-30px auto 15px;}
    .achievementBox dl{ width:180px; height:130px;float: left; margin:0 0 0 30px;}
    .blueBox{ padding:70px 0 20px 50px;}
    .blueBox dl{ background:url("./../../static/images/chengjinrBG_07.png") no-repeat scroll center 0;background-size:100%; text-align: center;}
    .redBox dl{ background:url("./../../static/images/chengjinrBG1_10.png") no-repeat scroll center 0;background-size:100%;  text-align: center;}
    .achievementBox dl dt{ padding: 15px 0 0;}
    .achievementBox dl dt p{  color: #ff3300; font-size: 13px; padding:3px 0;}
    .achievementBox dl dt h3{ font-size:14px; font-weight: normal}
    .blueBox dl dt .bts a{ display: inline-block; background: #2e7cb7; font-size:12px; color: #FFFFFF; border-radius: 3px; padding: 2px 8px;}
    .achievementBox dl dt .bts{ text-align: right; padding: 0 30px; margin: -18px -18px 0 0;}
    .achievementBox dl dd{ padding: 10px 0 0;}
    .achievementBox dl dd p{ font-size: 12px;}
  }

  @media screen and (min-width: 1920px) {
    .achievement{ position: fixed; top: 0 ;left: 0; right: 0; bottom: 0; margin: auto; z-index:2000; width: 80%; height:82%;}
    .conditionScr{ background: #FFFFFF; border-radius: 4px; padding: 10px 0; width: 65%; margin: 0 auto;}
    .achievementMain{ width: 95%;  height: 80%; margin: 0 auto;  background:url("./../../static/images/chengjimainbg_03.png") no-repeat scroll 0 0; background-size:100%;}
    .achievementBox dl{ width:300px; height:210px;float: left; margin:0 0 0 85px;}
    .blueBox{ padding:160px 0 50px 50px;}
    .achievementBox dl dt h3{ font-size:20px; font-weight: normal}
    .achievementBox dl dt p{  color: #ff3300; font-size:18px; padding:3px 0;}
    .achievementBox dl dt{ padding:26px 0 0;}
    .achievementBox dl dd{ padding:22px 0 0;}
    .achievementMain{ margin: 0 auto;  background:url("./../../static/images/chengjimainbg_03.png") no-repeat scroll 0 0; background-size:100%; padding: 0 0 105px;}

  }

</style>
