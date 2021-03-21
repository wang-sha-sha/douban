<template>
  <div>
    <Topbar/>
    <div class="detail-con">
      <!-- <h1 @click="fun()">返回</h1> -->
      <h3>{{ currentData.title }}</h3>
      <div class="float">
        <div class="left">
          <span>{{ currentData.pubdate }}</span> /
          <span>{{ currentData.author }}</span> /
          <span>{{ currentData.price }}</span>元 /
          <span>{{ currentData.publisher }}</span>
        </div>
        <div class="right">
          <img :src="currentData.image" />
        </div>
      </div>

      <div>
        <p class='intro'>{{ currentData.title }}的简介</p>
        <p>{{summary}}<span v-if="bool" class='show' @click="show()">(展示)</span></p> 
      </div>
    <p class='comment'>{{currentData.title}}的短评</p>
    </div>
    
    <Allfu/>
    <Footer/>

  </div>
</template>

<script>
import { getlink } from "api/getapi.js";
import Topbar from "@/components/topbar.vue";
import Allfu from "@/components/movie/allFu.vue";
import Footer from "com/footer.vue"
export default {
  components: {
    Topbar,
    Allfu,
    Footer
  },
  data() {
    return {
      currentData: {},
      summary:'',
      bool: false
    };
  },
  methods: {
    fun() {
      this.$router.go(-1);
    },
    show(){
        this.summary= this.currentData.summary;
        this.bool=false;
    }
  },
  created() {
    getlink("/data/list/xiaoming/xiaohong")
      .then((ok) => {
        ok.data.books.forEach((v) => {
          if (v.id == this.$route.query.xiaohong) {
            this.currentData = v;
            this.currentData.author = this.currentData.author.join("/");
            if(this.currentData.summary.length>100){
              this.summary= this.currentData.summary.substr(0,100)+"......";
              this.bool=true;
          }else{
              this.summary= this.currentData.summary;
          }
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.detail-con {
  width: 80%;
  margin: auto;
  margin-top: 80px;
  /* background-color: pink; */
}
.detail-con h3{
    margin-bottom: 10px;
}
.detail-con .float {
  display: flex;
}
.detail-con .float .left{
    margin-top: 30px;
    margin-right: 10px;
}
.intro,.comment{
    color: gray;
    margin: 10px 0;
}
.show{
    color: #42bd56;
}

</style>