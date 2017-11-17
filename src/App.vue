<template>
  <div id="app">
    <!-- 1 头部 mint-ui -->
   <header class="mint-header is-fixed">
       <div v-if="isShow">
<div class="mint-header-button is-left" @click="backTo()" >返回</div>
       </div>
             
             <h1 class="mint-header-title">任意购商城</h1>
             <div class="mint-header-button is-right"></div>
         </header>
    <!-- 中间部分 -->
   <router-view></router-view>
    <!-- 底部固定部分hellomui -->
    <nav class="mui-bar mui-bar-tab">
             <router-link class="mui-tab-item" to="/home">
                 <span class="mui-icon mui-icon-home"></span>
                 <span class="mui-tab-label">首页</span>
             </router-link>
             <router-link class="mui-tab-item" to="/member">
                 <span class="mui-icon mui-icon-email"></span>
                 <span class="mui-tab-label">会员</span>
             </router-link>
             <router-link class="mui-tab-item" to="/shopCar">
                 <span class="mui-icon mui-icon-contact">
                     <span class="mui-badge" id="tag">6</span>
                 </span>
                 <span class="mui-tab-label">购物车</span>
             </router-link>
             <router-link class="mui-tab-item" to="/setting">
                 <span class="mui-icon mui-icon-gear"></span>
                 <span class="mui-tab-label">设置</span>
             </router-link>
         </nav>

  </div>
</template>

<script>
import { vm, send } from "./components/sub/vm";
export default {
  data: function() {
    return {
      isShow: false
    };
  },
  created: function() {
    vm.$on(send, function(input) {
      var domElement = document.getElementById("tag");
      /* 获取到的元素内容为字符串,需要类型转换成数值型 */
      domElement.innerText = domElement.innerText - 0 + input;
      // console.log(domElement)
    });
  },
  watch: {
     
    $route: function(newstr,oldstr) {
        // console.log(newstr)
        // console.log(oldstr)
      if (newstr.path.toLowerCase() == "/home") {
        
        //    console.log( this.isShow)
        this.isShow = false;
        //   console.log( this.isShow)
         
      } else {
        this.isShow = true;
      }
    }
  },
  methods: {
    backTo:function() {
        
      //ES6函数的写法
      /* 利用路由对象的go(-1),返回上一级,此方法是vue-router中的 */
      this.$router.go(-1);
    }
  }
};
</script>

<style>

</style>
