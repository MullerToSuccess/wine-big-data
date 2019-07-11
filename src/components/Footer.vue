<template>
  <div class="footer">
    <div>网站 | 关于我们</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    display: fixed;
    bottom: 0;
    background: #cccccc;
    width: 100%;
    height: 100px;
}
</style>
