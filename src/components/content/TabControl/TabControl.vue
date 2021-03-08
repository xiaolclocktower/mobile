<template>
    <div class="tab-control">
        <!-- 点击的话就把index赋值给标志值currentIndex，以便active类为true -->
        <div v-for="(item,index) in titles" :key="index"
         class="tab-control-item" :class="{active:index === currentIndex}"
         @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        /* 获取titles数据，类型是数组 */
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            /* 活跃状态的标志值，默认为第一个先 */
            currentIndex: 0
        }
    },
   methods:{
       itemClick(index){
           this.currentIndex = index;
       }
   }
}
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        background: white;
    }
    .tab-control-item{
        flex: 1;
    }
    .active{
        color:var(--color-high-text) ;

    }
    .active span{
        padding:6px ;
        border-bottom:3px solid var(--color-tint);
    }
</style>