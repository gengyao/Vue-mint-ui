<template>
<div>
  <!-- <mt-header title="商品购买详情页" id="return">
         <router-link to="/buy/buylist" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header> -->
    <div class="top">
   <swipes :img="list"></swipes>
    </div>
    <div class="middle">
        <h4>{{goodsinfo.title}}</h4>
        <hr>
        <p> 
            <span> 市场价: <s>￥{{goodsinfo. market_price}}</s></span>
            <span class="sellPrice">销售价:<i>￥{{goodsinfo.sell_price}}</i></span>
        </p>
        <p class="animate">
          <transition  @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
              <span class="ball" v-if="show"></span>
          </transition>
         
         <span class="order">购买数量:</span> 
         <amount @send="getNumber"></amount>
        </p>
        <p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" @click="addShopCar()" size="small">加入购物车</mt-button>
        </p>  

    </div>
    <div class="bottom">
      <h4>商品参数</h4>
      <hr>
      <p>商品货号:{{goodsinfo.goods_no}}</p>
      <p>货存数量:{{goodsinfo.stock_quantity}}</p>
      <p>上架时间: {{goodsinfo.add_time |getTime}}</p>
    </div>
    <div class="footer">
      <router-link :to="'/buy/buyinfo/photosinfo/'+goodsinfo.id">
        <mt-button type="primary" size="large" plain>图文详情</mt-button>
        </router-link>

         <router-link :to="'/buy/buyinfo/goodsevaluate/'+goodsinfo.id">
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </router-link>
    </div>

</div>
</template>
<script>
import swipes from "../sub/sublunbo";
import amount from "../buy/buyamount";
import common from "../common";
import { vm, send } from "../sub/vm";
import { key, setItem } from "../sub/localStorage";
export default {
  components: {
    swipes,
    amount
  },
  data: function() {
    return {
      id: this.$route.params.id,
      list: {},
      goodsinfo: {},
      number: 1,
      show:false
    };
  },
  created: function() {
    this.getlunboimg();
    this.getgoodsinfo();
    // this.getNumber()
  },
  methods: {
  
    getNumber(count) {
      // console.log(count)
      this.number = count;
    },
    getlunboimg() {
      var url = common.testapi + "/api/getthumimages/" + this.id;
      this.$http.get(url).then(function(res) {
        this.list = res.body.message;
      });
    },
    getgoodsinfo() {
      var url = common.testapi + "/api/goods/getinfo/" + this.id;
      this.$http.get(url).then(function(res) {
        this.goodsinfo = res.body.message[0];
        // console.log(res.body.message);
      });
    },
    addShopCar: function() {
      vm.$emit(send, this.number);
      // console.log(this.number)
      /* 往 locstorage里添加数据 格式为 {goodsid:商品id,count:商品数量} */
      var val = {};
      val.goodsid= this.id;
      val.count = this.number;
      
      setItem(val);

      this.show=!this.show;
    },

   beforeEnter:function(el){
     el.style.transform="translate(0,0)"
     el.innerText=this.number
  },
  enter:function(el,done){
    el.offsetWidth; /* ???? */
  //  console.log( el.offsetWidth)
    el.style.transform="translate(70px,360px)"
    done()
  },
  afterEnter:function(){
    this.show=!this.show

  },
  }
};
</script>
<style scoped>
.top,
.middle,
.bottom,
.footer {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
  margin: 3px;
  padding: 5px;
}

.middle {
  height: 192px;
}
hr {
  margin: 10px 3px;
}
.middle h4 {
  color: red;
}
.middle .sellPrice {
  padding: 30px;
  /* color:red; */
}
.middle .sellPrice i {
  color: red;
  font-style: normal;
}
.middle div {
  display: inline-block;
  margin-left: 5px;
}
.bottom {
  height: 134px;
}
.bottom p {
  margin-bottom: 5px;
}
.footer {
  height: 140px;
  padding: 5px;
  padding-top: 15px;
}
.mint-button--danger.is-plain {
  margin-top: 20px;
}
.order {
  padding-right: 3px;
}
/* 实现小球动画 */
/* 先再页面展示出小球静态样式,再用vue的钩子函数,实现动画效果(一半 的动画.从无到有) */
/* 步骤,定位使小球显示在购物数量附近,采用v-if控制小球元素的出现与隐藏,(点击加入购物时让show显示true,动画结束时变为false,进入enter方法里,动画结束时要调用done()方法,vue提供的过渡实现小球动画(给要实现动画的标签添加transtion标签,并在transtion标签里注册进入前,进入,进入后的动画事件) */
.middle .animate {
  position: relative;
}
.middle .animate .ball {
  width: 15px;
  height: 15px;
  background-color: red;
  position: absolute;
  left: 125px;
  top: 5px;
  border-radius: 50%;
  transition: all 2s ease;
  z-index: 100;
  color: white;
  line-height: 15px;
  text-align: center;
}
</style>