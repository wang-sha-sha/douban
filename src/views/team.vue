<template>
  <div>
    <Topbar/>
    <Login/>
    <Team/>
    <Footer/>
  </div>
</template>

<script>
import Topbar from "@/components/topbar.vue"
import Login from "@/components/login.vue"
import Team from "@/components/team/teamFu.vue"
import Footer from "com/footer.vue"
export default {
  components:{
    Topbar,
    Login,
    Team,
    Footer
  }
}
</script>

<style>

</style>