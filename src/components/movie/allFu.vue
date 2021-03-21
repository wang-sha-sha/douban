<template>
  <div>
    <AllZi v-for="(v,i) in arr" :key="i" :name="v.name" :time="v.time" :content="v.content" :zan="v.zan"/>
  </div>
</template>

<script>
import AllZi from "./allZi.vue";
import {getlink} from "api/getapi.js"
export default {
  components: {
    AllZi,
  },
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    getlink("/data/list/xiaomingall")
      .then((ok) => {
        this.arr = ok.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>