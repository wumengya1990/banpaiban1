// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './index'
import router from './router'
import resource from './resource'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/main.css'
import store from './vuex/store'  //使用vuex管理
import axios from './axios'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(resource)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  resource,
  store,
  axios,    //通过import引入，然后在这里调用
  components: { index },
  template: '<index/>',
  render: h => h(index)
})

