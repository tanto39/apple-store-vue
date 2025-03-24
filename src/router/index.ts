import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Category from '../pages/Category.vue'
import ProductDetail from '../pages/ProductDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'category',
    component: Category
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
