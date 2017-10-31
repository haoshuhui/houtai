<template>
  <div class="page">
    <nav class="tab-menu" @click="shaixuan">
      <span class='iconfont'>&#xe6f2;</span>
      <span>筛选</span>
    </nav>
    <div class="select-city-box" v-show="num">
        <header class="header-bar">
          <div class="icon-group left-group">
            <slot name="left-group"></slot>
          </div>
          <slot name="address" class="addres"></slot>
          <div class="icon-group right-group">
            <slot name="right-group"></slot>
          </div>
        </header>
        <div class="filt">
          <div class="information">
            <h3>区域</h3>
            <span>{{msg}}</span>
            <ul>
              <li v-for='(item,index) in cityList' @click='tabLis(index)'>
                <input type="radio" :name="msg" :id="'z'+index" :value='item.city' v-model='msg'>
                <label :for="'z'+index">{{item.city}}</label>
              </li>
            </ul>
          </div>
          <div class="information">
            <h3>特色</h3>
            <span>{{message}}</span>
            <ul>
              <li v-for='(item,index) in specilList' @click='tabLis(index)'>
                
                <input type="radio" :name="message" :id="'x'+index" :value='item.movie' v-model='message'>
                <label :for="'x'+index">{{item.movie}}</label>
              </li>
            </ul>
          </div>
          <button @click='cancel'>取消筛选</button>
          <button @click='sure' class='col'>确定</button>  
        </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'FilterBar',
  data () {
    return {
      msg: '不限',
      message: '不限',
      isActive: null,
      num: false,
      cityList: [
        {
          id: 1,
          city: '宝山区'
        },
        {
          id: 2,
          city: '崇明县'
        },
        {
          id: 3,
          city: '长宁区'
        },
        {
          id: 4,
          city: '闸北区'
        },
        {
          id: 5,
          city: '杨浦区'
        },
        {
          id: 6,
          city: '新浦区'
        },
        {
          id: 7,
          city: '松江区'
        },
        {
          id: 8,
          city: '普陀区'
        },
        {
          id: 9,
          city: '卢湾区'
        },
        {
          id: 10,
          city: '静安区'
        },
        {
          id: 11,
          city: '嘉定区'
        },
        {
          id: 12,
          city: '黄浦区'
        },
        {
          id: 13,
          city: '虹口区'
        },
        {
          id: 14,
          city: '奉贤区'
        },
        {
          id: 15,
          city: '闸北区'
        },
        {
          id: 16,
          city: '虹口区'
        },
        {
          id: 17,
          city: '黄浦区'
        }
      ],
      specilList: [
        {
          id: 1,
          movie: '退票'
        },
        {
          id: 2,
          movie: '改签'
        },
        {
          id: 3,
          movie: '观影小事'
        },
        {
          id: 4,
          movie: 'IMAX厅'
        },
        {
          id: 5,
          movie: 'reaID厅'
        },
        {
          id: 6,
          movie: '4K厅'
        },
        {
          id: 7,
          movie: '4DX厅'
        },
        {
          id: 8,
          movie: '4D厅'
        },
        {
          id: 9,
          movie: '双机3D'
        },
        {
          id: 10,
          movie: '杜比厅'
        }
      ]
    }
  },
  components: {
    HeaderBar
  },
  methods: {
    shaixuan () {
      this.num = !this.num
    },
    tabLis (index) {
      this.isActive = index
      this.$emit('tabLis', index)
    },
    cancel () {
      this.num = !this.num
      this.isActive = null
    },
    sure () {
      this.num = !this.num
    }
  },
  mounted () {
    this.selectCityBox = this.$el.querySelector('.select-city-box')
    document.body.appendChild(this.selectCityBox)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.tab-menu{
  padding-right: .6rem;
  span{
    display: inline-block;
    height: 35px;
    line-height: 35px;
    font-size: .12rem;
    text-align: center;
    color: #50505a;
    text-decoration: none;
  }
}
.select-city-box{
  width: 100%;
  position: fixed;
  top: .4rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  .information{
    height: 2.44rem;
    padding: .1rem 0 .1rem .1rem;
    h3{
      font-size: .14rem;
      display: inline-block;
      color: #50505a;
    }
    span{
      font-size: .12rem;
      color: #8a869e;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: .65rem;
        text-align: center;
        height: .3rem;
        line-height: .3rem;
        margin-left: .17rem;
        font-size: .13rem;
        margin-top: .12rem;
        color: #8a869e;
        label{
          display: inline-block;
          width: 100%;
          height: 100%;
          border: 1px solid #8a869e;
        }
        input{
          display: none;
          &:checked + label{
              color:#ff4d64;
              border: 1px solid #ff4d64;
          }
        }
        &.active {
          color: #ff4d64;
        }
      }
    }
  }
  button{
    display: inline-block;
    width: 1.3rem;
    height: .44rem;
    border: 1px solid #908ca3;
    color: #8a869e;
    margin-top: .2rem;
    margin-left: .3rem;
    background: #fff;
    color: #ff4d64;
  }
  .col{
    color: #fff;
    background: #ff4d64;
  }
}
</style>
