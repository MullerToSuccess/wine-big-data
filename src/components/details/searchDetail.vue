<template>
  <div class="searchDetail">
    <div class="search-content">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input placeholder v-model="searchText">
        <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
      </el-input>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="名称">
          <template slot-scope="scope">
            <div class="title">
              {{ scope.row.name }}
              <span
                :class="{status: true,  off: scope.row.status }"
              >{{ scope.row.status ? '注销' : '存续' }}</span>
            </div>
            <span class="name-item">统一社会信用代码:{{ scope.row.name }}</span>
            <span class="name-item">法定代表人:{{ scope.row.name }}</span>
            <span class="name-item">地址:{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评级" width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px; font-weight:bold">{{ scope.row.rank }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评分" width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px; font-weight:bold">{{ scope.row.grade }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="goSearch(scope.$index, scope.row)">查看企业诚信</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-row type="flex" justify="center">
        <el-col :span="22">
          <el-pagination class="right" layout="total, prev, pager, next" :total="100"></el-pagination>
        </el-col>
      </el-row>
    </div>

    <!-- 测试 -->
    <div class="menu-wrapper" ref='menuWrapper'>
      <ul>
        <!--  :class="{'current':currentIndex === $index}" 就是根据currentIndex应用左侧列表被点中的样式 -->
        <li
          v-for="(item, index) in goods"
          class="menu-item"
          :key="index"
          :class="{'current':currentIndex === index}"
          @click="selectMenu(index,$event)"
        >
          <span class="text border-1px">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="food-wrapper" ref='foodWrapper'>
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="food-list food-list-hook">
          <h1 class="title1">{{item.name}}</h1>
          <ul>
            <li v-for="(food, index) in item.foods" :key="index" class="food-item border-1px">
              <div class="content1">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                  <div class="price">
                    <span class="now">¥{{food.price}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
  name: "searchDetail",
  data() {
    return {
      listHeight: [],
      goods: [
        {
          name: "测试",
          foods: [
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            }
          ]
        },
        {
          name: "测试",
          foods: [
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            }
          ]
        },
        {
          name: "测试",
          foods: [
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            }
          ]
        },
        {
          name: "测试",
          foods: [
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            }
          ]
        },
        {
          name: "测试",
          foods: [
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            },
            {
              name: "ceshi",
              description: "xxxxxxxxxxx",
              rating: 11,
              price: 1111
            }
          ]
        }
      ],
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
      value: "",
      tableData: [
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "80",
          status: 1
        },
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "80",
          status: 1
        },
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "80",
          status: 0
        },
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "80",
          status: 0
        },
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "80",
          status: 0
        },
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "80",
          status: 0
        },
        {
          name: "宜宾五粮液股份有限公司",
          rank: "AAA",
          grade: "80",
          status: 0
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
      this._calculateHeight();
    });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    search() {},
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodWrapper, {
        probeType: 3
      });
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    goSearch(index, row) {
      console.log(index, row);
      this.$router.push({ name: "integrityDetail" });
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      console.log(111111111, el)
      this.foodsScroll.scrollToElement(el, 300);
    }
  }
};
</script>

<style scoped lang='scss'>
.searchDetail {
  width: 100%;

  /* ceshi  */
  display: flex;
  .menu-wrapper{
    width: 30%;
    height: 500px;
  }
  .food-wrapper{
    width: 60%;
    height: 300px;
    overflow: hidden;
  }

  .search-content {
    width: 60%;
    margin: auto;
    display: flex;
  }
  .table {
    width: 60%;
    margin: auto;
    .title {
      font-size: 20px;
      font-weight: bold;
      .status {
        font-size: 14px;
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 5px;
        padding: 5px;
        background: greenyellow;
      }
      .off {
        background: red;
      }
    }
    .name-item {
      display: inline-block;
    }
  }
  .pagination {
    margin-top: 20px;
  }
}
</style>
