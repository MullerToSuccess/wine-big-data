<template>
  <div id="home">
    <Header />
    <router-view />
    <Footer />
    <!-- <template>
      Scroll down to see the bottom-right button.
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </template> -->
  </div>
</template>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  data() {
    return {
      tabs: ["政府背景", "建设宗旨", "评价模式和流程", "建设动态"]
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    scrollTab(index) {
      let farTop = this.$refs["content" + index].offsetHeight;
      console.log(11111111, farTop);
    }
    // scrollTop
    // var city_top = $('#city_top').offset().top;
    // $('.city_li').click(function () {
    //     $('html,body').animate({scrollTop:city_top},500);
    // })
  }
};
</script>

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
