<template>
  <div>
      <HomeConZi v-for="(v,i) in arr" :key='i' :title="v.title" :note="v.note" :type="v.type" :img="v.img" :imgText="v.imgText"/>
  </div>
</template>

<script>
import HomeConZi from "./homeContentZi"
import {getlink} from "api/getapi.js"
export default {
    components:{
        HomeConZi
    },
    data(){
      return{
        arr:[]
      }
    },
    created(){
      getlink("/data/list/xiaominghome").then((ok)=>{
      this.arr = ok.data.data;
      }).catch((err)=>{
       console.log(err);
    })
  },
}
</script>

<style>

</style>