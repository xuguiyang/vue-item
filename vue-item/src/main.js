//引入资源
import Vue from "vue";

//注册全局过滤器  S

import Moment from 'moment';
Vue.filter('convertTime',(value)=>{
    return Moment(value).format('YYYY-MM-DD')
});

//处理title太长的问题
Vue.filter('convertTitle',(value,limit)=>{
    if(!value)return ;
    if(value.length>limit){
        return value.substr(0, limit)+'...'
    }
    return value;
});
//注册全局过滤器  E
//全局组件  S
import MyLi from './components/Commons/MyLi.vue'
import MyUl from './components/Commons/MyUl.vue'
import NavBar from './components/Commons/NavBar.vue';
Vue.component(NavBar.name,NavBar);
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);

//全局组件  E


//路由组件  S
import App from './components/App.vue'
import Home from './components/Home/Home.vue'
import Member from './components/Member/Member.vue'
import Shopcart from './components/Shopcart/Shopcart.vue'
import Search from './components/Search/Search.vue'
import NewsList from './components/News/NewsList.vue'
import NewsDetail from './components/News/NewsDetail.vue'
import PhotoList from './components/Photo/PhotoList.vue'

//路由组件  E

// VueRouter S
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    //
    // 重定项
    {path :'/',redirect:{
        name :'home'
    }},
    // 首页
    {name:'home',path :'/home',component:Home},
     {name:'member',path:'/member',component:Member},//会员
    {name:'shopcart',path:'/shopcart',component:Shopcart},//购物车
    {name:'search',path:'/search',component:Search},//查找
    {name:'news.list',path:'/news/list',component:NewsList},//新闻列表
    {name:'news.detail',path:'/news/detail',component:NewsDetail},//新闻详情
    {name:'photo.list',path:'/photo/list/:categoryId',component:PhotoList},//新闻详情
    ]);

// VueRouter E
//
//MintUi S

import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//MintUi E


// 虑未来可能有样式的覆盖，在之后再引入自己的css
import './static/css/global.css';

// Axios S
import Axios from 'axios';
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL='http://vue.studyit.io/api/';

// Axios E
//
  new Vue({
    el:"#app",
    render:c=>c(App),
    router
  })
