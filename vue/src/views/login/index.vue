<template>
  <div class="page">
    <Header v-title='tit'></Header>    
  	<div class="picture">
       <span class="imgs"></span> 
    </div>
    <div class="login-box" v-if="type == 'user'" >
        <input type="text" key="username-input" v-model="userName" placeholder="手机号/邮箱/会员名" />
        <input type="password" v-model="passWord" placeholder="请输入密码" />
        <div class='register'><a href="#">免费注册</a><a href="#">忘记密码</a></div>
        <div class="btn-group">
            <button class="btn red" @click="login('user')">登录</button>
            <button class="btn" @click="type='tel'">短信验证码登录</button>
        </div>
    </div>
    <div class="login-box" v-if="type == 'tel'" >
        <input type="text" key="userphone-input" v-model="userPhone" placeholder="请输入手机号" />
        <p>
            <input type="number" v-model.number="code" placeholder="校验码" />
            <a href="javascript:;">点击获取验证码</a>
        
        </p>
        <div class="btn-group">
            <button class="btn red" @click="login('tel')">登录</button>
            <button class="btn" @click="type='user'" >账号密码登录</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      type: 'user',
      userName: '',
      passWord: '',
      tel: '',
      code: '',
      tit: '登录'
    }
  },
  methods: {
    login (type) {
      let loginObj = {}
      if (type === 'user') {
        loginObj['userName'] = this.userName
        loginObj['passWord'] = this.passWord
      } else {
        loginObj['tel'] = this.tel
        loginObj['code'] = this.code
      }
      window.localStorage.setItem('userInformation', JSON.stringify(loginObj))
      let path = window.localStorage.getItem('toPath')
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    font-size: 20px;
    padding: 0.2rem;
    .picture{
    	height: 1rem;
    	line-height: .4rem;
    	text-align: center;
        position: relative;
        .imgs{
            display: inline-block;
            width: .68rem;
            height: .68rem;
            position: absolute;
            top: 50%;
            margin-left: -.34rem;
            margin-top: -.34rem;
            left: 50%;
            background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
            background-size: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .login-box{
        .register{
            padding-top: .2rem;
            display: flex;
            justify-content: space-between;
            a{
                font-size: .12rem;
                color: #575757;
            }
        }
        .btn-group{
            margin-top: 0.35rem;
            .btn{
                width: 100%;
                display: block;
                height: 0.4rem;
                border-radius: 0.4rem;
                text-align: center;
                line-height: 0.4rem;
                border: 1px solid #ff5000;
                background: transparent;
                color: #ff5000;
                margin: 0.15rem 0;
                &.red{
                    background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
                    color: #fff;
                }
            }
        }
        input{
            display: block;
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.12rem;
            border: 0;
            border-bottom: 1px solid #ff5000;
            margin-top: 0.1rem;
            &.-webkit-input-placeholder{
                color: #ccc;
            }
        }
        p{
            display: -webkit-box;
            margin-top: 0.1rem;
            border-bottom: 1px solid #ff5000;
            input{
                -webkit-box-flex: 1;
                margin-top: 0;
                border: 0;
            }
            a{
                font-size: 0.12rem;
                line-height: 0.4rem;
                display: block;
                color: #ff4d64;
            }
        }
    }
}
</style>
