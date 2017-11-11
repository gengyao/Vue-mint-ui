<template>
    <div>
        <h3>{{text.title}}</h3>
        <p>{{text.add_time |getTime}}</p>
        <i></i>
        <div class="new">
            <div class="newImg">
                <a href="javascript:;" v-for="(item,index) in imglist" :key="index">
                    <img :src="item.src" >

                </a>
            </div>
           
        </div>
         <i></i>
        <p>{{text.content}}</p>
        <subl :id="id"></subl>
    </div>
</template>
<script>
import common from "../common";
import sub from "../sub/sublist";
// alert(1)
export default {
  components:{
      subl:sub
  },
  data: function() {
    return {
      id: "",
      imglist: {},
      text: {},
    };
  },
  created: function() {
    this.id = this.$route.params.test1;
    this.getSmallImg();
    this.getText();
  },
  methods: {
    getText: function() {
      var url = common.testapi + "/api/getimageInfo/" + this.id;
      this.$http.get(url).then(function(res) {
        this.text = res.body.message[0];
        console.log(res.body.message);
      });
    },
    getSmallImg: function() {
      var url = common.testapi + "/api/getthumimages/" + this.id;
      this.$http.get(url).then(function(res) {
        this.imglist = res.body.message;
        console.log(res.body.message);
      });
    }
  }
};
</script>
<style scoped>
h3{
    line-height: 2;
    font-size: 18px;
    color:red;
}
p{
    margin-bottom:0;
}
i {
  display: inline-block;
  width:100%;
  border: 1px solid #ccc;
}

.new .newImg img {
  width: 30%;
  margin-left: 18px;
  margin-top: 18px;
}
</style>

