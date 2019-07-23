<template>
    <div>
        <input type="text" name="ListItem"  v-model="msg">
        <button id="button" @click="add">Add</button>
        <ol>
            <todo-item v-for="(item,index) in listItems" :key="index" :licontent="item"
                       :itemindex="index"
            >
                <button type="button" value="delete()"></button>
            </todo-item>
        </ol>
    </div>
</template>
<script >
    import item from './item'
    import  axios from 'axios'
    export default {
        components:{
            "todo-item":item
        },
        data(){
            return{
                msg:'',
            }
        },
        methods:{
            add(){
                let item = {
                    content: this.msg,
                    isChecked: false,
                }
                this.$store.commit('addItem',item)
                this.msg = ''
                this.$store.dispatch("addItems",{"content":this.content,"isChecked":this.isChecked});
            },
            deleteItem(){
                this.$store.dispatch("deleteItem",{"content":this.content,"isChecked":this.isChecked});
            },
            updateItem(){

            }

        },
        computed: {
            listItems () {
                return this.$store.state.showItems;
            }
        }
    }
</script>
<style scoped>
</style>