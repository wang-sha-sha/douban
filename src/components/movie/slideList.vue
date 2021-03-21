<template>
  <div> 
      <p>{{title}}</p>
      <!-- 遍历10次 -->
      <div class='slidecon'>
        <Sitem v-for="(v,i) in listdata" :key="i" :title="v.title" :imgurl="v.images.small" :id="v.id"/>
      </div>
     
  </div>
</template>

<script>
// 当前文件夹下
import Sitem from "./slideItem.vue"
export default {
    components:{
        Sitem
    },
    props:["title","listdata"]
}
</script>

<style scoped>
.slidecon{
    display: flex;
    overflow-x: auto;
    width: 100%;
    /* border: 1px solid green; */
}
p{
  margin: 10px 0;
}

</style>