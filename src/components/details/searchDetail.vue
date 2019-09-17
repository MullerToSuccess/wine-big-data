<template>
  <div class="searchDetail">
    <div class="search-content">
      <div class="select-group">
        <img :src="selSrc" class="search-image" />
        <el-select v-model="value" placeholder="请选择" class="search-select" @select="changeSel">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="gap"></div>

      <el-input placeholder="请输入内容"  v-model="searchText"></el-input>
      <div class="search-btn" @click="goSearch()">
        <img src="@/assets/images/search-btn.png" alt />
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="名称" width="420">
          <template slot-scope="scope">
            <div class="title">
              {{ scope.row.name }}
              <span
                :class="{status: true,  off: scope.row.status }"
              >{{ scope.row.status ? '注销' : '存续' }}</span>
            </div>
            <span class="name-item">
              <img src="@/assets/images/phone-small.png" />
              统一社会信用代码:{{ scope.row.more1 }}
            </span>
            <br />
            <span class="name-item">
              <img src="@/assets/images/people-small.png" />
              法定代表人:{{ scope.row.more2 }}
            </span>
            <br />
            <span class="name-item">
              <img src="@/assets/images/address-small.png" />
              地址:{{ scope.row.more3 }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="评级" width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px; font-weight:bold">{{ scope.row.rank }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评分" width="300">
          <template slot-scope="scope">
            <span style="margin-left: 10px; font-weight:bold">{{ scope.row.grade }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="operate-btn" @click="goSearch(scope.$index, scope.row)">
              <span>查看企业诚信画像</span>
            </div>
            <!-- <el-button  @click="goSearch(scope.$index, scope.row)">查看企业诚信</el-button> -->
          </template>
        </el-table-column>
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
import src2 from "../../assets/images/search-people.png";
import src1 from "../../assets/images/search-company.png";
export default {
  name: "searchDetail",
  data() {
    return {
      selSrc: src1,
      listHeight: [],
      searchText: "",
      options: [
        {
          value: "1",
          label: "企业"
        },
        {
          value: "2",
          label: "法人代表"
        }
      ],
      value: "1",
      tableData: [
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "99",
          status: 1,
          more1:'91511500MA62A0WM8P',
          more2:'刘中国',
          more3:'四川省宜宾市翠屏区岷江西路150号'
        },
        {
          name: "贵州茅台酒厂有限责任公司",
          rank: "AAA",
          grade: "98",
          status: 1,
          more1:'915200002149908473',
          more2:'李保芳',
          more3:'贵州省贵阳市云岩区外环东路东山巷4号'
        },
        {
          name: "泸州老窖股份有限公司",
          rank: "AAA",
          grade: "96",
          status: 0,
          more1:'91510500204706718H',
          more2:'刘淼',
          more3:'四川泸州国窖广场'
        },
        {
          name: "陕西西凤酒股份有限公司",
          rank: "AAA",
          grade: "95",
          status: 0,
          more1:'91610300713576579H',
          more2:'张正',
          more3:'陕西省宝鸡市凤翔县柳林镇'
        },
        {
          name: "四川剑南春（集团）有限责任公司",
          rank: "AAA",
          grade: "94",
          status: 0,
          more1:'915106837175377539',
          more2:'乔天明',
          more3:'	绵竹市春溢街'
        }
      ]
    };
  },
  watch: {
    value: function(newVal) {
      if (newVal == 1) {
        console.log(this.selSrc);
        this.selSrc = src1;
      } else {
        console.log(this.selSrc);
        this.selSrc = src2;
      }
    }
  },
  mounted() {},
  methods: {
    search() {},
    goSearch(index, row) {
      console.log(index, row);
      this.$router.push({ name: "integrityDetail" });
    },
    changeSel(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped lang='scss'>
.searchDetail {
  width: 100%;

  /* ceshi  */
  // display: flex;

  .search-content {
    
    width: 60%;
    // margin: auto;
    margin-left: 20%;
    margin-top: 20px;
    display: flex;
    border: 1px solid rgba(224, 224, 224, 1);
    .select-group {
      // height: 58px;
      width: 200px;
      display: flex;
      align-content: center;
      align-items: center;
      // border: 1px solid rgba(224, 224, 224, 1);
      // border-right: 0;
      // padding: 2px;
    }
    .gap{
      width: 2px;
      height: 30px;
      background: #ccc;
      margin-top: 15px; 
      // line-height: 20px;
    }
  }
  .table {
    width: 60%;
    // margin: 20px auto;
    margin-left: 20%;
    margin-top: 20px;
    margin-bottom: 40px;
    border: 1px solid rgba(224, 224, 224, 1);
    .title {
      // width: 219px;
      // height: 20px;
      font-size: 20px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(22, 22, 22, 1);
      line-height: 24px;
      padding-left: 20px;
      .status {
        background: #ccc;
        border-radius: 5px;
        padding: 2px;
        // background: greenyellow;
        width: 44px;
        height: 19px;
        border: 1px solid rgba(0, 0, 0, 1);
        width: 24px;
        font-size: 12px;
        font-family: "MicrosoftYaHeiLight";
        font-weight: 300;
        color: rgba(22, 22, 22, 1);
        line-height: 24px;
      }
      .off {
        // background: red;
      }
    }
    .name-item {
      padding-left: 20px;
      display: inline-block;
      font-size: 14px;
      font-family: "MicrosoftYaHeiLight";
      font-weight: bold;
      color: rgba(22, 22, 22, 0.5);
      line-height: 24px;
      // opacity: 0.8;
      img {
        margin-right: 5px;
      }
    }
  }
  .pagination {
    margin-top: 20px;
  }
  .operate-btn {
    width: 144px;
    height: 35px;
    background: rgba(227, 36, 42, 1);
    border: 1px solid rgba(252, 13, 27, 1);
    border-radius: 18px;
    // line-height: 35px;
    text-align: center;
    span {
      width: 81px;
      height: 14px;
      font-size: 14px;
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 35px;
    }
    span:hover {
      cursor: pointer;
    }
  }
  .search-btn {
    width: 81px;
    height: 60px;
    background-color: rgba(227, 36, 42, 1);
    img {
      width: 20px;
      height: 20px;
      margin: 20px auto;
    }
  }
  .search-btn:hover {
    cursor: pointer;
  }
  .option-image {
    width: 20px;
    height: 20px;
  }
  .search-image {
    margin-left: 20px;
  }
}
</style>
