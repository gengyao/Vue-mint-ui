<template>
    <div>
      
      <!-- <mt-header title="图片分享详情" id="return">
         <router-link to="/img/imglist" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header> -->
        <h3>{{text.title}}</h3>
        <p>{{text.add_time |getTime}}</p>
        <i></i>
        <div class="new">
            <div class="newImg">
                 <img class="preview-img" v-for="(item, index) in imglist"  :key="index" :src="item.src" height="100" @click="$preview.open(index, imglist)">
               

                <!-- <a href="javascript:;" v-for="(item,index) in imglist" :key="index">
                    <img :src="item.src" >

                </a> -->
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
import VuePreview from "vue-preview";

// alert(1)
export default {
  components: {
    subl: sub
  },
  data: function() {
    return {
      id: "",
      imglist: [
        {
          src: "https://placekitten.com/600/400",
          w: 600,
          h: 400
        },
        {
          src: "https://placekitten.com/1200/900",
          w: 1200,
          h: 900
        }
      ],
      text: {}
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
        // console.log(res.body.message);
      });
    },
    getSmallImg: function() {
      var url = common.testapi + "/api/getthumimages/" + this.id;
      this.$http.get(url).then(function(res) {
        this.imglist = res.body.message;
        var img = res.body.message;
        for (var i = 0; i < img.length; i++) {
          img[i].w = 600;
          img[i].h = 400;
         
        }
         this.imglist= img
      });
    }
  }
};
</script>
<style scoped>
h3 {
  line-height: 2;
  font-size: 18px;
  color: red;
}
p {
  margin-bottom: 0;
}
i {
  display: inline-block;
  width: 100%;
  border: 1px solid #ccc;
}

.new .newImg img {
  width: 30%;
  margin-left: 8px;
  margin-top: 10px;
}
</style>

