<template>
    <div>
        <ul>
            <li><router-link :to="{name:'ToDoList'}"> todolist</router-link></li>
            <li><router-link :to="{name:'MyPage'}"> mypage</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'leftpage',
    computed:{
        getUserName(){
            return this.$route.params.userName
        }
    }
}
</script>

