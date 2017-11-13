<template>
<div>
       <mt-header title="商品购买详情页" id="return">
         <router-link :to="'/buy/buylist/buyinfo/'+id" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
   <h4>{{list.title}}</h4>
 <div v-html="list.content"></div>
 </div>
</template>
<script>
import common from "../common";
export default {
  data: function() {
    return {
      id: this.$route.params.id,
      list: {}
    };
  },
  created: function() {
    this.required();
  },
  methods: {
    required: function() {
      var url = common.testapi + "/api/goods/getdesc/" + this.id;
      this.$http.get(url).then(function(res) {
        console.log(res);
        this.list = res.body.message[0];
      });
    }
  }
};
</script>
<style scoped>

</style>
