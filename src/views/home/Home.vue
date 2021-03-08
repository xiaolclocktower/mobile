<template>
<div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 请求来的数据中，图片和链接在banner.list中 -->
    <home-swiper :banners = "banners.list"></home-swiper>
    <recommed-view :recommends = "recommends.list"></recommed-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</div>  
</template>

<script>
/* 引入时最好把公用组件、子组件、方法区分开，方便维护 */
/* 引用导航栏组件（公用组件） */
import NavBar from 'components/common/navbar/NavBar.vue'
/* 点击活跃组件 */
import TabControl from 'components/content/TabControl/TabControl'

/* 导入轮播图组件（子组件） */
import HomeSwiper from './childComps/HomeSwiper'
/* 插入推荐信息组件（子组件） */
import RecommedView from './childComps/RecommedView'
/* 引用组件（子组件） */
import FeatureView from './childComps/FeatureView'

/* 引用主页网络请求文件（方法） */
import {getHomeMultidata} from 'network/home'


export default {
    name:"Home",
    components:{
        /* 注册导航栏组件 */
        NavBar,
        TabControl,
        /* 注册轮播图组件 */
        HomeSwiper,
        /* 注册推荐信息组件 */
        RecommedView,
        FeatureView
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
#home{
    /* 页面给整体下移就不会被导航栏挡住 */
    padding-top:44px ;
}
    .home-nav{
        color:white;
        /* 引入normalize标准样式 */
        background-color: var(--color-tint);
         /* 固定导航栏位置，不随滑动移动 */
        position:fixed;
        /* 始终在最上显示 */
        z-index: 9;
        right: 0;left: 0;top: 0;
        /* 防止内容开始被导航栏盖住 */
        
    }
    .tab-control{
        /* 给该组件添加滑动到某一位置后会置顶的特效 */
        position: sticky;
        top:45px;
    }
</style>