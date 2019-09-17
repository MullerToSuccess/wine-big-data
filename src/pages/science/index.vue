<template>
  <div id="science">
    <div class="banner"></div>
    <div class="science-content">
      <el-table :data="tableData" stripe style="width: 100%" @row-click="goDetail">
        <el-table-column prop="title" label="知识名称"></el-table-column>
        <el-table-column prop="createTime" label="发布时间"></el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-row type="flex" justify="center">
        <el-col :span="22">
          <el-pagination
            class="right"
            layout="total, prev, pager, next, jumper"
            :total='total'
            @current-change="currentPageChange"
          ></el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import science from "./axios/index";
import qs from "qs";
export default {
  name: "Science",
  data() {
    return {
      currentPage: 1, // 当前分页
      tableData: [],
      total:'', //总页数
    };
  },
  mounted() {
    this.listSincerityKnowledge();
  },
  watch: {
    currentPage: function(newPage) {
      this.listSincerityKnowledge();
    }
  },
  methods: {
    goDetail(row, column, event) {
      this.$router.push({
        name: "ScienceDetail",
        params: {
          id: row.id
        }
      });
    },
    // 分页科普数据
    listSincerityKnowledge() {
      let params = {
        currentPage: this.currentPage
      };
      science.listSincerityKnowledge(params).then(res => {
        this.tableData = res.data.records;
        this.total = res.data.total;
        console.log(this.tableData)
      });
    },
    currentPageChange(current) {
      this.currentPage = current;
    }
  }
};
</script>
<style lang='scss' scoped>
#science {
  width: 100%;
  margin: auto;
  .banner {
    width: 100%;
    height: 400px;
    background: url("../../assets/images/science-bg.png");
  }
  .science-content {
    width: 1200px;
    margin: 40px auto;
    height: 613px;
    // height: 913px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(224, 224, 224, 1);
  }
  .pagination {
    margin-top: 20px;
  }
}
</style>
