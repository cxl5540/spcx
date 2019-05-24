<template>
  <div class="gotop"  style="position: fixed;right: 4px;bottom: 50px;z-index: 9999" v-if="btnFlag">
   <img src="../../assets/top3.png" alt=""  @click='gotop'>
  </div>
</template>
<script>
  export default {
    props:['btn'],
    data(){
      return {
      scrollTop:'',
      btnFlag:false,
      }
    },
    computed:{
      },
  mounted(){
  window.addEventListener('scroll', this.scrollToTop);
  },

  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods:{
     gotop(){
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)

    },
    scrollToTop () {
        let that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop;
        if (that.scrollTop > 100) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      },
   }
}
</script>
<style scoped lang="less">
  .footer{
      position: fixed;
      display: flex;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50px;
      z-index: 1000; 
     a{
      display: flex;
      flex-direction:column;
      flex:1;
      justify-content:center;
      align-items:center;
      color:gray;
      background:#fff;
      font-size:14px;
      z-index: 1000;
    
      }
      i{
        font-size:18px;
       }
   
   }
 .active{
      color:#0093db !important;
    }
    .num{
      width: 20px;
      height: 20px;
      background: red;
      color: #fff;
      position: absolute;
      bottom: 30px;
      right: 80px;
      z-index: 9999;
      border-radius: 50%;
      font-size: 12px;
    }
</style>
