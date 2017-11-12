<template>
  <div>
    <!-- 轮播图 -->
 <swipes :img="list"></swipes>

<!-- 九宫格 -->
 <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/new/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/img/imglist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <router-link to="/buy/buylist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div>
                   </router-link>
                   </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li> -->
		        </ul>
  </div>
</template>

<script>
import  swipe from '../sub/sublunbo.vue'
export default {
  data() {
    return {
      list: []
    }
  },
    components:{
    swipes:swipe  /* 简写 ES6  swipe */
  },
  created() {
    this.getimg();
  },
  methods: {
    getimg: function() {
      var url = "http://vue.studyit.io/api/getlunbo";
      this.$http.get(url).then(function(res) {
        this.list = res.body.message;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 轮播图样式 */
.mint-swipe,
.mint-swipe-items-wrap {
  width: 100%;
  height: 180px;
}
.mint-swipe,
.mint-swipe-items-wrap img {
  width: 100%;
  height: 180px;
}
/* 九宫格样式 */
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 0;
  border-bottom: 0;
}
/* 字体图标换成图片(伪元素) */
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before,
.mui-icon-gear:before,
.mui-icon-info:before,
.mui-icon-more:before {
  content: "";
  width: 40px;
  height: 40px;
  /* background-color: #f40; */
  display: inline-block;
}
.mui-icon-home:before {
  background-image: url("../../statics/img/1.png");
  background-repeat: round;
}
.mui-icon-email:before {
  background: url("../../statics/img/1.png");
  background-repeat: round;
}
.mui-icon-chatbubble:before {
  background: url("../../statics/img/2.png");
  background-repeat: round;
}
.mui-icon-location:before {
  background: url("../../statics/img/3.png");
  background-repeat: round;
}
.mui-icon-search:before {
  background: url("../../statics/img/4.png");
  background-repeat: round;
}
.mui-icon-phone:before {
  background: url("../../statics/img/2.png");
  background-repeat: round;
}
</style>
