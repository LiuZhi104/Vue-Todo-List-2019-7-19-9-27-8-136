<template>
  <div slot="height: 100%;">
    <div>
      <Card  class="card">
        <div>
          <h1> Jquery To Do List</h1>
          <h6>Simple To Do List with adding and filter by diff status</h6>
        </div>
        <div>
          <input type="text" id="text" v-model="inputContent">
          <Button type="success" size="small" @click="add">Add</Button>
        </div>
        <div>
          <ul>
            <li v-for="(item,index) in items" style="width: 100%">{{index+1}}. &nbsp; &nbsp;&nbsp;<Checkbox v-model="item.isChecked">{{item.content}}</Checkbox></li>
          </ul>
        </div>
        <div>
          <Button type="success" size="small">All</Button>
          <Button type="success" size="small">Active</Button>
          <Button type="success" size="small">Complete</Button>
        </div>
      </Card>
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
