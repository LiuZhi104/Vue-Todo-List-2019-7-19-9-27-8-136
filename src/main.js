import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import  axios from 'axios'
import router from 'vue-router'
new Vue({
    router,
    store,
    axios,
    render: h => h(App),
}).$mount('#app')