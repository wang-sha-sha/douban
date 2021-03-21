<template>
    <div>
        <RadioZi v-for="(v,i) in arr" :key="i" :name="v.name" :time="v.time" :title="v.title" :content="v.content" :zan="v.zan" :message="v.message"  :reply="v.reply"/>
    </div>
</template>

<script>
import RadioZi from "./radiozi.vue"
import {getlink} from "api/getapi.js"
export default {
    components:{
        RadioZi
    },
    data(){
        return{
            arr:[]
        }
    },
    mounted(){
        getlink("/data/list/xiaomingradio").then((ok)=>{
            this.arr=ok.data.data;
            console.log()
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>

</style>