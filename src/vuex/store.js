import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: '城乡结合部'
  }
  // ,
  // actions:{
  //   savsForm(context){
  //     asios({
  //       method:'post',
  //       url:'/user',
  //       data:context.state.author
  //     })
  //   }
  // }
})

export default store
