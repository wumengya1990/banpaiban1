import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {                                                                        //当首次进入页面时，页面没有显示任何组件；让页面一加载进来就默认显示first页面
    path:'/',                                                           //重定向，就是给它重新指定一个方向，加载一个组件；
    component:resolve => require(['@/components/home'],resolve)
  },
  {
    path:'/attendance',
    component:resolve => require(['@/components/attendance'],resolve)
  },
  {
    path:'/parentsLeaveMessage',
    component: resolve => require(['@/components/parentsLeaveMessage'],resolve),
    children:[
      {path:'sentPage',component: resolve => require(['@/components/sentPage'],resolve)}
    ]
  },
  {
    path:'/honor',
    component: resolve => require(['@/components/honor'],resolve)
  },
  {
    path:'/homework',
    component: resolve => require(['@/components/homework'],resolve)
  },
  {
    path:'/electiveCourse',
    component: resolve => require(['@/components/electiveCourse'],resolve)
  },
  {
    path:'/achievement',
    component: resolve => require(['@/components/achievement'],resolve)
  },
  {
    path:'/classCard',
    component: resolve => require(['@/components/classCard'],resolve)
  },
  {
    path:'/mainContent',
    component: resolve => require(['@/components/mainContent'],resolve)
  },
  {
    path:'/achievement',
    component: resolve => require(['@/components/achievement'],resolve)
  },
  {
    path:'/Nav',
    component: resolve => require(['@/components/Nav'],resolve)
  },
  {
    path:'/touxiang',
    component: resolve => require(['@/components/suspensionPortrait'],resolve)
  },
  {
    path:'/space',
    component:resolve => require(['@/components/space'],resolve)
  },
  {
    path:'/home',
    component:resolve => require(['@/components/home'],resolve)
  },
  {
    path:'/test',
    component:resolve => require(['@/components/test'],resolve)
  }
//这里require组件路径根据自己的配置引入
]
//最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。

const router = new Router({
  routes
})

export default router
