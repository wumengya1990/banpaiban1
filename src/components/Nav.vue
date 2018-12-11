<template>
  <div class="nav">
    <router-link active-class="on" to="/space">班级空间</router-link>
    <router-link active-class="on" to="/classCard">我的课表</router-link>
    <router-link active-class="on" to="/achievement">我的成绩</router-link>
    <router-link active-class="on" to="/electiveCourse">我的选课</router-link>
    <router-link active-class="on" to="/homework">我的作业</router-link>
    <router-link active-class="on" to="/honor">我的荣誉</router-link>
    <router-link active-class="on" to="/parentsLeaveMessage">家长留言</router-link>
    <router-link active-class="on" to="/attendance">我的考勤</router-link>
    <!--<router-link active-class="on" to="/test">我的考勤</router-link>-->
  </div>
</template>

<script>
  export default {
    name: 'nav'
  }
</script>

<style scoped>
  .nav{ position: fixed; z-index: 10;  bottom: 0; top: auto; left:0; right:0; width: 100%; text-align: center; background: rgba(0,0,0,0.6); margin:0 auto; padding: 10px 0;}
  .nav a{ margin:0 5px; display: inline-block; height:40px; line-height:40px; background: #917f03; color: #FFFFFF; border-radius: 50px; padding: 0 30px; text-decoration: none;}
  .nav a:hover{background: #FFFFFF; color:#0f7b8b;}
  .nav a.on{ background: #FFFFFF; color:#0f7b8b; font-weight: bold}

  @media screen and (min-width: 1024px) {
    .nav a{ margin:0 5px; display: inline-block; height:40px; line-height:40px; background: #917f03; color: #FFFFFF; border-radius: 50px; padding: 0 27px; text-decoration: none;}
  }

  /*导航1920*/
  @media screen and (min-width: 1920px) {
    .nav{ position: fixed; z-index: 10;  bottom: 0; top: auto; left:0; right:0; width: 100%; text-align: center; background: rgba(0,0,0,0.6); margin:0 auto; padding:20px 0;}
    .nav a{ font-size: 1.5em; margin:0 5px; display: inline-block; height:40px; line-height:40px; background: #917f03; color: #FFFFFF; border-radius: 50px; padding: 0 27px; text-decoration: none;}
  }

</style>
