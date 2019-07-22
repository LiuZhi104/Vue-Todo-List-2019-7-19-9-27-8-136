<template>
    <li >
        <div class="lefthide">
            <input type="checkbox" v-model="licontent.isChecked">
            <span v-if="!licontent.isEdit" @dblclick="onDblclick(licontent)">
              <del v-if="licontent.isChecked">{{licontent.content}}</del>
                <span v-else>{{licontent.content}}</span>
            </span>
            <input type="text" v-else v-model="licontent.content" @keyup.enter="onSubmit(licontent)">
        </div>
    </li>
</template>

<script>
    export default {
        props:['licontent'],
        data () {
            return {
                isEdit:false,
                isChecked: false
            }
        },
        methods:{
            onDblclick(licontent){
                licontent.isEdit = true,
                this.$set(this.licontent, licontent)
                // console.log('db', licontent)
            },
            onSubmit(licontent){
                licontent.isEdit=false
            },

        },
    }
</script>