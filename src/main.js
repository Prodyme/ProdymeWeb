import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import LottieAnimation from 'lottie-web-vue'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(LottieAnimation);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
