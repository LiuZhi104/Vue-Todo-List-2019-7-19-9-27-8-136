<template>
    <div>
        <button class="backBtn"  @click="backToWelcome">back</button>
        <span class="userName">用户名：{{getUserName}}</span>
    
    </div>
</template>
<script>
export default {
    name:'index',
    computed:{
        getUserName(){
            return this.$route.params.userName
        }
    },
    methods:{
        backToWelcome(){
            return $route.push({path:'welcome'});

        }
    },
    beforeRouteLeave (to, from , next) {
        if(to.path ==='/'){
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>
<style>
.backBtn{
    float: left;
    background: #fc999b;
    text-decoration: none;
    line-height: 28px;
    width: 60px;
    font-size: 18px;
    border: 0;
    outline: 0;
    margin-left: 5px; 
    border-radius: 5px;
    color: #fff;
  }
  .userName{
      float: right;
  }
</style>