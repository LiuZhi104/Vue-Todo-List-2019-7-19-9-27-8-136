<template>
  <div class="container">
    <heads></heads>
    <items></items>
    <foot></foot>
  </div>
</template>

<script>
  import items from './items'
  import heads from './header'
  import foot from './footer'
  export default {
    name: 'HelloWorld',
    components:{
      heads,
      foot,
      items
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style scoped>
</style>