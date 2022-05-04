import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Builder from "@/views/Builder";
import Blog from "@/views/Blog";
import Contact from "@/views/Contact.vue";
import Account from "@/views/Account.vue";
import Orders from "@/views/Orders.vue";
import Designs from "@/views/Design.vue";
import Wishlist from "@/views/Wishlist.vue";
import Messages from "@/views/Messages.vue";
import Test from "@/views/Test.vue";
import SmartBuilder from "@/views/SmartBuilder.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Prodyme"
    }
  },
  {
    path: '/planner',
    name: 'Builder',
    component: Builder
  },
  {
    path: '/journal',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/myAccount',
    name: 'MyAccount',
    component: Account
  },
  {
    path: '/myOrders',
    name: 'MyOrders',
    component: Orders
  },
  {
    path: '/myDesigns',
    name: 'MyDesigns',
    component: Designs
  },
  {
    path: '/myWishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/myMessages',
    name: 'myMessages',
    component: Messages
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/SmartBuilder',
    name: 'SmartBuilder',
    component: SmartBuilder
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
