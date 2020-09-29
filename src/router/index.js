import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/MIntUI/myheader'
import Button from '../components/MIntUI/Mybutton'
import Navbar from '../components/MIntUI/Navbar'
import Infinite from '../components/MIntUI/Infinite'
// 引入注册页面\
import Register from '../views/Register'
// 引入我的页面
import Me from '../views/Me'
// 引入登录页面
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path:'/infinite',
    component:Infinite
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/reg',
    name: 'reg',
    component:Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
