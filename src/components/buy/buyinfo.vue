<template>
<div>
    <div class="top">
   <swipes :img="list"></swipes>
    </div>
    <div class="middle">
        <h4>华为荣耀</h4>
        <p> 
            <span>市场价</span>
            <span></span>

        </p>

    </div>
    <div class="bottom">

    </div>
    <div class="footer">

    </div>

</div>
</template>
<script>
import swipes from "../sub/sublunbo";
import common from "../common";
export default {
  components: {
    swipes
  },
  data: function() {
    return {
      id: this.$route.params.id,
      list: {}
    };
  },
  created: function() {
    this.getlunboimg();
  },
  methods: {
    getlunboimg() {
      var url = common.testapi + "/api/getthumimages/" + this.id;
      this.$http.get(url).then(function(res) {
        console.log(res);
        this.list = res.body.message;
      });
    }
  }
};
</script>
<style scoped>
.top,.middle,.bottom,.footer{
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
  margin: 3px;
}
.top {
  margin-top: 45px;
}
.middle {
  height: 192px;
}
.bottom{
    height: 134px;
}
.footer{
    height: 140px;
}
</style>