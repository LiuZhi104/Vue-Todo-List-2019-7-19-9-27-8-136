
<template>
    <div>
        <button @click="all" id="allId" >ALL</button>
        <button @click="active" id="activeId" >Active</button>
        <button @click="complete" id="completeId">Complete</button>
    </div>
</template>

<script>
    export default {
        props:['licontent','liindex'],
        data(){
            return{
                msg:'',
                list:[],
                showList:[]
            }
        },
        methods:{
            complete(){
                this.$store.commit('complete')
            },
            active(){
                this.$store.commit('active')
            },
            all(){
                this.$store.commit('all')
            }
        }
    }
</script>

<style scoped>

</style>