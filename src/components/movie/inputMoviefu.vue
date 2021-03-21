<template>
  <div class='good'>
      <!-- <p>{{goodMovie="发现好电影"}}</p> -->
      <p>{{title2}}</p>
        <div class='goodItem'>
            <InputZi v-for="(v,i) in arrG" :key="i" :goodMovie="v"></InputZi>
        </div>  
 
  </div>
</template>

<script>
import InputZi from "./inputMoviezi.vue"
export default {
    components:{
        InputZi
    },
    props:["title2"],
    data(){
        return{
            // arrG:["同时入选豆瓣电影250的电影同时入选豆瓣电影250的电影同时入选豆瓣电影250的电影"]
            arrG:["同时入选豆瓣电影250的电影","带你走进带你走进带你走进","同时入选豆瓣电影250的电影","科幻是未来的钥匙--科幻启示录【科幻题材】"]
        }
    }
}
</script>

<style scoped>
.goodItem{
    display: flex;
    width: 100%;
    /* flex-wrap: wrap; */
    overflow-x: auto;
    /* border: 1px solid red; */
}

</style>