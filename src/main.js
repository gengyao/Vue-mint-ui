// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource';
import mintui from "mint-ui"
import 'mint-ui/lib/style.min.css'
import './statics/mui/dist/css/mui.css'
// import monent from "../node_modules/monent"

// Vue.config.productionTip = false
Vue.use(mintui)
Vue.use(vueResource)
// Vue.use(monent)
//引入自己添加的

import router from './router'
import "./statics/css/index.css"

// 自定义路由器
Vue.filter("getTime",function(config,type){
	var config=new Date(config);
	var year=config.getFullYear();
	var month=config.getMonth();
	var day=config.getDate();
	var str=year+"-"+month+"-"+day;
		var H=config.getHours();
		var M=config.getMinutes()
		var S=config.getSeconds();
		str=str+" "+H+":"+M+":"+S
		return str;

})
// Vue.filter("getdate",function(input,params){
//   var data=new Date(input)
//   var year = data.getFullYear();
//   var month = data.getFullMonth();
//   var day = data.getFullDate()
//   var str = year+"_"

// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



