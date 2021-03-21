<template>
<div class='topbar'>
    <div class='left'>
        <router-link to='/home' class='home'>豆瓣 </router-link>
    </div>
    <div class='right'>
        <router-link to='/movie' class='movie'>电影 </router-link>
        <router-link to='/radio' class='radio'>广播 </router-link>
        <router-link to='/team' class='team'>小组 </router-link>
    </div>
    <!-- <router-view/> -->

</div>

</template>

<script>
export default {

}
</script>

<style>
.topbar{
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    top: 0;   
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 60px;
    border-bottom: 1px solid #f3f3f3;
    /* margin-bottom: 60px; */
}
a{
    text-decoration: none;
}
.router-link-active{
    color: red
}
.left .home{
    font-size: 26px;
    color: #05b512;
    font-style: bold;
}
.right a{
    margin-left: 15px;
}
.right a:nth-of-type(1){
    color: #2384e8;
}
.right a:nth-of-type(2){
    color: #9f7860;
}
.right a:nth-of-type(3){
    color: #e4a813;
}
.right a:nth-of-type(4){
    color: #2ab8cc;
}


</style>