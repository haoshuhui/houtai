<template>
  <div class="page">
    <slot name="txt" class='dates'></slot>
    <section>
    <router-link to="xiangqing">
      <ul class="titles">
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
        <li>
            <p class="tits">星美国际影商城上海松江店<span>15.8</span><b>元起</b></p>
            <p class="ads">松江区环城路555号LOMO玩库3楼</p>
            <p class='ticket'>
              <span>退票</span>
              <span>改签</span>
            </p>
            <p class='new'>
              <span class='one'>新</span>
              <span>新人专享</span>
            </p>
        </li>
      </ul>
    </router-link>
    </section>
  </div>
</template>

<script>

export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
  font-size: 20px;
  background: #fff;
  .dates{
    display: inline-block;
    height: .3rem;
    padding-top: .2rem;
  }
  section{
    width: 100%;
    margin-top: .4rem;
    ul{
      li{
        height: 1.14rem;
        border-bottom: 1px solid #eee;
        .tits{
          display: inline-block;
          font-size: .14rem;
          font-weight: bold;
          color:#222227;
          padding: .12rem .1rem 0.02rem .1rem;
          span{
            font-size: .12rem;
            color: #ff4d64;
            padding-left: .1rem;
            font-weight: normal;
          }
          b{
            font-size: .12rem;
            color: #8a869e;
            font-weight: normal;
          }
        }
        .ads{
          line-height: .25rem;
          font-size: .12rem;
          padding-left: .1rem;
          color: #8a869e;
        }
        .ticket{
          padding-left: .1rem;
          line-height: .15rem; 
          span{
            display: inline-block;
            font-size: .12rem;
            border: 1px solid #7ab5e0;
            color: #7ab5e0;
            padding: 0 .05rem;
            margin-left: .02rem;
            border-radius: .2rem;
          }
        }
        .new{
          padding-left: .1rem;
          span{
            font-size: .12rem;
            color: #8a869e;
          }
          .one{
            display: inline-block;
            color: #fff;
            background: red;
            width: .14rem;
            height: .14rem;
            line-height: .14rem;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
