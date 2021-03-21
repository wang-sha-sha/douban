<template>
  <div>
      <TeamZi v-for="(v,i) in arr" :key="i" :data="v" :text="v.text" :count="v.count"/>
  </div>
</template>

<script>
import TeamZi from "com/team/teamZi.vue"
import {getlink} from "api/getapi.js"
export default {
    components:{
        TeamZi
    },
    data(){
        return{
            arr:[]
        }
    },
    mounted(){
        getlink("/data/list/xiaomingteam").then((ok)=>{
            this.arr=ok.data.data;
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style>

</style>