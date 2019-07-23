<template>
    <div>
        <input type="text" name="ListItem"  v-model="msg">
        <button id="button" @click="handleclick">Add</button>
        <ul>
            <todo-item v-for="(item,index) in listItems" :key="index" :licontent="item"
                       :itemindex="index"
            >
            </todo-item>
        </ul>
    </div>
</template>

<script >
    import item from './item'
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
            handleclick(){
                let item = {
                    content: this.msg,
                    isChecked: false,
                }
                this.$store.commit('addItem',item)
                this.msg = ''
            },
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