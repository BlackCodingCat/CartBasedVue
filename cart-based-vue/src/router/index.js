import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
	path: '/login',
	name: 'login',
	component: Login
  },
  {
	path: '/cart',
	name: 'cart',
	component: Cart,
	// 需要守卫
	meta: {
		auth: true
	}
  },
  {
    path: '/about',
    name: 'about',
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

router.beforeEach((to,from,next) => {
	// 判断一下要去的导航的meta中是否有auth，需要进行鉴权
	if(to.meta.auth){
		// 需要鉴权
		// 看一下本地是否有token
		const token = localStorage.getItem('token');
		if(token){
			next();
		}else{
			// 没有token，转向登录页面
			next({
				path: '/login',
				// 参数query附带登录成功后的转发路径
				query: {redirect: to.path}
			})
		}
	}else{
		next();
	}
})

export default router
