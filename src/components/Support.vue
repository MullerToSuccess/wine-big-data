<template>
  <div id="support">
    <div class="support-content">
      <span class="title">酒店诚信大数据接入</span>
    </div>
    <div class="support-content">
      <span class="title">更多平台服务咨询</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
#support {
  width: 80%;
  margin: auto;
  height: 500px;
  display: flex;

  .support-content {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    margin-left: 20px;
  }
}
</style>
