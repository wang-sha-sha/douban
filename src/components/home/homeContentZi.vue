<template>
  <div class='home-content-con'>
      <div class='home-content-left'>
        <div class='title'>{{title}}</div>
        <div class='note'>{{note}}</div>
        <div class='type'>{{type}}</div>
      </div>
      <div class='home-content-right'>
        <img :src="img">
        <div class='imgText'>{{imgText}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:["title","note","type","img","imgText"]

}
</script>

<style scoped>
.home-content-con{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin:auto;
    border-bottom: 1px solid #e3e3e3;
    height: 180px;
    padding-top: 20px;
}
.home-content-left{
    margin-right: 20px;
    /* background-color: pink; */
    width: 60%;
}
.home-content-right{
    /* background-color: skyblue; */
    width: 30%;
}

.home-content-left .type{
    margin-top: 40px;
}
.home-content-left .note,
.home-content-left .type,
.home-content-right .imgText{
    color: #aaaaaa;
    font-size: 12px;
}
.home-content-left .note{
    height: 50px;
}
.home-content-right img{
    margin-top: 20px;
    width: 80px;
    height: 100px;
    margin-right: 10px;
}
</style>