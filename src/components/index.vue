<template>
    <div>
        <IndexHeader></IndexHeader>
        <LeftPage class="left"></LeftPage>
        <router-view></router-view> 
    </div>
</template>

<script>
import IndexHeader from './IndexHeader.vue'
import LeftPage from './LeftPage.vue'
import TodoList from './TodoList.vue'
    export default {
    components:{
        IndexHeader,
        LeftPage,
        TodoList
    }
    }
</script>

<style scoped>
.left{
    float: left;
}
</style>