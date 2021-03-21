<template>
  <div>
    <Topbar/>
    <div class='home-con'>
      <HomeBtnFu/>
      <HomeConFu/>

    </div>
  </div>
</template>

<script>
import Topbar from "@/components/topbar.vue"
import HomeBtnFu from "com/home/homeBtnFu.vue"
// import {getlink} from "api/getapi.js"
import HomeConFu from "com/home/homeContentFu"
export default {
    components:{
       Topbar,
       HomeBtnFu,
       HomeConFu
    }
}
</script>

<style scoped>
.home-con{
  margin-top: 80px;
}
</style>