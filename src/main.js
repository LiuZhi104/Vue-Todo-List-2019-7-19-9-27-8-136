import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import ToDoList from './components/ToDoList.vue'
import welcome from './components/welcome.vue'
//import  axios from 'axios'
import VueRouter from 'vue-router'
//Vue.prototype.$axios = axios;
Vue.prototype.$router=router;
//Vue.use(axios)
Vue.use(VueRouter)
const routes = [
    { path: '/', component: welcome},
    {path:'/ToDoList',component:ToDoList}
    ]
const router = new VueRouter({routes})
new Vue({
    router,
    store,
    //axios,
    render: h => h(App),
}).$mount('#app')