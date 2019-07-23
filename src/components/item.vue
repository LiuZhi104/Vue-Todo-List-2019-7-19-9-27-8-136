<template>
    <li >
        <div >
            <input type="checkbox" v-model="content.isChecked">
            <span v-if="!content.isEdit" @dblclick="onDblclick()">
              <del v-if="content.isChecked">{{content.content}}</del>
                <span v-else>{{content.content}}</span>
            </span>
            <input type="text" v-else v-model="content.content" @keyup.enter="onSubmit()">
        </div>
    </li>
</template>

<script>
    export default {
        props:['licontent'],
        data () {
            const { ...content } = this.licontent;
            return {
                content,
                isEdit:false,
                isChecked: false
            }
        },
        methods:{
            onDblclick(){
                this.content.isEdit = true,
                this.$set(this.content, this.content.content)
                // console.log('db', licontent)
            },
            onSubmit(){
                this.content.isEdit=false

            },

        },
    }
</script>