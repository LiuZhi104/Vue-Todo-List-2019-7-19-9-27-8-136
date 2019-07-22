import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
    state: {
        showItems: [],
        listItems:[]
    },
    mutations: {
        addItem(state,item){
            state.showItems.push(item)
            state.listItems.push(item)
        },
        complete(state){
            state.showItems = state.listItems.filter((item)=>{
                return item.isChecked;
        })
        },
        active(state){
            state.showItems = state.listItems.filter((item)=>{
                return !item.isChecked;
        })
        },
        all(state){
            state.showItems = state.listItems.map(a => a)
        }
        
        
    }
})
new Vue({
    store,
    render: h => h(App),
}).$mount('#app')