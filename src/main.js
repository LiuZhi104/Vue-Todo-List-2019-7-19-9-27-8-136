import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import ToDoList from './components/ToDoList.vue'
import welcome from './components/welcome.vue'
import  axios from 'axios'
import VueRouter from 'vue-router'
import Welcome from './components/welcome.vue'
import index from './components/index.vue'
import LeftPage from './components/LeftPage.vue'
import Mypage from './components/Mypage.vue'

Vue.prototype.$axios = axios;
Vue.prototype.$router=router;
Vue.use(axios)
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:welcome
      },
      {
        path:'/index/:userName/ToDoList',
        name:'index',
        component:index,
        children:[
          {
            path:'/ToDoList',
            name:'ToDoList',
            component:ToDoList
          },
          {
            path:'/MyPage',
            name:'MyPage',
            component:Mypage
          }
        ]
      },
      {
        path:'/LeftPage',
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