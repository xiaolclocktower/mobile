<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeFont"><slot name="item-text"></slot></div>  
  </div>
</template>

<script>
export default {
      name:'TabBarItem',
      props:{
        /* 传递数据，方便获取点击的按钮是哪个，并限制类型为字符串 */
        path:String,
        activeColor:{
          tyep:String,
          /* 不传该值，默认字体为粉色 */
          default:'rgb(251, 96, 122)'
        }
      },
     computed:{
        /* 控制插槽中元素是否处于活跃状态 */
          isActive(){
            /* this.$route.path表示当前活跃路由的地址，
            我们用他和标签获取的path进行比对，使用indexof进行比对
            包含对应path值就不等于-1，此时对应tab-bar-item的isActive为true */
            return this.$route.path.indexOf(this.path) !== -1
          },
          /* 获取App.vue标签指定的字体颜色,活跃时赋予颜色样式 ,要加this*/
          activeFont(){
            return this.isActive ? {color:this.activeColor}:{}
          }
       
      },
      methods:{
        itemClick(){
          /* 监听按钮跳转路由,通过props获得的link */
          this.$router.replace(this.path)
        }
      }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;

}
.tab-bar-item img{
    width:24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;

}

</style>