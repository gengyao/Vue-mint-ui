
<template>
<div>
    <span @click="decrease">-</span>
    <input  v-model="count"></input>
    <span @click="increase">+</span>
</div>
</template>
<script>
/* 购物车页面与购物数量组件:
 1 父给子传值,把buyinfo页面点击加入购物车的商品id与商品数量传到子组件
  1.1 通过请求获取的数据res.body.meaasge中有 商品id,商品数量从内存中获取后绑定在res.body.meaasge的cou属性上
 2 子给父传值:添加数据还是删除数据 
    2.1常见
 3 在购物车页面手动点击增减后,页面数量增加,同时也要在localStorage中存储
 */
export default {
  props: ["initcount", "goodsid"],

  data: function() {
    return {
      count: 1,
      status: {}
    };
  },
  created: function() {
    this.count = this.initcount;
  },
  methods: {
    decrease: function() {
      this.count--;
      if (this.count == 0) {
        this.count = 1;
      }
      this.sendmessage("decrease");
    },
    increase: function() {
        
      this.count++;
       
      this.sendmessage("increase");
      // alert(1)
    
    },
    sendmessage: function(type) {
      this.status.type = type;
      this.status.id = this.goodsid;
      this.$emit("send", this.status);
    //   console.log(this.status)
    }
  }
};

</script>
<style scoped>
span,
input {
  border: 1px solid black;
  display: inline-block;
  width: 20px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  font-size: 14px;
}
input {
  width: 20px;
  outline: none;
  border: 1px solid black;
}
</style>