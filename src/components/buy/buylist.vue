<template>
  <div>
    <!-- <mt-header title="商品购买" id="return">
         <router-link to="/home" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header> -->
     <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,index) in list" :key ="index">
		           <router-link :to="'/buy/buylist/buyinfo/'+item.id">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">{{item.title}}</div>
                         <div class="textinfo">
                            <div class="price">
                                <span><s>￥{{item.sell_price}}</s>
                                </span>
                                <i>￥{{item.market_price}}</i>
                            </div>
                            <div>
                                <span>热卖中</span>
                                <span class="right">剩余：{{item.stock_quantity}}</span>
                            </div>
                        </div>
		           </router-link>
                </li>
                  <mt-button plain size="large" @click="more">更多</mt-button>
		    </ul>
  </div>
</template>
<script>
/* 点击加载更多时,判断如果是第一页就显示当前页,点击加载更多时,后面的数据拼接在之前的数据中(concat()) */
import common from "../common";
export default {
  data: function() {
    return {
      list: {},
      page: 1
    };
  },
  created: function() {
       this.getPhotosInfo(this.page);
  },
  methods: {
    more: function() {
      this.page++;
      this.getPhotosInfo(this.page);
    },
    getPhotosInfo: function(page) {
      var page= page || 1;
      var url = common.testapi + "/api/getgoods?pageindex=" + page;
      this.$http.get(url).then(function(res) {
        if (page == 1) {
          this.list = res.body.message;
        } else {
          this.list =this.list.concat(res.body.message) ;
        }
        // console.log(res.body.message);
      });
    }
  }
};
</script>
<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell {
  box-shadow: 0 0 4px #3c3c3c;
  /* margin:4px 0 0 0 ; */
  width: 48%;
  margin: 1%;
}
.mui-table-view.mui-grid-view .mui-table-view-cell a {
  margin-left: 4px;

  /* margin-left: 4px; */
}
.mui-table-view.mui-grid-view {
  padding: 0;
}
img {
  border: 0;
}
/* textinfo样式 */
.mui-table-view-cell .mui-media {
  padding: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
  padding: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
  text-align:left;
}
.mui-table-view.mui-grid-view .mui-table-view-cell a {
  margin-left: 0;
}
.textinfo {
  padding-top: 5px;
  padding-bottom: 3px;
  margin-top: 10px;
  font-size: 14px;
  background-color: #eee;
  height: 50px;
  position: relative;
}
.textinfo span {
  line-height: 24px;
}

.textinfo .right {
  position: absolute;
  /* bottom: 0; */
  right: 5px;
}
s{
  padding-left: 3px;
  color: red;
}
i{
  font-style: normal;
  margin-left: 15px;  
}
</style>

