<template>
    <button class='btn'>{{goodMovie}}</button>
</template>

<script>
export default {
      props:["goodMovie"]
}
</script>

<style scoped>
.btn{
  margin: 10px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #ffac2d;
  flex-shrink: 0;
  overflow: auto;
}

</style>