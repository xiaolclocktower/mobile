<template>
<div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 请求来的数据中，图片和链接在banner.list中 -->
    <home-swiper :banners = "banners.list"></home-swiper>
</div>  
</template>

<script>
/* 引用导航栏组件 */
import NavBar from 'components/common/navbar/NavBar.vue'
/* 导入轮播图插件 */
import HomeSwiper from './childComps/HomeSwiper'
/* 引用主页网络请求文件 */
import {getHomeMultidata} from 'network/home'
export default {
    name:"Home",
    components:{
        /* 注册导航栏组件 */
        NavBar,
        /* 注册轮播图组件 */
        HomeSwiper
    },
    data(){
        /* 把请求来的数据暂存到data里，否则生命周期函数created结束后请求的数据就消失了 */
        return{
            /* 请求来的数据有很多项，不同项用不同数组存储 */
            banners:[],
            recommends:[]
          
        }
    },
    /* 使用生命周期函数，当组件创建完后马上发送请求，请求数据 */
    created(){
        /* 请求服务器上的多个数据 */
        getHomeMultidata().then(res =>{
            /* 存放请求来的数据到本身的data中 */
            this.banners = res.data.banner;
            this.recommends = res.data.recommend;
           
        } )
    }
}
</script>

<style>
    .home-nav{
        color:white;
        /* 引入normalize标准样式 */
        background-color: var(--color-tint);
    }
</style>