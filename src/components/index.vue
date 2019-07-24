<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                <IndexHeader></IndexHeader>
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                <LeftPage class="left"></LeftPage>
            </MenuItem>
            <Submenu name="3">
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
        </Menu>
        <router-view></router-view>
    </div>
</template>


<script>
import IndexHeader from './IndexHeader.vue'
import LeftPage from './LeftPage.vue'
import ToDoList from './ToDoList.vue'
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

    export default {
    components:{
        IndexHeader,
        LeftPage,
        ToDoList
    }
    }
</script>

<style scoped>
.left{
    float: left;
}
</style>