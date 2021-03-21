<template>
  <div>
      <button>{{btntext}}</button>
  </div>
</template>

<script>
export default {
    props:["btntext"]
}
</script>

<style scoped>
button{
    width: 100px;
    height: 40px;
    margin-bottom: 20px;
    border:none;
}

</style>