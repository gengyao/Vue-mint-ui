<template>
  <div id="app">
   <!-- <mt-header title="图片分享详情" id="return">
          <router-link to="/home" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header> -->

    <div class="top">
      <ul>
        <li  v-for="(item,index) in list" :key="index" >
          <mt-switch v-model="value[index]"></mt-switch>
            <span> <img :src="item.thumb_path" alt=""></span>
            <div class="right">
              <h5>{{item.title}}</h5>
              <p>
                <span>￥{{item.sell_price}}</span>
              <calculate class="cal" :initcount="item.cou" :goodsid="item.id" v-on:send="calNumber"></calculate>
                <span  @click="deletedata(item.id,index)">删除</span>
              </p>
            </div>
          <hr>
        </li>
      </ul>
    </div>
    <div class="middle">
      <div>
        <div class="priceLeft">总计:</div>
        <div>商品总数:{{amount}}件</div>
        <div>商品总价:￥ {{totalPrice}}元</div>
      </div>
      <div class="priceRght">
        <mt-button type="primary" size="small" class="computed">结算</mt-button>
      </div>
    </div>
    {{value}}
  </div>
</template>

<script>
import { Switch } from "mint-ui";
import { getdatalist, updatalist, removeItem } from "../sub/localStorage";
import common from "../common";
import calculate from "../sub/shopcalculate";
export default {
  components: {
    calculate
  },
  data() {
    return {
      value: [] /* value的布尔值绑定的是开关的切换 */,
      list: {}
    };
  },
  created: function() {
    this.getimg();
  },
  methods: {
    /* 1.0 调用localStorage.js里的getdatalist()函数将商品重复合并 */
    getimg: function() {
      var obj = getdatalist(); /* obj {商品id:商品数量,商品id:商品数量} */
      // console.log(obj)
      var ids = "";
      for (var k in obj) {
        ids += k + ",";
      }
      ids = ids.substring(0, ids.length - 1);
      // console.log(ids)
      var url = common.testapi + "/api/goods/getshopcarlist/" + ids;
      this.$http.get(url).then(function(res) {
        this.list = res.body.message;
        console.log(res.body.message);

        /* 遍历获取到的数据将localStorage里的count赋值给res.body.message[i]里的cou*/
        res.body.message.forEach(function(item) {
          //item 指的是 res.body.message
          item.cou = obj[item.id]; //内存中商品的id用goodsid表示,此处不能直接用,item.id就是goodsid
        });
      });
    },
    /* 2.0 通过加减改变页面商品的数量*/
    calNumber: function(input) {
      //status={type:"add/minus",id:"goodsid"}

      updatalist(input);
      //1 通过组件传过来的加还是减,对localStorage里的数据进行增删
      for (var i = 0; i < this.list.length; i++) {
        // 2 子组件发过来的进行了加减操作的商品id 和this.list里的id相等时,判断如果对此商品进行了加操作则this.list里的cuo属性加1,如果是减操作则减1;
        if (input.id == this.list[i].id) {
          if (input.type == "increase") {
            this.list[i].cou = this.list[i].cou + 1;
            //  console.log(this.list[i].cou)
          } else {
            this.list[i].cou = this.list[i].cou - 1;
          }
        }
      }
      // console.log(this.list)
      // console.log(getdatalist())
    },
    /* 3.0 点击删除,页面此条数据删除,list里面数据删除,localStorage里的数据删除*/
    deletedata: function(id, index) {
      this.value.splice(index, 1);
      this.list.splice(index, 1);
      removeItem(id);
    }
  },
  /* 4.0商品结束时的条数,总价格 */
  computed: {
    amount: function() {
      var shopAcount = this.value.filter(function(item) {
        // console.log(2,item)
        return item;
      });
      // console.log(shopAcount)
      return shopAcount.length;
    },
    totalPrice: function() {
      var price = 0;
      var count = 0;
      var then = this;
      this.value.forEach(function(item, index) {
        /* 遍历value数组,当值为true时,计算商品的件数与总价 */
        if (item) {
          count = then.list[index].cou;
          console.log(3,count)
          price = price + then.list[index].sell_price * count;
        }
      });
      return price;
    }
  }
};
</script>


<style scoped>
.top {
  border: 1ox solid rgb(247, 244, 244);
}
.mint-switch {
  display: inline-block;
}
img {
  width: 80px;
  margin-top: 10px;
}
.right {
  display: inline-block;
  width: 50%;
}
.cal {
  display: inline-block;
}
.middle {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #eee;
}
.priceLeft {
  width: 200px;
}
.computed {
  margin-top: 30px;
  margin-left: 30px;
}
</style>
