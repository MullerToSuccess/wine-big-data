<template>
  <div id="science">
    <div class="banner"></div>
    <div class="science-content">
      <el-table :data="tableData" stripe style="width: 100%" @row-click='goDetail()'>
        <el-table-column prop="date" label="知识名称"></el-table-column>
        <el-table-column prop="name" label="发布时间"></el-table-column>
      </el-table>
    </div>

    <!-- <div class="pagination">
      <el-row type="flex" justify="center">
        <el-col :span="22">
          <el-pagination class="right" layout="total, prev, pager, next" :total="100"></el-pagination>
        </el-col>
      </el-row>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "science",
  data() {
    return {
      tableData: [
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "2019-05-21"
        }
      ]
    };
  },
  methods: {
    goDetail(item) {
      this.$router.push({
        name: "newsDetail"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#science {
  width: 100%;
  margin: auto;
  // height: 500px;
  .banner {
    width: 100%;
    height: 400px;
    background: url("../assets/images/science-bg.png");
  }
  .science-content {
    width: 1200px;
    margin: 40px auto;
    // height: 913px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(224, 224, 224, 1);
  }
  .pagination {
    margin-top: 20px;
  }
  // .el-table th {
  //   background:  rgba(246, 246, 246, 1) !important;
  // }
}
</style>
