<template>
<div>
    <!-- 标题部分 -->
    <div class="imgBox">
        <div class="sortBox">
                <ul   :style="{width:sortWidth+'px'}" >
                    <li class="total" @click="getdata(0)" >全部</li>
                    <li v-for="(item,index) in sort" :key="index"  @click="getdata(item.id)">{{ item.title}}</li>
                
                </ul>
            </div>
            <!-- 图片部分(懒加载  为img元素添加v-lazy指令指令的值为图片的地址。 )-->
            <div class="sortImg">
                <ul>
                    <li v-for="(item,index) in imgCategory" :key="index">
                      <router-link :to="'/img/imglist/imginfo/'+item.id" >
                       <img v-lazy="item.img_url" /> 
                     
                    <div class="text">
                        <h4 v-text="item.title"></h4>
                        <p v-text="item.zhaiyao"></p>
                    </div>
                     </router-link>
                
                    </li>
                </ul>
            </div>
            </div>
        

        </div>
</template>
<script>
import common from "../common"; /* 应用全局api时应该 common.testapi */
import { Lazyload } from "mint-ui";
export default {
  data: function() {
    return {
      sort: {},
      imgCategory: {},
      sortWidth: 0
    };
  },
  created: function() {
    this.getSort();
    var id = 0;
    this.getdata(id);
  },
  methods: {
    getSort: function() {
      var url = common.testapi + "/api/getimgcategory";
      this.$http.get(url).then(function(res) {
        this.sort = res.body.message;
        console.log(res.body.message);
        this.sortWidth = (res.body.message.length + 1) * 80;
      });
    },
    getdata: function(id) {
      var url = common.testapi + "/api/getimages/" + id;
      this.$http.get(url).then(function(res) {
        this.imgCategory = res.body.message;
        console.log(res.body.message);
      });
    }
  }
};
</script>

<style scoped>
/* 分类标题 */
.sortBox {
  width: 320px;
  overflow-x: auto;
}

.sortBox .total {
  width: 78px;
}
.sortBox ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
}
.sortBox li {
  float: left;
  padding: 0 5px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
/* 图片部分 */


.sortImg img {
   width: 100%;

}

.sortImg ul {
  list-style: none;
  padding-left: 0;
  margin:0 0
}
.sortImg li {
  width: 100%;
  height: 320px;
  list-style: none;
  position: relative;
}
.text{
    position: absolute;
   bottom: 0px;
    left: 5px;
    /* width: 100%; */
    height: 100px;
    font-size: 14px;
    overflow: hidden;
    background-color:rgba(0, 0, 0, 0.3);
    
}
.text h4{
    font-size:16px;
    color:#fff;
}
.text p{
  color:#fff;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
