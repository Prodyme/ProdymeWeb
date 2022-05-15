import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import LottieAnimation from 'lottie-web-vue'


// To be Reviewed

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-icon', fas)
Vue.component('font-awesome-icon', far)

// End




Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(LottieAnimation);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
