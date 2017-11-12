<template>
<div>  
 <mt-swipe :auto="2000">
  <mt-swipe-item v-for="(item,index) in img" :key="index">
    <img  v-if="item.img!=null" :src="item.img"></img>
    <img  v-if="item.src!=null" :src="item.src"></img>
  </mt-swipe-item>
</mt-swipe>
</div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
    props:["img"]

};
</script>
<style scoped>
/* 轮播图样式 */
.mint-swipe,
.mint-swipe-items-wrap {
  width: 100%;
  height:250px;
    padding: 5px;
}
img{
    width:100%;
    height: 100%;
  
    
}
</style>
