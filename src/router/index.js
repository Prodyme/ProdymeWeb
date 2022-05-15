import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Builder from "@/views/Builder";

// To be Reviewed
import Blog from "@/views/Blog";
import Contact from "@/views/Contact.vue";
import Search from "@/views/SearchPage.vue";
import Category from "@/views/Category.vue";
import Filter from "@/views/Filter.vue";

import Orders from "@/views/Orders.vue";
import Designs from "@/views/Design.vue";
import Wishlist from "@/views/Wishlist.vue";
import Messages from "@/views/Messages.vue";
import SmartBuilder from "@/views/SmartBuilder.vue"
import SmartBuilderBasket from "@/views/SmartBuilderBasket.vue"

import Account from "@/views/Account.vue";
import Checkout from "@/views/CheckFlow.vue";
import ContactDetails from '../views/ContactDetails.vue';
import ThankYouPage from '../views/ThankYouPage.vue';
import BlogContent from '../views/BlogContent.vue';

// End

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
    path: '/checkout',
    name: 'CheckFlow',
    component: Checkout
  },
  {
    path: '/checkout-contactdetails',
    name: 'ContactDetails',
    component: ContactDetails
  },
  {
    path:'/checkout-thankyou',
    name: 'ThankYouPage',
    component: ThankYouPage
  },
  {
    path:'/journal-content',
    name:BlogContent,
    component:BlogContent
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
    path: '/SmartBuilder',
    name: 'SmartBuilder',
    component: SmartBuilder
  },
  {
    path: '/Basket',
    name: 'SmartBuilderBasket',
    component: SmartBuilderBasket
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
