import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DesktopView from '../views/DesktopView.vue';
import CompaniesView from '../views/CompaniesView.vue';
import UsersView from '../views/UsersView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'desktop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DesktopView
  },
  {
    path: '/companies',
    name: 'companies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CompaniesView
  },
  {
    path: '/users',
    name: 'users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UsersView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
