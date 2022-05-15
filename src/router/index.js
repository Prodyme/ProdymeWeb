import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Builder from "@/views/Builder";
import Blog from "@/views/Blog";
import Contact from "@/views/Contact.vue";

// To be Reviewed
import Checkout from "@/views/CheckFlow.vue";
import ContactDetails from '../views/ContactDetails.vue';
import ThankYouPage from '../views/ThankYouPage.vue';
import BlogContent from '../views/BlogContent.vue';




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
