<template>
  <div id="search">
    <div class="search-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="企业" name="first">
          <el-input suffix-icon="el-icon-search" placeholder="请输入企业名称关键字、注册号或统一社会信用代码查询" v-model="filterText"></el-input>
        </el-tab-pane>
        <el-tab-pane label="法定代表人" name="second">
          <el-input suffix-icon="el-icon-search" placeholder="请输入法人代表名称" v-model="filterText"></el-input>
        </el-tab-pane>
      </el-tabs>
      <div class="result-content">
          搜索结果
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      activeName: "second",
      filterText: "" // 搜索内容
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
#search {
  height: 500px;
}
.search-content {
  width: 60%;
  margin: auto;
}
</style>


