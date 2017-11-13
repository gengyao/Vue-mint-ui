<template>
    <div>
        <!-- 提交评论 -->
       <div class="submit">
       <h4>提交评论</h4>
       <p></p>
       <textarea placeholder="请发表评论..."  v-model="content"></textarea>
       <mt-button type="danger" size="large" @click="setcomment" :disabled="content==''">提交</mt-button>
        </div>
            <!--评论列表  -->
        <div class="comentList">
            <h4>评论列表</h4>
            <i></i>
            <div  v-for="(item,index) in list" :key="index">
                    <div class="user">
                    <span>第{{index+1}}楼</span>
                    <span>用户名:{{item.user_name}}</span>
                    <span>时间:{{item.add_time | getTime}}</span>
                    </div>
                    <div class="usercoment">{{item.content}}</div>
            </div>
         </div>
         <!-- 更多部分 -->
         <mt-button plain size="large" @click="more">更多</mt-button>
    </div>
 
</template>
<script>
import { Toast } from "mint-ui";
import common from "../common";
export default {
  props: ["id"],
  data: function() {
    return {
      list: [
        {
          user_name: "匿名用户",
          add_time: "2017-10-30T11:43:27.000Z",
          content: "qwer"
        },
        {
          user_name: "匿名用户",
          add_time: "2017-10-30T11:43:22.000Z",
          content: "123"
        }
      ],
      content:"",
      pagevalue: 1
    };
  },
  created: function() {
    // this.getcomment();
  },
  methods: {
    //   加载更多数据
    more: function() {
      this.pagevalue++;
      this.getcomment(this.pagevalue)
    },
    //添加数据
    setcomment: function() {
    //   console.log(this.content);
      if (this.content.trim().length <= 0) {
        Toast("请输入评论内容");
        return;
      }
      var url = common.testapi + "/api/postcomment/" + this.id;
      this.$http
        .post(url, { content: this.content }, { emulateJSON: true })
        .then(function(res) {
          Toast(res.body.message);
          this.getcomment();
        });
    },
    //   获取数据
    getcomment: function(page) {
        var page = page||1;
      var url = common.testapi + "/api/getcomments/" + this.id + "?pageindex="+page;
      this.$http.get(url).then(function(res) {
        if(page==1){  /*当第一页时显示的数据  */
          this.list=res.body.message
        }
        else{
          // console.log(res.body);
        this.list = this.list.concat(res.body.message);
        }
       
      });
    }
  }
};
</script>

<style scoped>
/* 提交pinglun */
.submit h4 {
  color: red;
}
.submit p {
  display: inline-block;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}
.mint-button:after {
  background-color: red;
}
/* 评论列表 */
.comentList h4 {
  color: red;
}
.comentList i {
  display: inline-block;
  height: 1px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}
.user,
.usercoment {
  width: 100%;
  height: 50px;
}
.user {
  background-color: #eee;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
div {
  padding:0;
}
</style>

