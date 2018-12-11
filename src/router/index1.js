import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'
import mainContent from '@/components/mainContent'
import classCard from '@/components/classCard'
import achievement from '@/components/achievement'
import electiveCourse from '@/components/electiveCourse'
import homework from '@/components/homework'
import honor from '@/components/honor'
import parentsLeaveMessage from '@/components/parentsLeaveMessage'
import attendance from '@/components/attendance'
import space from '@/components/space'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/Nav',
      name: 'Nav',
      component: Nav
    }, {
      path: '/mainContent',
      name: 'mainContent',
      component: mainContent
    }, {
      path: '/classCard',
      name: 'classCard',
      component: classCard
    }, {
      path: '/achievement',
      name: 'achievement',
      component: achievement
    }, {
      path: '/electiveCourse',
      name: 'electiveCourse',
      component: electiveCourse
    }, {
      path: '/homework',
      name: 'homework',
      component: homework
    }, {
      path: '/honor',
      name: 'honor',
      component: honor
    }, {
      path: '/parentsLeaveMessage',
      name: 'parentsLeaveMessage',
      component: parentsLeaveMessage
    }, {
      path: '/attendance',
      name: 'attendance',
      component: attendance
    }, {
      path: '/space',
      name: 'space',
      component: space
    }
  ]
})
