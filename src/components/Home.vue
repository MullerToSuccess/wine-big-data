<template>
  <div class="content">
    <div class="tab-content">
      <div @click="scrollTab(index)" class="tab-item" v-for="(tab, index) in tabs" :key="index">{{ tab }}</div>
    </div>
    <div ref="content0" class="tab1-content">1</div>
    <div ref="content1" class="tab2-content">2</div>
    <div ref="content2" class="tab3-content">3</div>
    <div ref="content3" class="tab4-content">4</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tabs: ["政府背景", "建设宗旨", "评价模式和流程", "建设动态"]
    };
  },
  methods: {
    scrollTab(index){
      let farTop = this.$refs['content'+ index].offsetHeight
      console.log(11111111, farTop)
      
    }
    // scrollTop
    // var city_top = $('#city_top').offset().top;
    // $('.city_li').click(function () {
    //     $('html,body').animate({scrollTop:city_top},500);
    // })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.content {
  // height: 500px;
}
.tab-content {
  display: flex;
  align-content: center;
  align-items: center;
  .tab-item {
    width: 25%;
    height: 50px;
    line-height: 50px;
  }
}
.tab1-content,
.tab2-content,
.tab3-content,
.tab4-content {
  height: 200px;
  width: 100%;
  background: #ccc;
  margin: 10px 0;
}
</style>
