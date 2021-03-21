<template>
  <span class='typemovie'> 
    <span class='btnType'>{{text}}</span>
    <span class='flag'>></span>
  </span>
</template>

<script>
export default {
    props:["text"]

}
</script>

<style scoped>
.btnType{
  height: 50px;
  color: #42bd56;
}
.typemovie{
  width: 49%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  line-height: 50px; 
  padding-left: 10px;
  box-sizing: border-box;
}
.flag{
  margin-right: 20px;
  color: #d5d5d5;
}
</style>