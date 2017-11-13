<template>
<div>
   <mt-header title="新闻资讯" id="return">
         <router-link to="/home" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in list " :key="index">
					<router-link :to="'/new/newinfo/'+item.id" :id="item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">{{item.zhaiyao}}</p>
						</div>
                        <div class="time">
                             <p class="time">时间:{{item.add_time}}
                                   <span class="left">点击率:{{item.click}}</span>
                             </p>
                           
                        </div>
                        <!-- <p class="time">时间:{{item.add_time | datafilter ("YYYY-MM-DD HH:mm:ss")}}</p> -->
					</router-link>
				</li>

			</ul>
</div>

</template>
<script>
export default {
  data: function() {
    return {
      list: []
    };
  },
  created: function() {
    this.getNewList();
  },
  methods: {
    getNewList: function() {
      var url = "http://vue.studyit.io/api/getnewslist";
      this.$http.get(url).then(function(res) {
        this.list = res.data.message;
        //   console.log(this.list)
      });
    }
  }
};
</script>
<style scoped>
.mui-table-view .mui-media-object {
  max-width: 60px;
  height: 60px;
}
.time {
  color: red;
}
.time .left {
  font-size: 14px;
  float: right;
}
</style>

