
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export  default new Vuex.Store({
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
                return !item.isChecked;})
        },
        all(state){
            state.showItems = state.listItems.map(a => a)
        },
        print(state,item){
            state.showItems=item
        },
        deleteItem(state){
            state.showItems.pull(item);
            state.item.listItems.pull(item);
        },
        updateItem(state){
            state.showItems.splice(index,1);
            state.showItems.spice(index,5);
        }

        
    },
     actions:{
         getItems({commit}){
             axios.get("http://localhost:3001/todos").then(response=>{
                 commit("getItems",response.data);
             })
         },
         addItems({commit}){
             axios.post("http://localhost:3001/todos",item).then(response=>{
                 commit("addItems",response.data);
             })
         }
         updateItems({commit}){
             axios.put("http://localhost:3001/todos").then(response=>{
                 commit("updateItems",response.data);
             })
         }
         deleteItem({commmit}){
             axios.delete("http://localhost:3001/todos").then(response=>{
                 commit("deleteItem",response.data);
             })
         }
         
         
     }

})