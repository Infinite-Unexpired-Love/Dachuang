import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Meta from 'vue-meta'
import 'vant/lib/index.css';
import '@/css/common.css';

Vue.config.productionTip = false
Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
