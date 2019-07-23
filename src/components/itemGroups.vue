<template>
    <div>
        <input type="text" name="ListItem"  v-model="msg">
        <button id="button" @click="add">Add</button>
        <ol>
            <todo-item v-for="(item,index) in listItems" :key="index" :licontent="item"
                       :itemindex="index"
            >
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
            this.$store.dispatch('addItem',this.inputItem);
            this.inputItem = {
                content: '',
                isChecked:false
			};
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