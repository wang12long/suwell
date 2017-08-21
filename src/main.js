// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import iView from 'iview';
import echarts from 'echarts';
import axios from 'axios';
import vuex from 'vuex';
import storejs from 'storejs';//LocalStorage
import routes from './routes';
import store from './vuex/store'
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.prototype.$echarts = echarts
const HOST="http://192.168.1.22/api/pc/"
// const HOST="http://192.168.1.108:8088/api/pc"
axios.defaults.baseURL = HOST
axios.defaults.timeout = 1000 * 15
axios.defaults.headers['Content-Type'] = 'application/json'

// Vue.prototype.$ajax = axios;


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass:"router-link-active",
  // routes:routes,
  routes:[
   {  
      path: '/login',  
      component: require('./components/account/login.vue'),  
      meta: {  
        expanded: false,  
        show: false  
      },  
      name: 'Login'  
    }, 
    //  { path: '/', component: require('./components/Account/Login.vue')},
    { path: '/', component: require('./components/home.vue')},
    { path: '/home', component: require('./components/home.vue')},
    { path: '*', component: require('./components/common/404.vue')},
    ...generateRoutesFromMenu()  
  ]
})
function generateRoutesFromMenu (newRoutes = []) {  
  console.log(storejs.get('menus'))
  if(store.getters.getisLoading==true){
      let routes =storejs.get('menus')
      let children=[]
      for(let i=0,l=routes.length;i<l;i++){
        if(routes[i].zcd.length>0){
          let zcd=routes[i].zcd
          for(let zi=0,zl=zcd.length;zi<zl;zi++){
            let component="'./components"+zcd[zi].ymlj+".vue'"
              children.push({
                  path:'/'+zcd[zi].cdkey, 
                  name:zcd[zi].cdkey,
                  // path:zcd[zi].cd_ymlj, 
                  component: function(resolve) {
                      require(["/components"+zcd[zi].ymlj+".vue"], resolve);
                  },
                  meta: {module: routes[i].cdkey }
              })
          }
        }
      }
     newRoutes.push({
          path:'/home', 
          component: require('./components/home.vue'),
          children:children
      })
     store.dispatch('isLoading',false)
     // store.dispatch('setMenus',newRoutes)
     // console.log(newRoutes)
   }

  return newRoutes  
}  

router.beforeEach((to, from, next) => {
   iView.LoadingBar.start();
   console.log(to.path,from.path)
   // if(store.getters.getisLoading==true){
   //     console.log(store.getters.getMenus)
   //     router.addRoutes(store.getters.getMenus)
   //     store.dispatch('isLoading','false')
   // }

   next()  
})

router.afterEach(transition => {
  iView.LoadingBar.finish();
})

// Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(echarts);

window.router = router
window.storejs = storejs
window.HOST = HOST
window.axios = axios
window.store = store


const app = new Vue({
  router,
  ...App,

}).$mount('#app')