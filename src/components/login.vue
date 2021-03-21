<template>
  <div class='login'>
    <div class='login-left'>
        <img src="avatar_famale_30.png">
        <div>请先登录</div>
     </div>
    <div class='login-right'>
        <img src="ic_status_send_text.png">
        <img src="ic_status_send_pic.png">
    </div>

  </div>
</template>

<script>

export default {
}

</script>

<style scoped>
.login{
    width: 80%;
    margin: auto;
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}
img{
    width: 40px;
    height: 40px;
}
.login-left,
.login-right{
    width: 45%;
    display: flex;
    justify-content: space-evenly;
}
.login-left div{
    margin-top: 20px;
    color: #aaaaaa;
}
</style>