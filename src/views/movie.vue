<template>
<div>
    <Topbar/>
    <div class='divcon'>   
      <!-- 父views/movie给子components/slideList传数据 -->
      <Slist title="影院热映" :listdata="arra"/>
      <Slist title="免费在线观影" :listdata="arrb"/>
      <Slist title="佳片速递" :listdata="arrc"/> 
      <iMovie title2 = "发现好电影" class="goodtitle"/>
      <Typefu class="typeMovie"/>
      <Footer/>
  </div>
</div>

</template>

<script>
import Topbar from "@/components/topbar.vue"
import Slist from "com/movie/slideList.vue"
import {getlink} from "api/getapi.js"
import iMovie from "com/movie/inputMoviefu.vue"
import Typefu from "com/movie/typefu.vue"
import Footer from "com/footer.vue"
export default {
  components:{
    Topbar,
    Slist,
    iMovie,
    Typefu,
    Footer
  },
  created(){
    getlink("/data/list/xiaoming/xiaohong").then((ok)=>{
      // console.log(ok.data.books);
      this.arr = ok.data.books;
    }).catch((err)=>{
      console.log(err);
    })
  },
  data(){
    return{
      arr:[]
    }
  },
  computed:{
    arra(){
      return this.arr.slice(0,6);
    },
    arrb(){
      return this.arr.slice(6,12);
    },
    arrc(){
      return this.arr.slice(12,20);
    }
  }
}
</script>

<style>
.divcon{
  width: 73%;
  margin: auto;
  margin-top: 80px;
}
.imgText{
  margin-right: 10px;
}
.goodtitle{
  margin-top: 20px;
  /* overflow-x:auto; */
}
</style>