<template>
  <div class="hello">
      <header id="header" class="mui-bar mui-bar-nav"  style="background: #2196f3;color: #fff">
         <!--    <router-link to="/home" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link> -->
         <h1 class="mui-title" style="color: #fff">商品查询</h1>
      </header>

       <div style="padding: 0 10px;margin-top: 48px;">
        <div class="mui-content">
          <div class="mui-content-padded" style="margin: 0px;position: fixed;width: 95%;z-index: 9999"">
          
              <div class="mui-input-row" style="position: relative;">
             <!--    <label>商品编号</label> -->
                <input type="text" placeholder="请输入商品名称或编码" v-model='name'>
                  <span  style="position: absolute;right:4px;top: 8%;color: #2196f3;font-size: 24px" @click='submit' >
                      <i class="fa fa-search" ></i>
                  </span>
              </div>
        
          </div>
        </div>
    </div>
  <div v-show='yidong' style="height: 76vh">
           <scroller :on-refresh="refresh"
                :on-infinite="infinite"               
                 ref="my_scroller" 
                 v-if="List.length"            
                 style="margin-top:88px;"
                  >
          <div style="margin-top: 0px; margin-bottom: 40px" class="content">
             <div class="demo-text" v-for='item,index in List' :key='item.index'>
                  <div class="itemdetail" >
                      <p  style="color: #333;font-size: 17px;padding-top: 6px">{{item.pm}}</p>
                      <p  style="border-bottom: 1px solid #eee;color: #333;font-size: 16px;color: rgb(33, 150, 243)">商品编码：{{item.spbm}}</p>
                       <div class="contentdetail">
                          <p><span>SKU</span><span>{{item.spsxh}}</span></p>
                         <p><span>规格</span><span>{{item.gg}}</span></p>
                          <p><span>计量单位</span><span>{{item.hsjldw}}</span></p>
                          <p><span>剂型</span><span>{{item.jx}}</span></p>
                      </div>                                    
                        <div class="contentdetail  morepc"  style="display: none;">
                           <p><span>客户代码</span><span>{{item.khdm}}</span></p>
                           <p ><span>厂牌</span><span>{{item.cp}}</span></p>
                             <p ><span>厂牌全称</span><span>{{item.cpqc}}</span></p>
                           <p><span>批准文号</span><span>{{item.pzwh}}</span></p>                      
                        </div>
                    <div @click='more(index)'>      
                     <p style="border-top: 1px solid #eee;text-align: right;margin: 0;padding: 6px 0">
                       <span style="color: rgb(33, 150, 243);text-decoration: underline;" class ='qqpc'>展开更多</span>                 
                     </p>
                   </div>  
                  </div>                           
                </div>
            </div>
      </scroller>
       <Gotop v-bind:btn='top'></Gotop>
     </div>
     <div style="margin-top:98px;" class="content"  v-show='pc'>
             <div class="demo-text" v-for='item,index in List' :key='item.index'>
                  <div class="itemdetail" >
                      <p  style="color: #333;font-size: 17px;padding-top: 6px">{{item.pm}}</p>
                      <p  style="border-bottom: 1px solid #eee;color: #333;font-size: 16px;color: rgb(33, 150, 243)">商品编码：{{item.spbm}}</p>
                      <div class="contentdetail">
                          <p><span>SKU</span><span>{{item.spsxh}}</span></p>
                         <p><span>规格</span><span>{{item.gg}}</span></p>
                          <p><span>计量单位</span><span>{{item.hsjldw}}</span></p>
                          <p><span>剂型</span><span>{{item.jx}}</span></p>
                      </div>                                    
                        <div class="contentdetail more"  style="display: none;">
                           <p><span>客户代码</span><span>{{item.khdm}}</span></p>
                           <p ><span>厂牌</span><span>{{item.cp}}</span></p>
                             <p ><span>厂牌全称</span><span>{{item.cpqc}}</span></p>
                           <p><span>批准文号</span><span>{{item.pzwh}}</span></p>                      
                        </div>
                    <div @click='more(index)'>      
                      <p style="border-top: 1px solid #eee;text-align: right;margin: 0;padding: 6px 0">
                       <span style="color: rgb(33, 150, 243);text-decoration: underline;" class ='qq'>展开更多</span>
                     <!--   <span  style="font-size: 16px;color: #999>"><i class="fa fa-angle-down " style="margin-top: 6px;" ></i><i class="fa fa-angle-up" style="margin-top: 6px;" ></i></span>  -->                  
                     </p>
                   </div>  
                  </div>                           
                </div>
            </div>
            <Gotop ></Gotop>
</div>

</template>

<script>
import Gotop from './base/Gotop'
export default {
  name: 'home',
  components: {
    Gotop,
  },
  data () {
    return {
      name:'',
      page:1,
      pc:false,
      List:[],
      hasNext:false,
      enable:true,
      yidong:true,
      top:false     
    }
  },
  created(){
  this.isIE();
  this.hidetop();
  },
  mounted(){

 /*$('.fa-angle-up').hide();*/
  },
  methods:{
  hidetop(){
      $('.top').hide();    
    },
     gotop(){
        $('._v-content').css('transform','translate3d(0px, 0px, 0px) scale(1)');
        
    },
     isIE() {        //判断ie
      if (!!window.ActiveXObject || "ActiveXObject" in window) {
     window.addEventListener('scroll', this.onScroll);
        this.pc=true;
         this.yidong=false;
        return true;
      } else {
        this.yidong=true;
        this.pc=false;
        return false;

      }},

    onScroll() {          //ie滚动
       /*  console.log(this.scollY )*/
         this.scollY = this.getScrollTop() + this.getWindowHeight() - this.getScrollHeight();
           console.log(this.enable)
          if(this.enable){
              this.enable=false;
              if(this.scollY>-10){
                console.log('eee');
                this.page=this.page+1;
                this.getlist();
              }else{
                this.enable=true;
              }
            }
            return;
    },
     getScrollTop: function () {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    },
    //浏览器视口的高度
    getScrollHeight: function () {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    },
    //浏览器视口的高度
    getWindowHeight: function () {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    },
      more(index){
         if (!!window.ActiveXObject || "ActiveXObject" in window) {
               $($('.more')[index]).slideToggle(function(){
                $($('.qq')[index]).html('展开更多');
                if($('.more').is(":visible")){
                  $($('.qq')[index]).html('收起');

                }
            });

          } else {
            $($('.morepc')[index]).slideToggle(function(){
                $($('.qqpc')[index]).html('展开更多');
                if($('.morepc').is(":visible")){
                  $($('.qqpc')[index]).html('收起');
 
                }
            });

          }     
    
    },
    submit(){
      this.page=1;
      this.List=[];
      let _this=this;
      setTimeout(function(){
       _this.getlist();
       },500)
      },

      getlist(callback){
         let url='http://apptest.cq-p.com.cn:1014/SOA/ERP/GetGoodsInfo';
      let _this=this;
      _this.$http.get(url,{params: {
                        pageNum: this.page,
                        pageSize: '10',
                        spbm: this.name,                    
                       }})
      .then( (response) => {
        callback&&callback();
        let res=JSON.parse(response.data).rows;
        console.log(JSON.parse(response.data)); 
        if(res){
          if(res.length<10){             //无下一页
            _this.hasNext=false;
          }else{
              _this.hasNext=true;           //有下一页 
          }
          if(_this.page==1){
            _this.List=res;
          }else{
            for(var i=0;i<res.length;i++){
              _this.List.push(res[i])
            }
          }
        }else{
            _this.hasNext=false;
            if(!!window.ActiveXObject || "ActiveXObject" in window){
              mui.toast('没有更多数据');
              return;
            }
        }
          _this.enable=true;
           console.log(_this.List);

        })
        .catch( (error) => {
            console.log(error);
        });    
      },
      refresh:function(done){         //下拉刷新
        this.top=false;
        this.page=1;
        let _this=this;
        setTimeout(function(){
            _this.getlist();
            done();
          },1000)
　　　},
 infinite:function(done) {             //上拉加载
        console.log(this.hasNext);
        console.log("触发上拉加载")
        if(this.hasNext == true) {
          let _this = this;
          setTimeout(function() {           
            _this.page = _this.page + 1;

              _this.getlist(function(){
                done()
              });
               _this.top=true;
          }, 1000)
        } else {
          done("noDataText");
        }
      },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-bar{
  position: fixed;
  top: 0;
}
h5{
  color: #333;
  font-size: 16px;
}
.itemdetail>p{
  margin: 0;
  padding: 6px 0;
}
.itemdetail>a>p{
  margin: 0;
  padding: 6px 0;
}
.itemdetail{
 margin: 6px 8px ;
 border: 1px solid #eee;
 background: #fff;
 border-radius: 6px;
 text-align: left;
 padding: 0px 8px;
  box-shadow:0px 2px 2px #eee;
}
.itemdetail>div{
  color: #999;
  font-size: 13px;
}
.contentdetail{
padding-top: 6px;
}
.contentdetail>p{
  display: flex;
  justify-content: space-between;
}
p>span:last-child{
  color: #000;
}
.fa-angle-up{
  display: none;
  margin-top: 8px;
  position: relative;
  top: 6px;
}

</style>
