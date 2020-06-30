import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Home from './components/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter ({
  mode: 'history',
  routes: [{
    path: '/Home', 
    component: Home,
  }],
})

new Vue({
  vuetify,
  router,
  
  render: h => h(App)
}).$mount('#app')
