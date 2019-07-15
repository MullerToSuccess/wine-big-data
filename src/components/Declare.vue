<template>
  <div id="declare">
    <div class="declare-form">
      <img src="@/assets/wine-back1.png" />
      <div class="declare-title">资质填报</div>
      <div class="declare-status">去更新</div>
    </div>
    <div class="declare-form">
      <img src="@/assets/wine-back1.png" />
      <div class="declare-title">奖励填报</div>
      <div class="declare-status">去更新</div>
    </div>
    <div class="declare-form">
      <img src="@/assets/wine-back1.png" />
      <div class="declare-title">财务数据填报</div>
      <div class="declare-status">去更新</div>
    </div>
    <div class="declare-form">
      <img src="@/assets/wine-back1.png" />
      <div class="declare-title">管理数据填报</div>
      <div class="declare-status">去更新</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Declare",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#declare {
  width: 80%;
  margin: auto;
  .declare-form {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    width: 80%;
    height: 120px;
    border: 1px solid #cccccc;
    align-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    .declare-title {
      text-align: left;
      margin-left: 20px;
      font-size: 20px;
      font-weight: bold;
      width: 80%;
    }
    .declare-status {
      float: right;
    }
  }
}
</style>

