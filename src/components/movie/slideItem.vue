<template>
  <div @click= "fun(id)" class='imgText'> 
      <img :src="imgurl" >
      <br>
      <span>{{title|change}}</span>
  </div>
</template>

<script>
export default {
  props:["title","imgurl","id"],
  methods:{
   fun(id){
      // this.$router.push("./all");
      //路由传参
      //params方式发送
      // this.$router.push({name:"all",params:{xiaoming:id}});
      // query方式
      this.$router.push({name:"all",query:{xiaohong:id}});
      }
  },
  filters:{
    change(val){
      if(val.length>6){
        return val.substr(0,5)+"...";
      }else{
        return val;
      }
      
    }

  }

}
</script>

<style>
img{
  width: 100px;
  height: 120px;
}
</style>