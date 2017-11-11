<template>
<div >
    <div class="content">
    <h4>{{list.title}}</h4>
   <p>{{list.add_time}}</p>
   <div  v-html="list.content"></div>
  <subcom :id="id"></subcom>
    </div>
   
</div>
</template>
<script>
import common from "../common.js";
import sub from "../sub/sublist.vue";
export default {
  components: {
      subcom:sub /* subcom为组件名 */
  },
  data: function() {
    return {
      id:"",
      list: {}
    };
  },
  created: function() {
      this.id= this.$route.params.test,
    this.getImgIfo();
  },
  methods: {
    getImgIfo: function() {
      var url = common.testapi + "/api/getnew/" + this.id;
      this.$http.get(url).then(function(res) {
        this.list = res.body.message[0];
        // console.log(res.body.message);
      });
    }
  }
};
</script>
<style scoped>
.content {
  padding: 5px;
}
.content h4 {
  color: red;
}

</style>
