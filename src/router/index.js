import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('components/Login.vue')
const Home = () => import('components/Home.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next) => {
  // next是一个函数，表示放行
  // next()放行 next(路径)强制跳转

  // 如果访问login页面直接放行 否则判断是否带有token
  if(to.path ==='/login') return next();
  //获取token
  const T = window.sessionStorage.getItem('token');
  if(!T) return next('/login');
  else next()
})

export default router
