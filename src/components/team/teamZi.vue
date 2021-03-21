<template>
  <div class='con'>
    <div class='titleName'>{{data.groupName}}</div>
    <div v-for="(v,i) in mydata" :key="i">
      <div class='top'>
        <div class='left'>
          <img :src="v.img">
          <div class='title'>{{v.title}}</div> 
        </div>  
        <div class='count'>{{v.count}}人</div>  
      </div>

      <p>{{v.text}}</p> 
    </div>
    
    <button @click="more()">更多{{data.groupName}}</button>
  </div>
</template>

<script>
export default {
  // props:["groupName","img","title","text","count"]
  props:["data"],
  data(){
    return{
      mydata: [],
      cruentIndex:3,
      step:1
    }
  },
  methods:{
      init(){
          this.mydata=this.data.list.slice(0,this.cruentIndex);
            
      },
      more(){
          this.mydata=this.data.list.slice(0,Math.min(this.cruentIndex+this.step,this.data.list.length));
      }
  },
  mounted(){
    this.init();
  }
}
</script>

<style scoped>
.con{
  width: 80%;
  margin:auto;
}
.con p{
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
}
.titleName{
  margin: 15px 0;
  font-size: 18px;
}
button{
  border: none;
  margin-left: 100px;
  color: #42bd56;
  background-color: #fff;
  margin-top: 20px;
}
.top{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.left{
  display: flex;
}
.left .title{
  margin-top: 10px;
  margin-left: 10px;
}
.top .count{
  margin-top: 10px;
}
img{
  width: 50px;
  height: 50px;
}
</style>