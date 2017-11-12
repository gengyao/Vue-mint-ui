import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
import home from '@/components/home/home.vue';
import member from '@/components/member/member.vue';
import setting from '@/components/setting/setting.vue';
import shopCar from '@/components/shopCar/shopCar.vue';
import newList from "@/components/new/newlist.vue";
import newinfo from "@/components/new/newinfo.vue";
import imglist from "@/components/img/imglist.vue";
import imginfo from "@/components/img/imginfo.vue";
import buylist from '@/components/buy/buylist.vue';
import buyinfo from '@/components/buy/buyinfo.vue'


Vue.use(Router)
// 注意写路由地址时不加 点

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/member",
      component: member
    },
    {
      path: "/shopCar",
      component: shopCar
    },
    {
      path: "/setting",
      component: setting
    },
    {
      path: "/new/newlist",
      component: newList
    }, {
      path: "/new/newinfo/:test",
      component: newinfo
    },
    {
      path:"/img/imglist",
      component:imglist
    },
    {
      path:"/img/imglist/imginfo/:test1",
      component:imginfo
    },
    {
      path:"/buy/buylist",
      component:buylist
    },
    {
      path:"/buy/buylist/buyinfo/:id",
      component:buyinfo
    }
  ]
})
