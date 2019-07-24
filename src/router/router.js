import VueRouter from 'vue-router'
import welcome from './components/welcome.vue'
import ToDoList from './components/ToDoList.vue'
import index from './components/index.vue'
import LeftPage from './components/LeftPage.vue'
import Mypage from './components/Mypage.vue'
Vue.prototype.$router=router;
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
export default new VueRouter({routes})