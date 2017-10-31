<template>
  <ul class="contlist">
    <router-link to='detailed'>
      <li class="contitem" v-for="item in movieList">
          <div class="left">
             <img :src="item.image" />
          </div>
          <div class="right">
            <h4 class="titName">{{item.name}}<span class="i">IMAX</span></h4>
            <div class="star">
              <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5000' height='1000' viewBox='0 0 5000 1000'%3E%3Cpath fill='%23FEA54C' d='M2501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L2501 24.357l154.51 313.8L3001 388.48l-250 244.26 59.017 344.902zM3501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L3501 24.357l154.51 313.8L4001 388.48l-250 244.26 59.017 344.902zM4501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L4501 24.357l154.51 313.8L5001 388.48l-250 244.26 59.017 344.902zM1501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L1501 24.357l154.51 313.8L2001 388.48l-250 244.26 59.017 344.902zM500 814.802l-309.017 162.84L250 632.742 0 388.48l345.49-50.32L500 24.357l154.51 313.8L1000 388.48 750 632.74l59.017 344.902z'/%3E%3C/svg%3E" alt="">
            </div>
            <p class="name">导演: {{item.director}}</p>
            <p>主演: {{item.leadingRole}}</p>
          </div>
        <button class="buyTicket">购票</button>
        <div class="botInfo">
          <span class="orange">新人专享</span> 
          <span class="gap">|</span> 新人首张特惠，名额有限抢完即止
        </div>
      </li>
    </router-link>
  </ul>
</template>

<script>
  export default {
    name: 'contentList',
    data () {
      return {
      }
    },
    props: ['movieList']
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .btn{
  background: transparent;
  border: 1px solid #ff4d64;
  color: #ff4d64;
  padding: 0.05rem 0.1rem;
  border-radius: 0.05rem;
}
.contlist{
  .contitem{
    height: 1.26rem;
    padding: 0.15rem;
    position: relative;
    overflow: hidden;
    display: flex;
    &::after{
      content: "";
      display: block;
      height: 1px;
      width: 200%;
      position: absolute;
      left: 0.15rem;
      bottom: 0;
      background: #d7d7d7; 
      -webkit-transform: scale(0.5);
      -webkit-transform-origin:  0 0;
    }
    button{
      position: absolute;
      width: .45rem;
      height: .24rem;
      border: 1px solid #ff4d64;
      background: none;
      border-radius: .05rem;
      top: 40%;
      right: 8%;
      color: #ff4d64;
      margin-top: -.12rem;
    }
    .left{
      width: .65rem;
      height: .9rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      h4{
        font-weight: normal;
        color: #000;
        font-size: .16rem;
        padding-left: .1rem;
        .i{
          display: inline-block;
          font-size: .12rem;
          border: 1px solid #ccc;
          color: #ccc;
          border-radius: 3px;
          padding: 0 .05rem;
          margin-left: .1rem;
        }
      }
      p{
        font-size: .14rem;
        padding-left: .1rem;
        line-height: .25rem;
        color: #8a869e;
      }
      .name{
        padding-top: .1rem;
      }
      .star{
        width: .6rem;
        height: .1rem;
        padding-left: .07rem;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          position: absolute;
          top: .05rem;
          left: 0;
        }
      }
    }
    .botInfo{
      width: 70%;
      height: .19rem;
      position: absolute;
      padding-left: .8rem;
      bottom: .15rem;
      font-size: .12rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-top: .1rem;
      color: #8a869e;
      &::after{
        content: "";
        display: block;
        height: 1px;
        width: 200%;
        position: absolute;
        left: 0.8rem;
        top: 0;
        background: #d7d7d7; 
        -webkit-transform: scale(0.5);
        -webkit-transform-origin:  0 0;
      }
      .orange{
        color: #fea54c;
      }
    }
  }
}
</style>
