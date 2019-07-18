<template>
  <!-- 企业诚信详情 -->
  <div class="integrityDetail">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/SystemSurvey')">首页</span> >
      <span @click="goRouter('/dynamics')">建设动态</span> >
      <span @click="goRouter('/')">部委诚信新闻</span>
    </div>
    <div class="content">
      <div class="content-left">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <!-- 详情 -->
      <div class="content-right" ref="itemWrapper">
        <div class="item-wrapper">
          <!-- 公司信息 -->
          <div class="content1">
            <div class="content-name">公司信息</div>
            <div class="detail-item">
              <div class="comoany-detail">
                <div class="left">
                  <span class="companyName">宜宾五粮液股份有限公司</span>
                  <span class="status">存续</span>
                  <!-- <span class="name-item">统一社会信用代码:91350200MA31U6548L</span>
                <span class="name-item">法定代表人:刘中国</span>
                  <span class="name-item">地址:四川省宜宾市翠屏区岷江西路150号</span>-->
                  <span class="name-item">
                    <img src="@/assets/images/phone-small.png" />
                    统一社会信用代码:91350200MA31U6548L
                  </span>
                  <span class="name-item">
                    <img src="@/assets/images/people-small.png" />
                    法定代表人:刘中国
                  </span>
                  <span class="name-item">
                    <img src="@/assets/images/address-small.png" />
                    地址:四川省宜宾市翠屏区岷江西路150号
                  </span>
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
          </div>

          <!-- 工商信息 -->
          <div class="content2">
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
          </div>

          <!-- 经营信息 -->
          <div class="content3">
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
          </div>

          <!--  司法信息 -->
          <div class="content4">
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
          </div>

          <!-- 产权信息 -->
          <div class="content5">
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
          </div>
        </div>
      </div>
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
      data: [
        {
          label: "工商信息",
          children: [
            {
              label: "工商信息",
              index: 1
            },
            {
              label: "股东",
              index: 2
            },
            {
              label: "高管",
              index: 3
            },
            {
              label: "分支机构",
              index: 4
            },
            {
              label: "对外投资",
              index: 5
            },
            {
              label: "海外投资机构",
              index: 6
            }
          ]
        },
        {
          label: "经营信息",
          children: [
            {
              label: "行政许可",
              index: 7
            },
            {
              label: "招标",
              index: 8
            },
            {
              label: "中标",
              index: 9
            },
            {
              label: "经营异常",
              index: 10
            },
            {
              label: "行政处罚",
              index: 11
            },
            {
              label: "欠税信息",
              index: 12
            },
            {
              label: "清算信息",
              index: 13
            },
            {
              label: "股权冻结",
              index: 14
            },
            {
              label: "股权质押",
              index: 15
            },
            {
              label: "动产抵押",
              index: 16
            },
            {
              label: "招聘",
              index: 17
            },
            {
              label: "咨询",
              index: 18
            },
            {
              label: "财务指标",
              index: 19
            }
          ]
        },
        {
          label: "司法信息",
          children: [
            {
              label: "开庭公告",
              index: 20
            },
            {
              label: "法院公告",
              index: 21
            },
            {
              label: "裁判文书",
              index: 22
            },
            {
              label: "被执行人",
              index: 23
            },
            {
              label: "失信被执行人",
              index: 24
            },
            {
              label: "司法拍卖",
              index: 25
            }
          ]
        },
        {
          label: "产权信息",
          children: [
            {
              label: "专利",
              index: 26
            },
            {
              label: "软件著作权",
              index: 27
            },
            {
              label: "商标",
              index: 28
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      listHeight: [],
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
    handleNodeClick(data) {
      console.log(data);
      let itemList = this.$refs.itemWrapper.getElementsByClassName(
        "detail-item"
      );
      let itemEl = itemList[data.index - 1];
      this.itemScroll.scrollToElement(itemEl, 300);
    },
    _initScroll() {
      // this.menuScroll = new BScroll(this.$refs.menuWrapper, {
      //   click: true
      // });
      this.itemScroll = new BScroll(this.$refs.itemWrapper, {
        probeType: 3
      });
      this.itemScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let itemList = this.$refs.itemWrapper.getElementsByClassName(
        "detail-item"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i];
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
  .routerTip {
    height: 50px;
    width: 1200px;
    text-align: left;
    margin: auto;
    line-height: 50px;
    span {
      height: 14px;
      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 48px;
    }
    span:hover {
      cursor: pointer;
    }
  }
  .content {
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
      .food-wrapper {
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
          font-size: 20px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: rgba(22, 22, 22, 1);
          line-height: 24px;
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
    ul {
      list-style-type: none;
      li:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
