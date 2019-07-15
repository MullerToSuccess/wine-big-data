<template>
  <div id="science">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="知识名称"></el-table-column>
      <el-table-column prop="name" label="发布时间"></el-table-column>
    </el-table>
    <div class="pagination">
      <el-row type="flex" justify="center">
        <el-col :span="22">
          <el-pagination class="right" layout="total, prev, pager, next" :total="100"></el-pagination>
        </el-col>
      </el-row>
    </div>
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
          name: "药酒到底是什么，是药还是酒？"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "药酒到底是什么，是药还是酒？"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "药酒到底是什么，是药还是酒？"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "药酒到底是什么，是药还是酒？"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "药酒到底是什么，是药还是酒？"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "药酒到底是什么，是药还是酒？"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "药酒到底是什么，是药还是酒？"
        },
        {
          date: "药酒到底是什么，是药还是酒？",
          name: "药酒到底是什么，是药还是酒？"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
#science {
  width: 80%;
  margin: auto;
  height: 500px;

  .science-content {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    margin-left: 20px;
  }
  .pagination{
      margin-top: 20px;
  }
}
</style>
