import ContactViewVue from '@/views/ContactView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import CartInfoVue from '@/views/CartInfo.vue'
import ProductDetailPageVue from '@/views/ProductDetailPage.vue'
import NotFoundPageVue from '@/views/NotFoundPage.vue'
import LoginFormVue from '@/components/LoginForm.vue'
import SignUpVue from '@/components/SignUp.vue'
const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactViewVue
  },
  
  {
    path:'/login',
    name: 'LoginForm',
    component: LoginFormVue,
  },
  {
    path:'/signup',
    name: 'SignUp',
    component: SignUpVue,
  },
  {
    path:'/shop/:id',
    name: 'ProductDetails',
    component: ProductDetailPageVue,
  },
  {
    path:'/cart',
    name:'CartInfo',
    component: CartInfoVue,
  },
  
  {
    path:'/*',
    component: NotFoundPageVue,
  }
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
