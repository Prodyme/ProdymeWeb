import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import LottieAnimation from 'lottie-web-vue'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(LottieAnimation);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
