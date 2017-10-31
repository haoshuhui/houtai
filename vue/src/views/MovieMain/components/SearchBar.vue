<template>
  <div class="page">
    <nav class="tab-menu" @click="sousuo">
      <span class='iconfont'>&#xe729;</span>
      <span>搜索</span>
    </nav>
    <div class="search-box" v-show="searches">
      <HeaderBar title="选择城市">
        <input type="text" placeholder='请输入搜索内容' slot="left-group">
        <span class='cancel' @click='can' slot="right-group">取消</span>
      </HeaderBar>
      <div class="box2"></div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'hello',
  data () {
    return {
      searches: false,
      searchBox: ''
    }
  },
  methods: {
    sousuo () {
      this.searches = !this.searches
    },
    can () {
      this.searches = false
    }
  },
  components: {
    HeaderBar
  },
  mounted () {
    this.searchBox = this.$el.querySelector('.search-box')
    document.body.appendChild(this.searchBox)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.page{
  .tab-menu{
    background: #fff;
    position:absolute;
    top: 0;
    right: -.1rem;
    padding-right: .3rem;
    span{
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: .12rem;
      text-align: center;
      color: #50505a;
      text-decoration: none;
    }
  }
}
</style>
