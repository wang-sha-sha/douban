<template>
  <div>
    <Topbar/>
    <Login/>
    <Radio/>
    <p class='more'>显示更多广播</p>
    <Footer/>
    
  </div>
</template>

<script>
import Topbar from "@/components/topbar.vue"
import Login from "@/components/login.vue"
import Radio from "@/components/radio/radiofu.vue"
import Footer from "@/components/footer.vue"
export default {
  components:{
    Topbar,
    Login,
    Radio,
    Footer
  }
}
</script>

<style scoped>
.more{
  text-align: center;
  color: #42bd56;
  margin: 15px;
}
</style>