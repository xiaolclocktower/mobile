<template>
    <div class="recommends">
            <div v-for="item in recommends " :key="item.image" class="recomends-item" >
                <a :href="item.divnk">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
            </div>
    </div>
</template>

<script>
export default {
    name:"RecommedView",
    props:{
        /* 使用props把home页面的数据传过来，即使用该组件的页面中
        ，使用了banner属性的数据会传递到这个组建中 */
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style>
.recommends{
    display: flex;
    /* 上下边距样加阴影的样式 */
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eee;
    width:100%;
     text-align: center;
}
.recomends-item{
    /* 均等分推荐信息 */
    flex: 1;
}

.recomends-item img{
    width: 90%;
}
</style>