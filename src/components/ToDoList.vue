<template>
  <div>
    <div>
      <Card  class="card">
        <div>
          <h2 id="h2"> Jquery To Do List</h2>
          <h6 >Simple To Do List with adding and filter by diff status</h6>
        </div>
        <div>
          <input type="text" id="text" v-model="inputContent">
          <Button type="success" size="small" @click="add" id="addId">Add</Button>
        </div>
        <div>
          <ul>
            <li v-for="(item,index) in showItems">{{index+1}}. &nbsp; &nbsp;&nbsp;
              <Checkbox v-model="item.isChecked">
              </Checkbox>
              <input type="text" v-if="item.isEdit" v-model="item.content" @keyup.enter="onSubmit(index)">
              <span v-else @dblclick="onDblclick(index)">
                  <del v-if="item.isChecked">{{item.content}}</del>
                  <span v-else>{{item.content}}</span>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <Button type="success" size="small" @click="all" id="allId">All</Button>
          <Button type="success" size="small" @click="active" id="activeId">Active</Button>
          <Button type="success" size="small" @click="complete" id="complete">Complete</Button>
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
        isChecked: false,
        isEdit: false
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

    },
    onDblclick(index){
      this.showItems[index].isEdit = true
    },

    onSubmit(index){
        this.showItems[index].isEdit=false
    }
  }


}
</script>


