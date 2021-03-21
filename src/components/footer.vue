<template>
  <div class='footer-con'>
      <div class='footer-top'>
          <img src="ic_douban_pay.png" alt="">
          <div>
            <h2>豆瓣</h2>
            <p>我们的精神角落</p>
          </div>
      </div>
      <p class='install'>去App Store 免费下载 ios 客户端</p>     
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
  .footer-top{
    /* border: 1px solid red; */
    margin: auto;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .footer-top img{
    width: 60px;
    height: 60px;
  }
  .footer-top div{
    /* background-color:pink; */
    margin-left: 20px;
    margin-top: 5px;
  }
  .footer-top h2{
    font-weight: normal;
  }
  .install{
    color: #42bd56;
    /* background-color: pink; */
    text-align: center;
    padding-bottom: 20px;
  }
</style>