import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import About from './views/About.vue'
Vue.use(router);
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.component('About', About)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
