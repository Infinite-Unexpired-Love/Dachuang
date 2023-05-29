import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
import Message from '../views/Message/Message.vue'
import Ucenter from '../views/Ucenter/Ucenter.vue'
import History from '../views/Ucenter/History.vue'
import Post from '../views/Trans/Post.vue'
import Purchase from '../views/Trans/Purchase.vue'
import Sell from '../views/Trans/Sell.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      title: '消息',
    }
  },
  {
    path: '/ucenter',
    name: 'Ucenter',
    component: Ucenter,
    meta: {
      title: '用户中心',
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      title: '历史订单',
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    meta: {
      title: '发布售电信息',
    }
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase,
    meta: {
      title: '购买电力',
    }
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell,
    meta: {
      title: '出售电力'
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
