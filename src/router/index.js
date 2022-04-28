import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Builder from "@/views/Builder.vue";
import Contact from "@/views/Contact.vue";
import Category from "@/views/Category.vue";
import Filter from "@/views/Filter.vue";
import Search from "@/views/SearchPage.vue";

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
