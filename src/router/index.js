import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const home = () => import('./../views/home/home')
const category = () => import('./../views/category/category')
const shopcart = () => import('./../views/shopcart/shopcart')
const mine = () => import('./../views/mine/mine')
const detail = () => import('./../views/detail/detail')

const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', component: home, meta: { title: '首页' } },
  { path: '/category', component: category, meta: { title: '分类' } },
  { path: '/shopcart', component: shopcart, meta: { title: '购物车' } },
  { path: '/mine', component: mine, meta: { title: '我的' } },
  { path: '/detail/:iid', component: detail,meta: { title: '详情页' } }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
