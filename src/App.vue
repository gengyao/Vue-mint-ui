<template>
  <div id="app">
    <!-- 1 头部 mint-ui -->
   <header class="mint-header is-fixed">
             <div class="mint-header-button is-left"></div>
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
                     <span class="mui-badge">6</span>
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
export default {
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 40px;
  margin-bottom: 50px;
}
</style>
