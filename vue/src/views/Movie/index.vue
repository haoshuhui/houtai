<template>
  <div class="page">
    <HeaderBar v-title='tit'>
      <selectBar slot="left-group" class="icons" @sel="sel" :cityId.sync='cityId'>
        <img :src="img" alt="">
      </selectBar>
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
    </HeaderBar>
    <div v-show="titles == 0">
      <Banner></Banner>
      <contentList :movieList="movieList"></contentList>
    </div>
    <div v-show="titles == 1">
      <span slot="txt" class='dates'>2017-9-8  周四 12：00</span>
      <contentList :movieList="movieList"></contentList>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import TabMenu from './components/TabMenu'
import Banner from './components/Banner'
import FooterBar from '@/components/FooterBar'
import contentList from '@/components/contentList'
import selectBar from '@/components/selectBar'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'movie',
  data () {
    return {
      titles: 0,
      title: '选择城市',
      tit: '淘票票',
      type:0,
      page: 0,
      pageSize: 10,
      flg: true,
      keepAlive: true,
      cityId: 0,
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MCcgaGVpZ2h0PSc1MCc+ICAgPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00zOC43OTMgNTBIMTEuMjA3QzUuMDE3IDUwIDAgNDQuOTgyIDAgMzguNzkzVjExLjIwN0MwIDUuMDE3IDUuMDE3IDAgMTEuMjA3IDBoMjcuNTg2QzQ0Ljk4MyAwIDUwIDUuMDE3IDUwIDExLjIwN3YyNy41ODZDNTAgNDQuOTgzIDQ0Ljk4MiA1MCAzOC43OTMgNTAnLz4gICAgIDxwYXRoIGZpbGw9JyNGRkYnIGQ9J00zMC4wMDQgMTAuNjNjLTMuMTU4LS44MzctNC4xMy01LjAwNi0xMC4wMzItNS4wMDYgMi4xMzcgMi40NTQgMS4xNSA0LjYxLS40NTMgNS4xMDMtNy44MyAyLjA5LTEzLjY5IDguNjgtMTMuMzIgMTcuNzkuMzggOS4zOCA4LjM5IDE1LjQ5NSAxOC43NSAxNS40OTUgMTAuMzUgMCAxOC4zNy02LjExNiAxOC43NS0xNS40OTQuMzctOS4yNTgtNS42OS0xNS45MTMtMTMuNy0xNy44ODgnLz4gICAgIDxwYXRoIGZpbGw9JyMzNzNENDInIGQ9J00yNSAyNi4zYy0uNzE2IDAtMS4yNjcgMy4wOTItMi40NzMgNC43OTQtLjg5NiAxLjI2NS0yLjE2MiAxLjgzOC00LjM3IDEuOTc2LS43NjMuMDQ4LTEuNjQuMDQ1LTIuNjg3LS4wMS0xLjQzMi0uMDc1LTIuNjctLjg0Ny0zLjU4Mi0yLjIzNC0uNjUtLjk5Mi0xLjEzNC0yLjI4My0xLjQzNi0zLjgzOHYtLjAwN2MtLjEwNy0uNTQtLjIwNS0xLjA1LS4yNjUtMS41NC0uMTYzLTEuMDgtLjYyMy0xLjQ2LS45MjYtMS41OWwtLjAzLS4wMWMtLjIzLS4wNi0uMjgtLjI5NC0uMjgtLjM0LS4wMy0uNDQtLjEzLTEuNDEtLjE3LTIuMDE1LS4wMy0uNDUzLjM1LS41MTIuNDItLjUxNyAyLjYwOC0uMTYzIDguNjU1LS40OSAxMS40LjIzLjgyNS4yMTQgMy4xNy42NiA0LjQxLjY2IDEuMjQgMCAzLjU5LS40NDYgNC40MS0uNjYgMi43NS0uNzIgOC43OTgtLjM5MyAxMS40LS4yMy4wNzUuMDA1LjQ0OC4wNjQuNDIuNTE3LS4wNC42MDUtLjE0NiAxLjU4LS4xNzQgMi4wMTQtLjAwMi4wNDQtLjA0Ny4yOC0uMjguMzQtLjAxMi4wMDMtLjAyMi4wMS0uMDMzLjAxNC0uMzA1LjEzNC0uNzY1LjUxNi0uOTMgMS41OTQtLjA2LjQ4Ny0uMTYuOTk2LS4yNjMgMS41NDJWMjdjLS4zMDQgMS41NTMtLjc4NyAyLjg0NC0xLjQzOCAzLjgzNi0uOTEgMS4zODctMi4xNSAyLjE2LTMuNTg0IDIuMjM0LTEuMDQ1LjA1NS0xLjkyMy4wNi0yLjY4Ni4wMS0yLjIwNy0uMTM4LTMuNDczLS43MS00LjM3LTEuOTc2LTEuMjEtMS43MDYtMS43Ni00LjgtMi40OC00LjgnLz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00xOS45MjUgMjMuMzA4Yy0uMDYtLjAxLS4xMjUtLjAyNC0uMTk1LS4wMzgtLjk4LS4xODMtMi45NzUtLjQzNi00LjUyLS4zMzgtLjY4LjA0My0xLjI3LjE1Mi0xLjY1LjM2Ny0uOTQuNTMtMS4wMTYgMS4zNi0uODU4IDIuNDkuMDQ2LjMyLjExMi42Ny4xODIgMS4wNS4zNzYgMiAxLjI2NCA0LjEzIDMuMTEyIDQuMjQuODMuMDUgMS41MS4wNSAyLjA3NS4wMSAxLjc0LS4xMSAyLjM2LS41OCAyLjgtMS4yMjcgMi40Ny0zLjY2IDEuNDktNi4wNjYtLjkzMi02LjU3Jy8+ICAgICA8cGF0aCBmaWxsPScjMUY5QkRFJyBkPSdNMzAuMDc1IDIzLjMwOGMuMDYtLjAxLjEyNS0uMDI0LjE5NS0uMDM4Ljk4LS4xODMgMi45NzUtLjQzNiA0LjUyLS4zMzguNjguMDQzIDEuMjcuMTUyIDEuNjUuMzY3Ljk0LjUzIDEuMDE2IDEuMzYuODU4IDIuNDktLjA0Ni4zMi0uMTEyLjY3LS4xODIgMS4wNS0uMzc2IDItMS4yNjQgNC4xMy0zLjExMiA0LjI0LS44My4wNS0xLjUxLjA1LTIuMDc1LjAxLTEuNzQtLjExLTIuMzYtLjU4LTIuOC0xLjIyNy0yLjQ3LTMuNjYtMS40OS02LjA2Ni45MzItNi41NycvPiAgIDwvZz4gPC9zdmc+'
    }
  },
  components: {
    HeaderBar,
    TabMenu,
    FooterBar,
    Banner,
    contentList,
    selectBar
  },
   computed: {
    ...mapGetters('movie/',[
      'movieList'
    ])
  },
  methods: {
    isScrollBottom () {
        let [
            scrollTop,
            winHeight,
            bodyHeight
        ] = [
            (document.body.scrollTop),
            (window.outerHeight),
            (document.body.clientHeight)
        ]
        if (bodyHeight-scrollTop <= winHeight+50) {
            return true
        } else {
            return false
        }
    },
    scrollLoad () {
      $( document ).on( 'scroll',() => {
        if (this.isScrollBottom()) { 
          if( this.flg ) {
            this.flg = false;
            this.page += 1
            this.getMovieList()
          }
        }
      })
    },
    tabList (index) {
      this.titles = index
    },
    sel (data) {
      this.cityId = data[0];
    },
    getMovieList () {
    console.log('page'+this.page)
      this.$store.dispatch('movie/getMovieList', {
          cityId: 12345,
          page: this.page,
          pageSize: this.pageSize,
          type: this.type
      }).then(
        ( data ) => {
          this.flg = true
        },
        () => {
          this.flg = true
        }
      )
    }
  },
  watch: {
    '$route': (to, from) => {
      console.log(to, from)
    },
    'cityId': function(){
      console.log( 'xxx' )
      this.getMovieList()
    }
  },
  created () {
    console.log(this.$route.params)
    this.getMovieList()
  },
  mounted () {
    this.scrollLoad()
  },
  activated () {
  console.log('组件启用')
  this.scrollLoad();
  this.keepAlive = true;
  },
  deactivated () {
    this.keepAlive = false;
    $( document ).off('scroll')
    console.log( '组件停用' )
  },
  destroyed () {
    console.log( '销毁首页' )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
  font-size: 20px;
  background: #fff;
  width: 100%;
  height: 100%;
  .header-bar{
    background: #fff;
    z-index: 999;
  }
  .icons{
    display: inline-block;
    width: .23rem;
    padding-top: .05rem;
    img {
      width: 100%;
    }
  }
  .footer-bar{
    height: .5rem;
    border-top: 1px solid #ccc;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    a{
      flex: 1;
      display: block;
      text-align: center;
      i{
        width: .23rem;
        height: .23rem;
        display: block;
        background-size: contain;
        margin: 0 auto;
        margin-top: .05rem;
      }
      span{
        color: #8a869e;
        font-size:.12rem;
      }
      &.active{
          span{
            color: #ff4d64;
          }
        }
    }
  }
}
</style>
