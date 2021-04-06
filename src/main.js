import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import MintUI from 'mint-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css';
import './../src/assets/css/base.css';
import './../src/assets/css/normalize.css';
import './assets/js/mint-ui.js';



Vue.use(ElementUI,MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
