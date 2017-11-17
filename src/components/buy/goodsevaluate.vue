<template>
<div>
   <!-- <mt-header title="商品评价详情页" id="return">
         <router-link :to="'/buy/buylist/buyinfo/'+id" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header> -->
    <div class="content">
        <evaluate :id="id"></evaluate>
    </div>
   
  
</div>
</template>
<script>
import evaluate from "../sub/sublist";
export default {
  components: {
    evaluate
  },
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
<style scoped>
.content{
  padding: 5px;
}
</style>
