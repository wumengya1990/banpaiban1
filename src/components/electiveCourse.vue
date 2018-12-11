<template>
    <div class="electiveCourse">
      <h1 class="titleTop">我的选课</h1>
      <div class="electiveCourseList">
        <div class="courseBox">
          <div class="courseImg"><img src="./../../static/images/kechengImg_07.png"></div>
          <div class="courseSynopsis">
            <ul>
              <li><em><i class="icon ccFont CC-zhuxiukecheng"></i>课程名称：</em><div class="rightContent">语文</div></li>
              <li><em><i class="icon ccFont CC-wenzhangliebiaoxiangqing"></i>课程简介：</em><div class="rightContent"><a class="moreContent"  @click="dialogVisible = true"><i class="icon ccFont CC-gengduo"></i></a><p>很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</p></div></li>
              <li><em><i class="icon ccFont CC-msnui-girl"></i>任课老师：</em><div class="rightContent">张洋</div></li>
              <li><em><i class="icon ccFont CC-iconset0113"></i>上课时间：</em><div class="rightContent">每周4下午第4节课</div></li>
              <li><em><i class="icon ccFont CC-fangjian"></i>上课教室：</em><div class="rightContent">多媒体阶梯教室</div></li>
            </ul>
          </div>
        </div>

        <div class="courseBox">
          <div class="courseImg"><img src="./../../static/images/kechengImg_07.png"></div>
          <div class="courseSynopsis">
            <ul>
              <li><em><i class="icon ccFont CC-zhuxiukecheng"></i>课程名称：</em><div class="rightContent">语文</div></li>
              <li><em><i class="icon ccFont CC-wenzhangliebiaoxiangqing"></i>课程简介：</em><div class="rightContent"><a class="moreContent" @click="dialogVisible = true"><i class="icon ccFont CC-gengduo"></i></a><p>很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</p></div></li>
              <li><em><i class="icon ccFont CC-msnui-girl"></i>任课老师：</em><div class="rightContent">张洋</div></li>
              <li><em><i class="icon ccFont CC-iconset0113"></i>上课时间：</em><div class="rightContent">每周4下午第4节课</div></li>
              <li><em><i class="icon ccFont CC-fangjian"></i>上课教室：</em><div class="rightContent">多媒体阶梯教室</div></li>
            </ul>
          </div>
        </div>

        <div class="courseBox">
          <div class="courseImg"><img src="./../../static/images/kechengImg_07.png"></div>
          <div class="courseSynopsis">
            <ul>
              <li><em><i class="icon ccFont CC-zhuxiukecheng"></i>课程名称：</em><div class="rightContent">语文</div></li>
              <li><em><i class="icon ccFont CC-wenzhangliebiaoxiangqing"></i>课程简介：</em><div class="rightContent"><a class="moreContent" @click="dialogVisible = true"><i class="icon ccFont CC-gengduo"></i></a><p>很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</p></div></li>
              <li><em><i class="icon ccFont CC-msnui-girl"></i>任课老师：</em><div class="rightContent">张洋</div></li>
              <li><em><i class="icon ccFont CC-iconset0113"></i>上课时间：</em><div class="rightContent">每周4下午第4节课</div></li>
              <li><em><i class="icon ccFont CC-fangjian"></i>上课教室：</em><div class="rightContent">多媒体阶梯教室</div></li>
            </ul>
          </div>
        </div>

        <div class="courseBox">
          <div class="courseImg"><img src="./../../static/images/kechengImg_07.png"></div>
          <div class="courseSynopsis">
            <ul>
              <li><em><i class="icon ccFont CC-zhuxiukecheng"></i>课程名称：</em><div class="rightContent">语文</div></li>
              <li><em><i class="icon ccFont CC-wenzhangliebiaoxiangqing"></i>课程简介：</em><div class="rightContent"><a class="moreContent" @click="dialogVisible = true"><i class="icon ccFont CC-gengduo"></i></a><p>很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</p></div></li>
              <li><em><i class="icon ccFont CC-msnui-girl"></i>任课老师：</em><div class="rightContent">张洋</div></li>
              <li><em><i class="icon ccFont CC-iconset0113"></i>上课时间：</em><div class="rightContent">每周4下午第4节课</div></li>
              <li><em><i class="icon ccFont CC-fangjian"></i>上课教室：</em><div class="rightContent">多媒体阶梯教室</div></li>
            </ul>
          </div>
        </div>



      </div>
      <div class="illustration"></div>

      <el-dialog
        title="详情"
        :modal-append-to-body="false"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
        <span>很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>

    </div>
</template>

<script>
  import './../../static/css/fonts/iconfont.css'
    export default {
        name: "electiveCourse",
      data(){
          return{
            dialogVisible:false
          }
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      }
    }
</script>

<style scoped>
  .titleTop{ position: fixed; left: 0; top: 0; z-index: 2000; height: 60px; line-height: 60px; padding: 0 20px; color: #FFFFFF; font-size:22px;}
  .electiveCourse{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index:2000; width:80%; height:84%; margin: auto; background: url("./../../static/images/kechengBg_06.png") no-repeat scroll 0 0; background-size: 100%;}
  .electiveCourseList{ position: absolute; left:60px; top: 35px; right: 60px; bottom: 90px; overflow: hidden; overflow-y:auto; }
  .illustration{ position: absolute; right:-80px; bottom: -20px; width: 230px; height:275px; background: url("./../../static/images/teacherFimg_03.png") no-repeat scroll center center; background-size: 100%;}
  .courseBox{ margin:20px 0 0;}
  .courseImg{ float:left; position: relative; width: 240px; height:240px; background: #f9c331; margin:0 200px 0 78px;}
  .courseImg img{ position: absolute; left:0;  top: 0; right: 0; bottom: 0; margin: auto;}
  .courseSynopsis{ overflow: hidden; padding: 0 110px 0 0;}
  .courseSynopsis ul li{ background: #cfeeed; margin:0 0 10px; height: 40px; line-height: 40px; padding: 0 10px; overflow: hidden; border-radius: 4px;}
  .courseSynopsis ul li em{ float:left;}
  .courseSynopsis ul li em i{ font-size:24px;  margin: 0 10px 0 0; vertical-align: middle;}
  .courseSynopsis ul li .rightContent{ overflow: hidden; position: relative;}
  .courseSynopsis ul li .rightContent a.moreContent{ position: absolute; right: 0; top: 0;}
  .courseSynopsis ul li .rightContent a.moreContent i{ font-size: 14px; color: #179481;}
  .courseSynopsis ul li .rightContent a.moreContent:hover{ text-decoration: none;}
  .courseSynopsis ul li .rightContent p{ overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding: 0 20px 0 0; }

  @media screen and (min-width:1024px) and ( max-width:1365px)  {
    .courseImg{ float:left; position: relative; width: 180px; height:180px; background: #f9c331; margin:0 130px 0 33px;}
    .courseImg img{ position: absolute; width: 50%;  left:0;  top: 0; right: 0; bottom: 0; margin: auto;}
    .courseSynopsis{ overflow: hidden; padding: 0 50px 0 0;}
    .courseSynopsis ul li{ background: #cfeeed; margin:0 0 10px; height:30px; line-height: 30px; padding: 0 10px; overflow: hidden; border-radius: 4px;}
    .illustration{ position: absolute; right:-80px; bottom: 10px; width:175px; height:210px; background: url("./../../static/images/teacherFimg_03.png") no-repeat scroll center 0; background-size: 100%;}

  }

  @media screen and (min-width: 1920px) {
    .electiveCourse{ position: fixed; text-align: left; top: 0 ;left: 0; right: 0; bottom: 0; z-index: 11; width:73%; height:71%; margin: auto; background: url("./../../static/images/kechengBg_06.png") no-repeat scroll 0 0; background-size: 100%;}
    .illustration{ position: absolute; right:-80px; bottom: -97px; width: 230px; height:275px; background: url("./../../static/images/teacherFimg_03.png") no-repeat scroll center center; background-size: 100%;}
    .courseBox{ margin:50px 0 0;}
    .courseImg{ float:left; position: relative; width: 240px; height:240px; background: #f9c331; margin:0 290px 0 130px;}
  }
</style>
