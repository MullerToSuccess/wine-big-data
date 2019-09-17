<template>
  <!-- 企业诚信详情 -->
  <div class="integrityDetail">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/search')">酒企诚信查询</span> >
      <span @click="goRouter('/search/integrityDetail')">诚信查询详情</span>
    </div>
    <div class="content">
      <div class="content-left">
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
          :render-content="renderContent"
          default-expand-all
        ></el-tree>
      </div>
      <!-- 详情 -->
      <div class="content-right" ref="itemWrapper">
        <div class="item-wrapper">
          <!-- 公司信息 -->
          <div class="content1">
            <div class="detail-item">
              <div class="comoany-detail">
                <div class="left">
                  <div style="display: flex">
                    <span class="companyName">宜宾五粮液股份有限公司</span>
                    <span class="status">存续</span>
                  </div>

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
                </div>
                <div class="right">
                  <span class="right-tip">企业评分与评级</span>
                  <span>
                    <img style="margin-top: 30px" src="../../assets/images/echart-1.png" alt />
                  </span>
                  <span class="name-item contact" @click="goContact">
                    <img src="../../assets/images/icon-contact.png" />
                    <div>关联图谱分析</div>
                  </span>
                </div>
              </div>
              <div class="risk">
                <div class="title">风险描述</div>
                <div class="risk-content">
                  <span class="item">扫描时间：2019-06-01 01:18:58</span>
                  <span class="item">
                    风险指数：
                    <span class="value">65</span>
                  </span>
                  <span class="item">
                    自身风险：
                    <span class="value">1项</span>
                  </span>
                  <span class="item">
                    关联方风险：
                    <span class="value">5项</span>
                  </span>
                  <span class="name-item contact" @click="goInfo">查看详情</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 工商信息 -->
          <div class="content2">
            <div class="content-name">工商信息</div>
            <div class="detail-item industryInfo">
              <div class="title">
                <div class="tip-gap"></div>工商信息
              </div>
              <industryInfo />
              <!-- <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="酒企名称"></el-table-column>
                <el-table-column prop="name" label="统一社会信用代码"></el-table-column>
                <el-table-column prop="name" label="地区"></el-table-column>
                <el-table-column prop="name" label="诚信评级"></el-table-column>
                <el-table-column prop="name" label="证书编号"></el-table-column>
              </el-table>-->
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>股东
              </div>
              <el-table :data="tableData1" style="width: 100%">
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="more" label="认缴出资金额"></el-table-column>
                <el-table-column prop="date" label="认缴出资比例"></el-table-column>
                <el-table-column prop="more" label="认缴出资方式"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>高管
              </div>
              <el-table :data="tableData2" style="width: 100%">
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="date" label="职务"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>分支机构
              </div>
              <el-table :data="tableData3" style="width: 100%">
                <el-table-column prop="index" label="序号"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="date" label="负责人"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>对外投资
              </div>
              <el-table :data="tableData4" style="width: 100%">
                <el-table-column prop="name" label="公司名称"></el-table-column>
                <el-table-column prop="date" label="投资日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>海外投资机构
              </div>
              <el-table :data="tableData5" style="width: 100%">
                <el-table-column prop="index" label="序号"></el-table-column>
                <el-table-column prop="name" label="公司名称"></el-table-column>
                <el-table-column prop="more1" label="经营范围"></el-table-column>
                <el-table-column prop="more2" label="国家/地区"></el-table-column>
                <el-table-column prop="more3" label="核准日期"></el-table-column>
              </el-table>
            </div>
          </div>

          <!-- 经营信息 -->
          <div class="content3">
            <div class="content-name">经营信息</div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>行政许可
              </div>
              <el-table :data="tableData6" style="width: 100%">
                <el-table-column prop="index" label="序号"></el-table-column>
                <el-table-column prop="more1" label="行政许可决定文书"></el-table-column>
                <el-table-column prop="more2" label="审批类别"></el-table-column>
                <el-table-column prop="more3" label="许可内容"></el-table-column>
                <el-table-column prop="more4" label="许可机关"></el-table-column>
                <el-table-column prop="more5" label="许可决定日"></el-table-column>
                <el-table-column prop="more6" label="许可截止日"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>招标
              </div>
              <el-table :data="tableData7" style="width: 100%">
                <el-table-column prop="name" label="项目名称"></el-table-column>
                <el-table-column prop="more1" label="所属行业"></el-table-column>
                <el-table-column prop="more2" label="地区"></el-table-column>
                <el-table-column prop="more3" label="发布日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>中标
              </div>
              <el-table :data="tableData8" style="width: 100%">
                <el-table-column prop="more1" label="项目名称"></el-table-column>
                <el-table-column prop="more2" label="所属行业"></el-table-column>
                <el-table-column prop="more3" label="地区"></el-table-column>
                <el-table-column prop="more4" label="发布日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>经营异常
              </div>
              <el-table :data="tableData9" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="列入经营异常目录原因"></el-table-column>
                <el-table-column prop="more3" label="作出决定机关"></el-table-column>
                <el-table-column prop="more4" label="列入日期"></el-table-column>
                <el-table-column prop="more5" label="列出日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>行政处罚
              </div>
              <el-table :data="tableData10" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="文书号"></el-table-column>
                <el-table-column prop="more3" label="违法事实"></el-table-column>
                <el-table-column prop="more4" label="处罚依据"></el-table-column>
                <el-table-column prop="more5" label="处罚机关"></el-table-column>
                <el-table-column prop="more6" label="发布日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>欠税信息
              </div>
              <el-table :data="tableData11" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="欠税税种"></el-table-column>
                <el-table-column prop="more3" label="欠税金额"></el-table-column>
                <el-table-column prop="more4" label="税务机关"></el-table-column>
                <el-table-column prop="more5" label="当前状态"></el-table-column>
                <el-table-column prop="more6" label="列出日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>清算信息
              </div>
              <el-table :data="tableData12" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="债券承接人"></el-table-column>
                <el-table-column prop="more3" label="债务承接人"></el-table-column>
                <el-table-column prop="more4" label="清算组负责人"></el-table-column>
                <el-table-column prop="more5" label="清算完结情况"></el-table-column>
                <el-table-column prop="more6" label="清算完结日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>股权冻结
              </div>
              <el-table :data="tableData13" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="冻结文号"></el-table-column>
                <el-table-column prop="more3" label="冻结金额（万元)"></el-table-column>
                <el-table-column prop="more4" label="冻结机关"></el-table-column>
                <el-table-column prop="more5" label="冻结起始日"></el-table-column>
                <el-table-column prop="more6" label="冻结截止日"></el-table-column>
                <el-table-column prop="more7" label="解冻机关"></el-table-column>
                <el-table-column prop="more8" label="解冻日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>股权质押
              </div>
              <el-table :data="tableData14" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="登记编号"></el-table-column>
                <el-table-column prop="more3" label="出质人"></el-table-column>
                <el-table-column prop="more4" label="质权人"></el-table-column>
                <el-table-column prop="more5" label="出质金额"></el-table-column>
                <el-table-column prop="more6" label="状态"></el-table-column>
                <el-table-column prop="more7" label="备案日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>招聘
              </div>
              <el-table :data="tableData15" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="登记编号"></el-table-column>
                <el-table-column prop="more3" label="抵押权人"></el-table-column>
                <el-table-column prop="more4" label="被担保债权数额（万元）"></el-table-column>
                <el-table-column prop="more5" label="被担保主债权种类"></el-table-column>
                <el-table-column prop="more6" label="登记机关"></el-table-column>
                <el-table-column prop="more7" label="登记日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>
              </div>
              <!-- <el-table :data="tableData14" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="登记编号"></el-table-column>
                <el-table-column prop="more3" label="出质人"></el-table-column>
                <el-table-column prop="more4" label="质权人"></el-table-column>
                <el-table-column prop="more5" label="出质金额"></el-table-column>
                <el-table-column prop="more6" label="状态"></el-table-column>
                <el-table-column prop="more7" label="备案日期"></el-table-column>
              </el-table> -->
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>
              </div>
              <!-- <el-table :data="tableData17" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="登记编号"></el-table-column>
                <el-table-column prop="more3" label="出质人"></el-table-column>
                <el-table-column prop="more4" label="质权人"></el-table-column>
                <el-table-column prop="more5" label="出质金额"></el-table-column>
                <el-table-column prop="more6" label="状态"></el-table-column>
                <el-table-column prop="more7" label="备案日期"></el-table-column>
              </el-table> -->
            </div>
          </div>

          <!--  司法信息 -->
          <div class="content4">
            <div class="content-name">司法信息</div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>开庭公告
              </div>
              <el-table :data="tableData16" style="width: 100%">
                <el-table-column prop="more1" label="案号"></el-table-column>
                <el-table-column prop="more2" label="当事人"></el-table-column>
                <el-table-column prop="more3" label="案由"></el-table-column>
                <el-table-column prop="more4" label="审查法院"></el-table-column>
                <el-table-column prop="more5" label="开庭日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>法院公告
              </div>
              <el-table :data="tableData17" style="width: 100%">
                <el-table-column prop="more1" label="公告内容"></el-table-column>
                <el-table-column prop="more2" label="公告类型"></el-table-column>
                <el-table-column prop="more3" label="公告人"></el-table-column>
                <el-table-column prop="more4" label="公告日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>裁判文书
              </div>
              <el-table :data="tableData18" style="width: 100%">
                <el-table-column prop="more1" label="案号"></el-table-column>
                <el-table-column prop="more2" label="目标公司在案件中的当事人类型"></el-table-column>
                <el-table-column prop="more3" label="案件标题"></el-table-column>
                <el-table-column prop="more4" label="案由"></el-table-column>
                <el-table-column prop="more5" label="对方当事人"></el-table-column>
                <el-table-column prop="more6" label="案件结果"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>被执行人
              </div>
              <el-table :data="tableData19" style="width: 100%">
                <el-table-column prop="more1" label="案号"></el-table-column>
                <el-table-column prop="more2" label="执行标的"></el-table-column>
                <el-table-column prop="more3" label="执行法院"></el-table-column>
                <el-table-column prop="more4" label="状态"></el-table-column>
                <el-table-column prop="more5" label="立案日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>失信被执行人
              </div>
              <el-table :data="tableData20" style="width: 100%">
                <el-table-column prop="more1" label="案号"></el-table-column>
                <el-table-column prop="more2" label="失信被执行人行为具体情形"></el-table-column>
                <el-table-column prop="more3" label="执行法院"></el-table-column>
                <el-table-column prop="more4" label="发布日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>司法拍卖
              </div>
              <el-table :data="tableData21" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="标题"></el-table-column>
                <el-table-column prop="more3" label="起拍价"></el-table-column>
                <el-table-column prop="more4" label="拍卖法院"></el-table-column>
                <el-table-column prop="more5" label="处置依据"></el-table-column>
                <el-table-column prop="more6" label="拍卖日期"></el-table-column>
              </el-table>
            </div>
          </div>

          <!-- 产权信息 -->
          <div class="content5">
            <div class="content-name">产权信息</div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>专利
              </div>
              <el-table :data="tableData22" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="名称"></el-table-column>
                <el-table-column prop="more3" label="公开号"></el-table-column>
                <el-table-column prop="more4" label="发明人"></el-table-column>
                <el-table-column prop="more5" label="公开日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>软件著作权
              </div>
              <el-table :data="tableData23" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="名称"></el-table-column>
                <el-table-column prop="more3" label="登记号"></el-table-column>
                <el-table-column prop="more4" label="分类号"></el-table-column>
                <el-table-column prop="more5" label="版本号"></el-table-column>
                <el-table-column prop="more6" label="登记日期"></el-table-column>
              </el-table>
            </div>
            <div class="detail-item">
              <div class="title">
                <div class="tip-gap"></div>商标
              </div>
              <el-table :data="tableData24" style="width: 100%">
                <el-table-column prop="more1" label="序号"></el-table-column>
                <el-table-column prop="more2" label="商标"></el-table-column>
                <el-table-column prop="more3" label="名称"></el-table-column>
                <el-table-column prop="more4" label="注册号"></el-table-column>
                <el-table-column prop="more5" label="类别"></el-table-column>
                <el-table-column prop="more6" label="申请日期"></el-table-column>
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
import industryInfo from "../common/industryInfo";

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
  components: {
    industryInfo
  },
  data() {
    return {
      data: [
        {
          label: "工商信息",
          children: [
            {
              label: "工商信息",
              index: 1,
              num: 100
            },
            {
              label: "股东",
              index: 2,
              num: 198
            },
            {
              label: "高管",
              index: 3,
              num: 0
            },
            {
              label: "分支机构",
              index: 4,
              num: 10
            },
            {
              label: "对外投资",
              index: 5,
              num: 0
            },
            {
              label: "海外投资机构",
              index: 6,
              num: 55
            }
          ]
        },
        {
          label: "经营信息",
          children: [
            {
              label: "行政许可",
              index: 7,
              num: 10
            },
            {
              label: "招标",
              index: 8,
              num: 10
            },
            {
              label: "中标",
              index: 9,
              num: 10
            },
            {
              label: "经营异常",
              index: 10,
              num: 10
            },
            {
              label: "行政处罚",
              index: 11,
              num: 10
            },
            {
              label: "欠税信息",
              index: 12,
              num: 10
            },
            {
              label: "清算信息",
              index: 13,
              num: 10
            },
            {
              label: "股权冻结",
              index: 14,
              num: 10
            },
            {
              label: "股权质押",
              index: 15,
              num: 10
            },
            {
              label: "动产抵押",
              index: 16,
              num: 10
            },
            {
              label: "招聘",
              index: 17,
              num: 10
            },
            {
              label: "咨询",
              index: 18,
              num: 10
            },
            {
              label: "财务指标",
              index: 19,
              num: 10
            }
          ]
        },
        {
          label: "司法信息",
          children: [
            {
              label: "开庭公告",
              index: 20,
              num: 10
            },
            {
              label: "法院公告",
              index: 21,
              num: 10
            },
            {
              label: "裁判文书",
              index: 22,
              num: 10
            },
            {
              label: "被执行人",
              index: 23,
              num: 10
            },
            {
              label: "失信被执行人",
              index: 24,
              num: 10
            },
            {
              label: "司法拍卖",
              index: 25,
              num: 10
            }
          ]
        },
        {
          label: "产权信息",
          children: [
            {
              label: "专利",
              index: 26,
              num: 10
            },
            {
              label: "软件著作权",
              index: 27,
              num: 10
            },
            {
              label: "商标",
              index: 28,
              num: 10
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
          date: "1",
          name: "xxx",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2",
          name: "xxx",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "3",
          name: "xxx",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "4",
          name: "xxx",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData1: [
        {
          more: "",
          date: "0.50%",
          name:
            "国泰君安证券资管-中国银行-国泰君安君享五粮液1号集合资产管理计划"
        },
        {
          more: "",
          date: "0.50%",
          name:
            "国泰君安证券资管-中国银行-国泰君安君享五粮液1号集合资产管理计划"
        }
      ],
      tableData2: [
        { name: "蒋文格", date: "董事" },
        { name: "唐圣云", date: "副总经理" },
        { name: "邱萍对", date: "监事" }
      ],
      tableData3: [
        {
          name: "四川省宜宾五粮液酒厂",
          address: "宜宾市岷江西路150号",
          date: "王国春",
          index: 1
        },
        {
          name: "四川省宜宾五粮液供销有限公司",
          address: "四川省宜宾市岷江西路150号",
          date: "李曙光",
          index: 2
        }
      ],
      tableData4: [
        { name: "宜宾五粮液创艺酒产业有限公司", date: "2015-01-19" },
        { name: "瞭望东方传媒有限公司", date: "2015-01-08" },
        { name: "河南五谷春酒业股份有限公司", date: "2014-11-28" }
      ],
      tableData5: [
        {
          name: "五粮液集团有限公司",
          more1: "进出口贸易",
          index: 1,
          more2: "中国香港",
          more3: "2018/7/5"
        }
      ],
      tableData6: [
        {
          index: 1,
          more1: "(京)字第00208号",
          more2: "食品经营许可证",
          more3: "--",
          more4: "变更",
          more5: "成都市食品药品监督管理局",
          more6: "2017/10/17",
          more7: "2022/10/16"
        }
      ],
      tableData7: [
        {
          name:
            "宜宾五粮液股份有限公司质量检测中心CNAS实验室改造及配套设备采购项目—实验室改造比选公告",
          more1: "--",
          more2: "四川省",
          more3: "2019/6/12"
        }
      ],
      tableData8: [
        {
          more1:
            "四川省旅游局信息中心旅游大数据分析平台服务采购项目单一来源结果公告",
          more2: "网络设备",
          more3: "四川省",
          more4: "2017/7/28"
        },
        {
          more1:
            "四川省成都市金融工作办公室成都市防范非法集资大数据监测预警系统建设采购项目（二次）公开招标结果公告",
          more2: "--",
          more3: "四川省",
          more4: "2017/7/28"
        },
        {
          more1:
            "四川省旅游信息中心四川旅游大数据分析平台建设项目公开招标结果公告",
          more2: "--",
          more3: "四川省",
          more4: "2017/7/28"
        },
        {
          more1:
            "四川省旅游信息中心四川旅游大数据分析平台建设项目公开招标结果公告",
          more2: "标签、标牌",
          more3: "四川省",
          more4: "2017/7/28"
        }
      ],
      tableData9: [
        {
          more1: "1",
          more2: "通过登记的住所或者经营场所无法联系的",
          more3: "北京市工商行政管理局朝阳分局",
          more4: "2018/10/8",
          more5: "2018/10/8"
        }
      ],
      tableData10: [
        {
          more1: "1",
          more2: "(德阳)应急罚〔2019〕15号",
          more3:
            "违反了《中华人民共和国安全生产法》第二十二条第二、五、六项和《四川省安全生产条例》第四条的规定",
          more4:
            "依据《四川省安全生产条例》第七十八条第一款第（三）项的规定，决定给予罚款人民币20000.00元（大写：贰万元整）的行政处罚",
          more5: "成都市食品药品监督管理局",
          more6: "2018/10/8"
        }
      ],
      tableData11: [
        {
          more1: "1",
          more2: "增值税",
          more3: "6540826.14",
          more4: "国家税务总局",
          more5: "未结清",
          more6: "2018/10/8"
        }
      ],
      tableData12: [
        {
          more1: "1",
          more2: "张清林",
          more3: "刘东红",
          more4: "童剑波",
          more5: "处理中",
          more6: "2018/10/8"
        }
      ],
      tableData13: [
        {
          more1: "1",
          more2: "Edrc47564",
          more3: "500",
          more4: "成都市锦江区人民法院",
          more5: "2018/10/8",
          more6: "2018/10/8",
          more7: "--",
          more8: "--"
        }
      ],
      tableData14: [
        {
          more1: "1",
          more2: "登字（2017）第9号",
          more3: "叶卿",
          more4: "证券股份有限公司",
          more5: "4500",
          more6: "--",
          more7: "2018/10/8"
        }
      ],
      tableData15: [
        {
          more1: "1",
          more2: "登字（2017）第9号",
          more3: "中国农业银行",
          more4: "1000",
          more5: "流动资金贷款",
          more6: "成都市工商行政管理局",
          more7: "2018/10/8"
        }
      ],
      //司法信息
      tableData16: [
        {
          more1: "（2017）沪民初24号",
          more2: "宜宾五粮液股份有限公司;栾川县城关镇永昌副食门市部",
          more3: "侵害商标权纠纷",
          more4: "洛阳市中级人民法院",
          more5: "2019-07-19"
        }
      ],
      tableData17: [
        {
          more1: "张宜妹：本院受理宜宾五粮液股份有限公司诉张宜妹侵害商标权纠纷",
          more2: "起诉状副本及开庭传票",
          more3: "南京铁路运输法院",
          more4: "2017-10-29"
        }
      ],
      tableData18: [
        {
          more1: "（2018）湘0521执恢55号",
          more2: "原告",
          more3:
            "宜宾五粮液股份有限公司、邵东县两市镇和天下名烟名酒酒店知识产权",
          more4: "知识产权权属、侵权纠纷",
          more5: "邵东县两市镇和天下名烟名酒酒店",
          more6: "执行终结"
        }
      ],
      tableData19: [
        {
          more1: "（2016）浙0381执1267号",
          more2: "--",
          more3: "瑞安市人民法院",
          more4: "审理中",
          more5: "2016-03-01"
        }
      ],
      tableData20: [
        {
          more1: "（2018）苏0115执4822号",
          more2: "有履行能力而拒不履行生效法律文书确定义务",
          more3: "南京市江宁区人民法院",
          more4: "2018-10-17"
        },
        {
          more1: "（2018）京03执670号",
          more2: "提出强制执行申请且被法院受理的执行案件",
          more3: "北京市第三中级人民法院",
          more4: "--"
        }
      ],
      tableData21: [
        {
          more1: "1",
          more2: "赤水市人民法院关于吴洪所有的19瓶扣押酒（第一次拍卖）的公告",
          more3: "490,000",
          more4: "成都市人民法院",
          more5: "司法裁定",
          more6: "2016-03-01"
        }
      ],
      //产品信息
      tableData22: [
        {
          more1: "1",
          more2: "包装盒（五粮液10-礼盒装181）",
          more3: "CN305135029S",
          more4: "徐涛;梁盛华;罗璇;毛光富;漆雯;黎才科",
          more5: "2019-04-30"
        },{
          more1: "2",
          more2: "酒瓶（圣酒-佳品套装181）",
          more3: "CN305134930S",
          more4: "徐涛;罗玉龙;曾芸;李威贤;黄廿",
          more5: "2019-04-30"
        }
      ],
      tableData23:[
        {
          more1: "1",
          more2: "五粮液营销地图系统",
          more3: "2017SR36416",
          more4: "30200-0000",
          more5: "v2.0",
          more6: '2019-04-30'
        }
      ],
      tableData24:[
        {
          more1: "1",
          more2: "--",
          more3: "习香国色",
          more4: "26493073",
          more5: "33-酒精饮料",
          more6: '2017-09-19'
        },{
          more1: "2",
          more2: "--",
          more3: "习酒臻品",
          more4: "26496197",
          more5: "33-酒精饮料",
          more6: '2017-09-19'
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
    // 渲染节点
    renderContent(h, { node, data, store }) {
      let html = "";
      if (node.isLeaf) {
        if (node.data.num > 0) {
          html = (
            <span class="custom-tree-node">
              <span style="margin-left:5px;">{node.data.label}</span>
              <span style="margin-left:5px;font-size:12px">
                {node.data.num}
              </span>
            </span>
          );
        } else {
          html = (
            <span class="custom-tree-node" style="color: #ccc">
              <span style="margin-left:5px;">{node.data.label}</span>
              <span style="margin-left:5px;font-size:12px">
                {node.data.num}
              </span>
            </span>
          );
        }
      } else {
        html = (
          <span
            class="custom-tree-node"
            style="font-weight: 400;font-size: 18px"
          >
            <span style="margin-left:5px;">{node.data.label}</span>
          </span>
        );
      }

      return html;
    },
    handleNodeClick(data) {
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
    },
    // 图谱关系详情
    goContact() {
      this.$router.push({
        name: "contact"
      });
    },
    // 风险
    goInfo() {
      this.$router.push({
        name: "riskInfo"
      });
    },
    goRouter(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang='scss'>
.integrityDetail {
  //   height: 500px;
  .routerTip {
    height: 50px;
    width: 1240px;
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
  .name-item {
    font-size: 14px;
  }
  .content {
    width: 65%;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    align-items: center;
    border: 1px solid #ccc;
    .content-left,
    .content-right {
      height: 800px;
      // border: 1px solid #ccc;
      // margin: 10px;
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
      // padding: 20px;

      width: 80%;
      .content1,
      .content2,
      .content3,
      .content4,
      .content5 {
        padding: 20px;
        // width: 90%;
        margin: auto;
        // border: 1px solid #ccc;
        .content-name {
          font-size: 20px;
          font-weight: bold;
          text-align: left;
          // margin-left: 20px;
          // border-bottom: 5px solid #ccc;
        }
      }
      .detail-item {
        height: 300px;
        margin: 35px auto;
        .title {
          font-weight: bold;
          text-align: left;
          // margin-left: 20px;
          margin-bottom: 10px;
          width: 200px;
          // height: 17px;
          font-size: 16px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: rgba(22, 22, 22, 1);
          line-height: 24px;
          .tip-gap {
            width: 6px;
            height: 14px;
            margin-right: 7px;
            background: rgba(255, 0, 0, 0.1);
            display: inline-block;
          }
        }
      }
      .industryInfo {
        height: 291px;
        margin-bottom: 10px;
      }
      .comoany-detail {
        display: flex;
        //   align-content: center;
        align-items: center;
        .left {
          width: 50%;
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
          .status {
            background: #fff;
            padding: 2px;
            margin-left: 10px;
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

          span {
            display: block;
            height: 30px;
          }
        }
        .right {
          width: 50%;
          height: 180px;
          span {
            display: block;
            height: 30px;
          }
          .right-tip {
            width: 112px;
            height: 13px;
            font-size: 12px;
            font-family: "STHeitiSC-Light";
            font-weight: 300;
            text-decoration: underline;
            color: rgba(227, 36, 42, 1);
            line-height: 22px;
            float: right;
            // display: absolute;
            top: 0;
          }
          .contact {
            width: 150px;
            float: right;
            height: 35px;
            line-height: 35px;
            text-align: center;
            margin-top: 40px;
            background: rgba(227, 36, 42, 1);
            border: 1px solid rgba(252, 13, 27, 1);
            border-radius: 18px;
            font-size: 14px;
            font-family: "MicrosoftYaHeiLight";
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            display: flex;
            align-content: center;
            align-items: center;
            // text-align: center;
            // margin: auto;
            img {
              margin-left: 20px;
              margin-right: 2px;
            }
          }
          .contact:hover {
            cursor: pointer;
          }
        }
      }
      .risk {
        height: 100px;
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .contact {
          width: 80px;
          float: right;
          height: 35px;
          line-height: 35px;
          text-align: center;
          margin-top: 10px;
          background: rgba(227, 36, 42, 1);
          border: 1px solid rgba(252, 13, 27, 1);
          border-radius: 18px;
          font-size: 14px;
          font-family: "MicrosoftYaHeiLight";
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
        }
        .contact:hover {
          cursor: pointer;
        }
        .title {
          width: 64px;
          height: 17px;
          font-size: 16px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: rgba(22, 22, 22, 1);
          line-height: 24px;
        }
        .risk-content {
          height: 100px;
          display: flex;
          align-content: center;
          align-items: center;
          .item {
            margin-left: 20px;
            width: 200px;
            height: 14px;
            font-size: 14px;
            font-family: "MicrosoftYaHeiLight";
            font-weight: 300;
            color: rgba(22, 22, 22, 1);
            line-height: 24px;
            .value {
              width: 17px;
              height: 14px;
              font-size: 18px;
              font-family: "DIN-Regular";
              font-weight: 400;
              color: rgba(22, 22, 22, 1);
              line-height: 24px;
            }
          }
        }
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
