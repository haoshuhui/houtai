<template>
  <header class="header-bar">
    <div class="icon-group left-group">
      <slot name="left-group"></slot>
    </div>
    <slot name="address" class="addres"></slot>
    <div class="icon-group right-group">
      <slot name="right-group"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-bar{
  position: fixed;
  top: 0;
  width: 100%;
  height: .4rem;
  background: #fff;
  border-bottom:1px solid #eee;
  a{
    display: inline-block;
    font-size:0.14rem;
    color:#ccc;
    padding-top: .1rem;
    padding-left: .1rem;
    }
  .icon-group{
    padding: 0 0.1rem;
    display: inline-block;
    line-height: .4rem;
    &.left-group{
      float: left;
    }
    &.right-group{
      float: right;
    }
  }
  .addres{
      padding-top: .1rem;
  }
}
</style>
