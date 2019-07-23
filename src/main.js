import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import ToDoList from './components/ToDoList.vue'
import welcome from './components/welcome.vue'
import  axios from 'axios'
import VueRouter from 'vue-router'
import Welcome from './components/Welcome.vue'
import index from './components/index.vue'
import LeftPage from './components/LeftPage.vue'
import Mypage from './components/Mypage.vue'
//Vue.prototype.$axios = axios;
//Vue.prototype.$router=router;
Vue.use(axios)
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:Welcome
      },
      {
        path:'/index/:userName',
        redirect: '/index/:userName/todolist',
        name:'index',
        component:index,
        children:[
          {
            path:'todolist',
            name:'todolist',
            component:TodoList
          },
          {
            path:'mypage',
            name:'mypage',
            component:Mypage
          }
        ]
      },
      {
        path:'/leftpage',
        component:LeftPage
      }
    ]
const router = new VueRouter({routes})
new Vue({
    router,
    store,
    axios,
    render: h => h(App),
}).$mount('#app')