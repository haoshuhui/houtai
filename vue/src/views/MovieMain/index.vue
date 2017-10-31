<template>
  <div class="page">
    <HeaderBar v-title='tit'>
      <selectBar slot="left-group" class="icons" @sel="sel">
        <img :src="img" alt="">
      </selectBar>
      <FilterBar slot="right-group" @aa='aa'></FilterBar>
      <SearchBar slot="right-group" @sear='sear'></SearchBar>
    </HeaderBar>
    <movieList></movieList>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'
import FilterBar from './components/FilterBar'
import SearchBar from './components/SearchBar'
import movieList from '@/components/movieList'
import selectBar from '@/components/selectBar'

export default {
  name: 'MovieMain',
  data () {
    return {
      title: 0,
      txt: '首页',
      tit: '影院',
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MCcgaGVpZ2h0PSc1MCc+ICAgPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00zOC43OTMgNTBIMTEuMjA3QzUuMDE3IDUwIDAgNDQuOTgyIDAgMzguNzkzVjExLjIwN0MwIDUuMDE3IDUuMDE3IDAgMTEuMjA3IDBoMjcuNTg2QzQ0Ljk4MyAwIDUwIDUuMDE3IDUwIDExLjIwN3YyNy41ODZDNTAgNDQuOTgzIDQ0Ljk4MiA1MCAzOC43OTMgNTAnLz4gICAgIDxwYXRoIGZpbGw9JyNGRkYnIGQ9J00zMC4wMDQgMTAuNjNjLTMuMTU4LS44MzctNC4xMy01LjAwNi0xMC4wMzItNS4wMDYgMi4xMzcgMi40NTQgMS4xNSA0LjYxLS40NTMgNS4xMDMtNy44MyAyLjA5LTEzLjY5IDguNjgtMTMuMzIgMTcuNzkuMzggOS4zOCA4LjM5IDE1LjQ5NSAxOC43NSAxNS40OTUgMTAuMzUgMCAxOC4zNy02LjExNiAxOC43NS0xNS40OTQuMzctOS4yNTgtNS42OS0xNS45MTMtMTMuNy0xNy44ODgnLz4gICAgIDxwYXRoIGZpbGw9JyMzNzNENDInIGQ9J00yNSAyNi4zYy0uNzE2IDAtMS4yNjcgMy4wOTItMi40NzMgNC43OTQtLjg5NiAxLjI2NS0yLjE2MiAxLjgzOC00LjM3IDEuOTc2LS43NjMuMDQ4LTEuNjQuMDQ1LTIuNjg3LS4wMS0xLjQzMi0uMDc1LTIuNjctLjg0Ny0zLjU4Mi0yLjIzNC0uNjUtLjk5Mi0xLjEzNC0yLjI4My0xLjQzNi0zLjgzOHYtLjAwN2MtLjEwNy0uNTQtLjIwNS0xLjA1LS4yNjUtMS41NC0uMTYzLTEuMDgtLjYyMy0xLjQ2LS45MjYtMS41OWwtLjAzLS4wMWMtLjIzLS4wNi0uMjgtLjI5NC0uMjgtLjM0LS4wMy0uNDQtLjEzLTEuNDEtLjE3LTIuMDE1LS4wMy0uNDUzLjM1LS41MTIuNDItLjUxNyAyLjYwOC0uMTYzIDguNjU1LS40OSAxMS40LjIzLjgyNS4yMTQgMy4xNy42NiA0LjQxLjY2IDEuMjQgMCAzLjU5LS40NDYgNC40MS0uNjYgMi43NS0uNzIgOC43OTgtLjM5MyAxMS40LS4yMy4wNzUuMDA1LjQ0OC4wNjQuNDIuNTE3LS4wNC42MDUtLjE0NiAxLjU4LS4xNzQgMi4wMTQtLjAwMi4wNDQtLjA0Ny4yOC0uMjguMzQtLjAxMi4wMDMtLjAyMi4wMS0uMDMzLjAxNC0uMzA1LjEzNC0uNzY1LjUxNi0uOTMgMS41OTQtLjA2LjQ4Ny0uMTYuOTk2LS4yNjMgMS41NDJWMjdjLS4zMDQgMS41NTMtLjc4NyAyLjg0NC0xLjQzOCAzLjgzNi0uOTEgMS4zODctMi4xNSAyLjE2LTMuNTg0IDIuMjM0LTEuMDQ1LjA1NS0xLjkyMy4wNi0yLjY4Ni4wMS0yLjIwNy0uMTM4LTMuNDczLS43MS00LjM3LTEuOTc2LTEuMjEtMS43MDYtMS43Ni00LjgtMi40OC00LjgnLz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00xOS45MjUgMjMuMzA4Yy0uMDYtLjAxLS4xMjUtLjAyNC0uMTk1LS4wMzgtLjk4LS4xODMtMi45NzUtLjQzNi00LjUyLS4zMzgtLjY4LjA0My0xLjI3LjE1Mi0xLjY1LjM2Ny0uOTQuNTMtMS4wMTYgMS4zNi0uODU4IDIuNDkuMDQ2LjMyLjExMi42Ny4xODIgMS4wNS4zNzYgMiAxLjI2NCA0LjEzIDMuMTEyIDQuMjQuODMuMDUgMS41MS4wNSAyLjA3NS4wMSAxLjc0LS4xMSAyLjM2LS41OCAyLjgtMS4yMjcgMi40Ny0zLjY2IDEuNDktNi4wNjYtLjkzMi02LjU3Jy8+ICAgICA8cGF0aCBmaWxsPScjMUY5QkRFJyBkPSdNMzAuMDc1IDIzLjMwOGMuMDYtLjAxLjEyNS0uMDI0LjE5NS0uMDM4Ljk4LS4xODMgMi45NzUtLjQzNiA0LjUyLS4zMzguNjguMDQzIDEuMjcuMTUyIDEuNjUuMzY3Ljk0LjUzIDEuMDE2IDEuMzYuODU4IDIuNDktLjA0Ni4zMi0uMTEyLjY3LS4xODIgMS4wNS0uMzc2IDItMS4yNjQgNC4xMy0zLjExMiA0LjI0LS44My4wNS0xLjUxLjA1LTIuMDc1LjAxLTEuNzQtLjExLTIuMzYtLjU4LTIuOC0xLjIyNy0yLjQ3LTMuNjYtMS40OS02LjA2Ni45MzItNi41NycvPiAgIDwvZz4gPC9zdmc+'
    }
  },
  components: {
    FooterBar,
    HeaderBar,
    FilterBar,
    movieList,
    SearchBar,
    selectBar
  },
  methods: {
    aa (num) {
      console.log(num)
    },
    sear () {
    },
    sel () {
    }
  },
  destroyed () {
    console.log( '销毁影院' )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.page{
  font-size: 20px;
  background: #fff;
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
    box-sizing: border-box;
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
