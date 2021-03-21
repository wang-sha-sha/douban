<template>
  <div class='homebtn'>
      <HomeBtnZi v-for="(v,i) in arr" :key="i" :btntext="v"/>
  </div>
</template>

<script>
import HomeBtnZi from "./homeBtnZi.vue"
export default {
  components:{
    HomeBtnZi
  },
  data(){
    return{
      arr:["影院热映","欧美新碟榜","注册账号","登录豆瓣"]
    }
  }
}
</script>

<style scoped>
.homebtn{
  width: 73%;
  margin: auto;
  /* background-color:pink; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 } 
</style>