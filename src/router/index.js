import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Builder from "@/views/Builder.vue";
import Contact from "@/views/Contact.vue";
import Category from "@/views/Category.vue";
import Filter from "@/views/Filter.vue";
import Search from "@/views/SearchPage.vue";
import Service from "@/views/ServiceHire.vue";
import Carpenter from "@/views/ServiceHire2.vue";
import Hire from "@/views/HireProvider.vue";
import Admin from "@/views/ProductAdmin.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/planner',
    name: 'Builder',
    component: Builder
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/carpenter',
    name: 'Carpenter',
    component: Carpenter
  },
  {
    path: '/hire',
    name: 'hire',
    component: Hire
  },
  {
    path: '/padmin',
    name: 'ProductAdmin',
    component: Admin,
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
