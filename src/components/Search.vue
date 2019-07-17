<template>
  <div id="search">
    <div class="banner"></div>
    <div class="search-content">
      <div class="tab-panel">
        <div @click="changeTab(1)" :class="{tab: true, tabBorder: activeName == 1}">企业</div>
        <div @click="changeTab(2)" :class="{tab: true, tabBorder: activeName == 2}">法定代表人</div>
      </div>
      <div class="input-panel">
        <el-input
          v-show="activeName == 1"
          placeholder="请输入企业名称关键字、注册号或统一社会信用代码查询"
          v-model="company"
        >
          <el-button slot="append" icon="el-icon-search" @click="searchPeople()"></el-button>
        </el-input>
        <el-input v-show="activeName == 2" placeholder="请输入法人代表名称" v-model="people">
          <el-button slot="append" icon="el-icon-search" @click="searchCompnay()"></el-button>
        </el-input>
      </div>
      <div class="search-item">
        <div class="item-content">
          <img src="@/assets/images/tab-1.png" alt />
          <div class="title">酒企诚信画像</div>
        </div>
        <div class="item-content">
          <img src="@/assets/images/tab-1.png" alt />
          <div class="title">酒企诚信评分</div>
        </div>
        <div class="item-content">
          <img src="@/assets/images/tab-1.png" alt />
          <div class="title">酒企风险扫描</div>
        </div>
        <div class="item-content">
          <img src="@/assets/images/tab-1.png" alt />
          <div class="title">诚信主体关联图谱</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      activeName: 1,
      people: "", // 搜索人
      company: "" // 搜索企业
    };
  },
  methods: {
    changeTab(index) {
      this.activeName = index;
    },
    searchCompnay() {
      this.$router.push({
        name: "searchDetail"
      });
    },
    searchPeople() {
      this.$router.push({
        name: "searchDetail"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#search {
  // height: 500px;
  .banner {
    width: 100%;
    height: 400px;
    background: url("../assets/images/supervision-bg.png");
  }
}
.search-content {
  width: 60%;
  margin: auto;
  .tab-panel {
    width: 240px;
    margin: auto;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    .tab {
      width: 120px;
      height: 30px;
      line-height: 30px;
      font-weight: 300;
      color: rgba(0, 0, 0, 1);
      border-bottom: 3px solid #ffffff;
      padding: 2px;
      margin: 10px;
    }
    .tab:hover {
      cursor: pointer;
    }
  }
  .input-panel {
    width: 500px;
    margin: 10px auto;
  }
}
.tabBorder {
  border-bottom: 3px solid red !important;
}
.search-item {
  width: 80%;
  margin: 144px auto;
  height: 500px;
  display: flex;
  .item-content {
    width: 200px;
    height: 200px;
    // border: 1px solid red;
    margin-left: 20px;
    img {
      width: 46px;
      height: 45px;
    }
  }
  .item-content:hover{
    cursor: pointer;
  }
}
</style>


