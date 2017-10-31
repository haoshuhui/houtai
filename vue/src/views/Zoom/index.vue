<template>
  <div class="page">
    <Header v-title='tit'></Header>
      <ul>
        <li>
          <span class='iconfont icon2'>&#xe6b1;</span><span class='txt'>我的电影票</span>
          <span class='iconfont icon1'>&#xe6d6;</span>
        </li>
        <li>
          <span class='iconfont icon2'>&#xe724;</span><span class='txt'>优惠券</span>
          <span class='iconfont icon1'>&#xe6d6;</span>
        </li>
      </ul>
      <ul>
        <li>
          <span class='iconfont icon2'>&#xe640;</span><span class='txt'>帮助中心</span>
          <span class='iconfont icon1'>&#xe6d6;</span>
        </li>
        <li>
          <span class='iconfont icon2'>&#xe60e;</span><span class='txt'>意见反馈</span>
          <span class='iconfont icon1'>&#xe6d6;</span>
        </li>
      </ul>
    
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'

export default {
  name: 'Zoom',
  data () {
    return {
      tit: '我的'
    }
  },
  components: {
    FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.page{
  font-size: 20px;
  ul{
    background: #fff;
    margin-top: .1rem;
    li{
      height: .52rem;
      line-height: .52rem;
      border-bottom: 1px solid #eee;
      position: relative;
      .icon1{
        position: absolute;
        right: .1rem;
        top: .04rem;
        color: #ccc;
      }
      .icon2,.txt{
          font-size: .16rem;
          font-weight: normal;
          color: #50505a;
          padding-left: .15rem;
      }
      .txt{
        font-size: .14rem;
      }
    }
  }
  .footer-bar{
    background: #fff;
  }
}
</style>
