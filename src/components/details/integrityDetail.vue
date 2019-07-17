<template>
  <!-- 企业诚信详情 -->
  <div class="integrityDetail">
    <div class="content-left">
      <div class="menu-wrapper" ref="menuWrapper">
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
    </div>
    <!-- 详情 -->
    <div class="content-right">
      <div class="food-wrapper" ref="foodWrapper">
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
      <!-- 公司信息 -->
      <!-- <div class="content1">
        <div class="content-name">公司信息</div>
        <div class="detail-item">
          <div class="comoany-detail">
            <div class="left">
              <span class="companyName">宜宾五粮液股份有限公司</span>
              <span class="status">存续</span>
              <span class="name-item">统一社会信用代码:91350200MA31U6548L</span>
              <span class="name-item">法定代表人:刘中国</span>
              <span class="name-item">地址:四川省宜宾市翠屏区岷江西路150号</span>
              <span class="name-item contact">关联图谱分析</span>
            </div>
            <div class="right">
              <span>企业评分与评级</span>
            </div>
          </div>
          <div class="risk">
            <div>风险描述</div>
            <div>
              <span>扫描时间：2019-06-01 01:18:58</span>
              <span>风险指数</span>
              <span>自身风险</span>
              <span>关联方风险</span>
              <div>查看详情</div>
            </div>
          </div>
        </div>
      </div>-->

      <!-- 工商信息 -->
      <!-- <div class="content2">
        <div class="content-name">工商信息</div>
        <div class="detail-item">
          <div class="title">工商信息</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="酒企名称"></el-table-column>
            <el-table-column prop="name" label="统一社会信用代码"></el-table-column>
            <el-table-column prop="name" label="地区"></el-table-column>
            <el-table-column prop="name" label="诚信评级"></el-table-column>
            <el-table-column prop="name" label="证书编号"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">股东</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="姓名"></el-table-column>
            <el-table-column prop="name" label="认缴出资金额"></el-table-column>
            <el-table-column prop="name" label="认缴出资比例"></el-table-column>
            <el-table-column prop="name" label="认缴出资方式"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">高管</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="姓名"></el-table-column>
            <el-table-column prop="name" label="职务"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">分支机构</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="name" label="地址"></el-table-column>
            <el-table-column prop="name" label="负责人"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">对外投资</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="姓名"></el-table-column>
            <el-table-column prop="name" label="职务"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">海外投资机构</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="公司名称"></el-table-column>
            <el-table-column prop="name" label="经营范围"></el-table-column>
            <el-table-column prop="name" label="国家/地区"></el-table-column>
            <el-table-column prop="name" label="核准日期"></el-table-column>
          </el-table>
        </div>
      </div>-->

      <!-- 经营信息 -->
      <!-- <div class="content3">
        <div class="content-name">经营信息</div>
        <div class="detail-item">
          <div class="title">行政许可</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="行政许可决定文书"></el-table-column>
            <el-table-column prop="name" label="审批类别"></el-table-column>
            <el-table-column prop="name" label="许可内容"></el-table-column>
            <el-table-column prop="name" label="许可机关"></el-table-column>
            <el-table-column prop="name" label="许可决定日"></el-table-column>
            <el-table-column prop="name" label="许可截止日"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">招标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="所属行业"></el-table-column>
            <el-table-column prop="name" label="地区"></el-table-column>
            <el-table-column prop="name" label="发布日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">中标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="项目名称"></el-table-column>
            <el-table-column prop="name" label="所属行业"></el-table-column>
            <el-table-column prop="name" label="地区"></el-table-column>
            <el-table-column prop="name" label="发布日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">经营异常</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="列入经营异常目录原因"></el-table-column>
            <el-table-column prop="name" label="作出决定机关"></el-table-column>
            <el-table-column prop="name" label="列入日期"></el-table-column>
            <el-table-column prop="name" label="列出日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">行政处罚</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="文书号"></el-table-column>
            <el-table-column prop="name" label="违法事实"></el-table-column>
            <el-table-column prop="name" label="处罚依据"></el-table-column>
            <el-table-column prop="name" label="处罚机关"></el-table-column>
            <el-table-column prop="name" label="发布日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">欠税信息</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="欠税税种"></el-table-column>
            <el-table-column prop="name" label="欠税金额"></el-table-column>
            <el-table-column prop="name" label="税务机关"></el-table-column>
            <el-table-column prop="name" label="当前状态"></el-table-column>
            <el-table-column prop="name" label="列出日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">清算信息</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="债券承接人"></el-table-column>
            <el-table-column prop="name" label="债务承接人"></el-table-column>
            <el-table-column prop="name" label="清算组负责人"></el-table-column>
            <el-table-column prop="name" label="清算完结情况"></el-table-column>
            <el-table-column prop="name" label="清算完结日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">股权冻结</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="冻结文号"></el-table-column>
            <el-table-column prop="name" label="冻结金额（万元)"></el-table-column>
            <el-table-column prop="name" label="冻结机关"></el-table-column>
            <el-table-column prop="name" label="冻结起始日"></el-table-column>
            <el-table-column prop="name" label="冻结截止日"></el-table-column>
            <el-table-column prop="name" label="解冻机关"></el-table-column>
            <el-table-column prop="name" label="解冻日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">股权质押</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">动产抵押</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="抵押权人"></el-table-column>
            <el-table-column prop="name" label="被担保债权数额（万元）"></el-table-column>
            <el-table-column prop="name" label="被担保主债权种类"></el-table-column>
            <el-table-column prop="name" label="登记机关"></el-table-column>
            <el-table-column prop="name" label="登记日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">股权质押</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">股权质押</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
      </div>-->

      <!--  司法信息 -->
      <!-- <div class="content4">
        <div class="content-name">司法信息</div>
        <div class="detail-item">
          <div class="title">商标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">商标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">商标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">商标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">商标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">商标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
      </div>-->

      <!-- 产权信息 -->
      <!-- <div class="content5">
        <div class="content-name">产权信息</div>
        <div class="detail-item">
          <div class="title">专利</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">软件著作权</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
        <div class="detail-item">
          <div class="title">商标</div>
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="序号"></el-table-column>
            <el-table-column prop="name" label="登记编号"></el-table-column>
            <el-table-column prop="name" label="出质人"></el-table-column>
            <el-table-column prop="name" label="质权人"></el-table-column>
            <el-table-column prop="name" label="出质金额"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column prop="name" label="备案日期"></el-table-column>
          </el-table>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "integrityDetail",
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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
  methods: {
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      console.log(111111111, el);
      this.foodsScroll.scrollToElement(el, 300);
    },
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
    }
  }
};
</script>

<style scoped lang='scss'>
.integrityDetail {
  //   height: 500px;
  width: 80%;
  margin: auto;
  display: flex;
  align-content: center;
  align-items: center;
  .content-left,
  .content-right {
    height: 800px;
    border: 1px solid #ccc;
    margin: 10px;
    overflow: scroll;
    .food-wrapper{
        height: 800px;
        overflow: hidden;
    }
  }
  .content-left {
    width: 20%;
  }
  .content-right {
    width: 70%;
    .content1,
    .content2,
    .content3,
    .content4,
    .content5 {
      width: 90%;
      margin: 10px auto;
      border: 1px solid #ccc;
      .content-name {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin-left: 20px;
        border-bottom: 5px solid #ccc;
      }
    }
    .detail-item {
      width: 90%;
      height: 300px;
      //   overflow: hidden;
      margin: 10px auto;
      //   border: 1px solid #ccc;
      .title {
        font-weight: bold;
        text-align: left;
        margin-left: 20px;
      }
    }
    .comoany-detail {
      display: flex;
      //   align-content: center;
      align-items: center;
      .left {
        width: 70%;
        text-align: left;
        margin-left: 20px;
        .companyName {
          font-size: 20px;
          font-weight: bold;
        }
        .contact {
          font-size: 14px;
          width: 100px;
          height: 20px;
          background: #ccc;
          border-radius: 5px;
          padding: 5px;
          background: greenyellow;
        }
        span {
          display: block;
          height: 30px;
        }
      }
      .right {
        width: 30%;
      }
    }
    .risk {
      height: 100px;
      width: 100%;
      border-top: 1px solid red;
    }
  }
}
</style>
