<template>
    <swiper>
        <!-- 自动遍历数据中的banners中的数据 -->
        <!-- 因为Vue中的组件时高度复用的，使用v-for时，不加key，就难以识别组件是哪一个，
        并且vue会报错，这里随便使用一个东西做轮播图的key就行 -->
        <swiper-item v-for="item in banners" :key='item.image'>
            <!-- 所有需要读取的数据必须使用属性绑定才能实现变量数据的读取 -->
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:"HomeSwiper",
    props:{
        /* 使用props把home页面的数据传过来，即使用该组件的页面中
        ，使用了banner属性的数据会传递到这个组建中 */
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>