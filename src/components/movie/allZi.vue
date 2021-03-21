<template>
<div class='radio-con'>
    <!-- 上部分 -->
    <div class='radio-top'>
        <div class='radio-left'>
            <img src="ic_douban_pay.png">
        </div>     
        <div class='radio-right'>
            <div><span>{{name}}</span></div>
            <div class='time'>{{time}}</div>
            <div class='text'>
                <div class='content'>{{content}}</div>
            </div>
        </div>
    </div> 
    <!-- 下部分 -->
    <div class='radio-bottom'>
        <img src="ic_book_annotation_like.png">
        <span>{{zan}}</span>
    </div>

</div>

</template>

<script>
export default {
    props:["name","time","content","zan"]
}
</script>

<style scoped>
.radio-con{
    display: flex;
    width: 80%;
    margin:auto;
    margin-top: 20px;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid  #aaaaaa;
}
.radio-top{
    display: flex;
}
.radio-left img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.radio-left{
    width: 20%;
}
.radio-right{
    width: 75%;
}
.radio-right span{
    font-weight: bold;
}
.radio-right .time,
.radio-right .content{
    color: #aaaaaa;
}

.text{
    margin-top: 10px;
    padding: 10px;
} 
.title{
    margin-bottom: 5px;
}
.radio-bottom {
    text-align: left;
    margin-top: 10px;
    margin-left: 25px;
}
.radio-bottom img{
    width: 20px;
    height: 20px;
    margin-left: 50px;
}
.radio-bottom span{
    margin-left: 10px;
    color: #aaaaaa;
}
</style>