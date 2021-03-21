<template>
  <div>
      <p>{{type='分类浏览'}}</p>
      <div class='typeFu'>
          <Typezi v-for="(v,i) in arr" :key="i" :text="v"/>
      </div>
      
  </div>
</template>

<script>
import Typezi from "./typezi"
export default {
    components:{
        Typezi
    },
    data(){
        return{
            arr:["经典","冷门佳片","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"]
        }
    }
}
</script>

<style scoped>
.typeFu{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>