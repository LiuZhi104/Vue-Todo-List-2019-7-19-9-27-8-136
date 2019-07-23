<template>
    <div>
        <router-link to="/ToDoList">开始使用</router-link>
        <router-view></router-view>
       <span>请输入姓名</span><input type="text" >
    </div>
</template>

<script>
    export default {
        name: "welcome"
    }

</script>

<style scoped>

</style>