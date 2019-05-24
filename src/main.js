// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from '../router/index.js'
import axios from "axios"
import axio from './axio'
import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/dist/css/mui.css'
import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";
/*import "vue-awesome-mui/mui/js/mui.js";*/
  import 'url-search-params-polyfill';
  import "babel-polyfill";
Vue.use(Mui)
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.baseUrl = "http://apptest.cq-p.com.cn:1014" ;
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    axio,
  components: { App },
  template: '<App/>'
})
