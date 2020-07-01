import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Home from './components/Home';
import HomeCV from './components/HomeCV';
// import competence from './components/competence';
// import formation from './components/formation';
// import experience from './components/experience';
// import hobbie from './components/hobbies';
// import parallaxcom from './components/parallaxCom';
// import parallaxfor from './components/parallaxFor';
// import parallaxexp from './components/parallaxExp';
// import parallaxhob from './components/parallaxHob';




Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const router = new VueRouter ({
  mode: 'history',
  routes: [{
    path: '/', 
    component: Home,
    name: 'Accueil',
  },{
    path:'/CV',
    component: 
    HomeCV,
    name: 'CV',
  },{
    path:'*',
    redirect: '/'
  }
  ],
})

new Vue({
  vuetify,
  router,
  
  render: h => h(App)
}).$mount('#app')
