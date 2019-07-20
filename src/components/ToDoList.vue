<template>
  <div >
    <div>
      <h1> Jquery To Do List</h1>
      <h3>Simple To Do List with adding and filter by diff status</h3>
      <input type="text" id="text" v-model="inputContent">
      <button @click="add">Add</button>
      <div>
        <ul>
          <li v-for="item in items">{{item.content}}</li>
        </ul>
      </div>
<!--      <div>-->
<!--        <button @click="all">All</button>-->
<!--        <button @click="active">Active</button>-->
<!--        <button @click="complete">Complete</button>-->
<!--      </div>-->
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      items: [],
      inputContent: ""
    }
  },
  methods: {
    add(){
      let item={
        content: this.inputContent,
        isChecked: false
      }
      this.items.push(item)
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
