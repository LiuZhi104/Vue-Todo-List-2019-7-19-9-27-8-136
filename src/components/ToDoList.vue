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
            <li v-for="(item,index) in showItems" style="width: 100%">{{index+1}}. &nbsp; &nbsp;&nbsp;
              <Checkbox v-model="item.isChecked">
                <del v-if="item.isChecked">{{item.content}}</del>
                <span v-else>{{item.content}}</span>
              </Checkbox>
            </li>
          </ul>
        </div>
        <div>
          <Button type="success" size="small" @click="all">All</Button>
          <Button type="success" size="small" @click="active">Active</Button>
          <Button type="success" size="small" @click="complete">Complete</Button>
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
      inputContent: "",
      showItems: []
    }
  },
  methods: {
    add(){
      let item={
        content: this.inputContent,
        isChecked: false
      }
      this.items.push(item)
      this.showItems.push(item)
    },
    complete(){
      this.showItems=this.items.filter((item)=>{
        return item.isChecked;
      })
    },
    active(){
      this.showItems=this.items.filter((item)=>{
        return !item.isChecked;
      })

    },
    all(){
      this.showItems=this.items

    }

  }


}
</script>


