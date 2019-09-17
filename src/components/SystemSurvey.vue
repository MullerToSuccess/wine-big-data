<template>
  <div class="content" @mouseenter='hover2'>
    <!-- v-show="document.body.scrollTop" -->
    <div class="float-more" v-show="show2">
      <div @click="hover4" class="close-btn" style="margin-top: 25px;margin-left:260px">关闭</div>
    </div>
    <div class="float-info" v-show="show1" @mouseleave='hover2'>
      <div><img src="@/assets/images/info-1.png" alt=""> <a @click="hover3">在线答疑</a></div>
      <div><img src="@/assets/images/info-2.png" alt="">联系电话：4008-777-818</div>
      <div><img src="@/assets/images/info-3.png" alt="">电子邮箱：123456@qq.com</div>
    </div>
    <div class="float-top">
      <div class="top" @mouseenter='hover1'>
        <div class="top-bg"></div>
        <!-- <img :src="src1" alt style="margin-top:10px" /> -->
        <div style="text-align: center;margin-top:15px">
          <span>联系</span>
          <br />
          <span>我们</span>
        </div>
      </div>
      <div class="bottom" @click="toTop" @mouseenter='hover2'>
        <div class="bottom-bg"></div>
        <br />
        <span>顶部</span>
      </div>
    </div>
    <swiper
      class="header-swiper"
      :options="swiperOption"
      ref="mySwiper"
      @someSwiperEvent="callback"
    >
      <swiper-slide>
        <img src="../assets/images/banner.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/wine-top.png" alt />
      </swiper-slide>
      <!-- <swiper-slide>
        <img src="../assets/images/wine-top.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/wine-top.png" alt />
      </swiper-slide>-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="swiper-pagination"></div>
    <div ref="content0" class="tab1-content">
      <div class="content-title">政策背景</div>
      <div class="en-title">Policy background</div>
      <div class="line">
        <img src="../assets/images/line-red.png" alt />
      </div>

      <!-- <canvas style="z-index: 1002" id="cvs" width="1520" height="800"></canvas>
      <div class="point point1">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>
      </div>
      <div class="circle circle1"></div>
      <div class="point point2">
        <div class="point-content-3">2014年9月</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-1">
          《关于印发社会信用体系建设
          规划纲要（2014-2020年）
          的通知》
        </div>
      </div>
      <div class="circle circle2"></div>
      <div class="point point3">
        <div class="point-content-1">
          《关于加快推进商务诚信建
          设工作实施意见》
        </div>
        <div class="point-content-2">商务部</div>
        <div class="point-content-3">2014年9月</div>
      </div>
      <div class="circle circle3"></div>
      <div class="point point4">
        <div class="point-content-3">2014年9月</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-1">
          《关于印发社会信用体系建设
          规划纲要（2014-2020年）
          的通知》
        </div>
      </div>
      <div class="circle circle4"></div>
      <div class="point point5">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>
      </div>
      <div class="circle circle5"></div>
      <div class="point point6">
        <div class="point-content-3">2012年7月</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-1">
          《关于印发社会信用体系建设
          规划纲要（2014-2020年）
          的通知》
        </div>
      </div>
      <div class="circle circle6"></div>

      <div class="tab2-content-item"></div>-->
    </div>
    <div ref="content1" class="tab2-content">
      <div class="content-title">建设宗旨</div>
      <div class="en-title">Purpose of construction</div>
      <div class="line">
        <img src="../assets/images/line-white.png" alt />
      </div>
      <div class="content-text">
        <span>以“铸诚信中国酒”为目标，构建基于大数据的诚信建设机制、规范标准、技术架构、应用门户，引导生产、流通酒企广泛参与诚信评价，形成以数据归集共享为基础、数据发布公示为手段、主体认证评价为核心的新型行业诚信自律机制和联合征信模式。</span>
      </div>
      <div class="tab2-content-item">
        <div class="item-aim">
          <img src="../assets/images/aim-1.png" />
          <div class="item-name">制度建设</div>
          <div class="item-content">建立完善中国酒业诚信体系制度建设</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-2.png" />
          <div class="item-name">管理体系</div>
          <div class="item-content">建立酒企信用档案和动态管理体系</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-3.png" />
          <div class="item-name">模式和流程</div>
          <div class="item-content">创新中国酒企诚信评价的模式和流程</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-4.png" />
          <div class="item-name">评价和评级</div>
          <div class="item-content">着力推进中国酒企诚信评价和评级</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-5.png" />
          <div class="item-name">结果和证书</div>
          <div class="item-content">公示酒企诚信评价结果并颁发证书</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-6.png" />
          <div class="item-name">信用变化</div>
          <div class="item-content">中国酒业大数据中心监测酒企信用变化</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-7.png" />
          <div class="item-name">应用服务</div>
          <div class="item-content">探索酒企诚信数据的市场化应用服务</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-8.png" />
          <div class="item-name">风险防范</div>
          <div class="item-content">协助中国酒企建立诚信风险防范机制</div>
        </div>
        <div class="item-aim">
          <img src="../assets/images/aim-9.png" />
          <div class="item-name">提升管理水平</div>
          <div class="item-content">帮助中国酒企提升诚信管理能力水平</div>
        </div>
      </div>
    </div>
    <div ref="content2" class="tab3-content">
      <div class="content-title">评价模式与流程</div>
      <div class="en-title">Evaluation Model and Process</div>
      <div class="line">
        <img src="../assets/images/line-red.png" alt />
      </div>
      <div class="content-tabs">
        <div class="content-tab" @click="chooseTab(0)">
          <img src="@/assets/images/tab-1.png" />
          <div>
            <a>评价方式</a>
          </div>
          <div :class="{'point': checkTab == 0}">
            <div class="triangle"></div>
          </div>
        </div>
        <div class="content-tab" @click="chooseTab(1)">
          <img src="@/assets/images/tab-2.png" />
          <div>
            <a>评价维度</a>
          </div>
          <div :class="{'point': checkTab == 1}">
            <div class="triangle"></div>
          </div>
        </div>
        <div class="content-tab" @click="chooseTab(2)">
          <img src="@/assets/images/tab-3.png" />
          <div>
            <a>评分方法</a>
          </div>
          <div :class="{'point': checkTab == 2}">
            <div class="triangle"></div>
          </div>
        </div>
      </div>
      <div class="content-tab-text" v-show="checkTab == 0">
        <div class="title">酒企诚信评级</div>
        <div
          class="text"
        >酒企诚信评级，严格按照工信部、商务部等联合印发的《行业诚信评价工作要求及流程》，中国酒业协会根据酒企的诚信评分，将酒企信用等级划分为三级九等，每级每等赋予一个分值段，分值越高则评级越高。中国酒业协会将根据评价年份、酒协编码、酒企诚信评级、参评酒企流水号生成酒企诚信等级编码，并核发“中国酒业协会诚信评价证书”。“中国酒业诚信大数据门户网站”将对参评酒企的诚信评级情况进行公示。</div>
        <div class="text-content">
          <div class="text-item">
            <div class="top">A级</div>
            <div class="grade">AAA 诚信水平极强</div>
            <div class="grade">AA 诚信水平很强</div>
            <div class="grade">A 诚信水平较强</div>
          </div>
          <div class="text-item">
            <div class="top">B级</div>
            <div class="grade">BBB 诚信水平一般</div>
            <div class="grade">BB 诚信水平较弱</div>
            <div class="grade">B 诚信水平较差</div>
          </div>
          <div class="text-item">
            <div class="top">C级</div>
            <div class="grade">CCC 诚信风险较高</div>
            <div class="grade">CC 诚信风险很高</div>
            <div class="grade">C 诚信风险极高</div>
          </div>
        </div>
        <div
          style="height: 30px; line-height: 30px;width:100%;text-align: center;color:rgba(182,182,190,1);font-family:'MicrosoftYaHei';"
        >除AAA级、CCC级以下等级外，每一个信用等级可用“+”、“-”符号进行微调，表示略高或略低于本级</div>
      </div>
      <div class="content-tab-text" v-show="checkTab == 1">
        <div class="title">酒企评价维度</div>
        <div class="text-content" style="margin-top: 50px;">
          <div class="text-item text-item2">
            <div class="top">
              <div>
                <div style="text-align: center">企业资质</div>
                <div style="width:32px;
height:2px;
background:rgba(255,255,255,1);margin:auto"></div>
              </div>
            </div>
            <div class="grade">经营资质年限</div>
            <div class="grade">机构人员配置</div>
            <div class="grade">制度流程编制</div>
            <div class="grade">治理水平评价</div>
          </div>
          <div class="text-item text-item2">
            <div class="top">
              <div>
                <div style="text-align: center">财务指标</div>
                <div style="width:32px;
height:2px;
background:rgba(255,255,255,1);margin:auto"></div>
              </div>
            </div>
            <div class="grade">主营业务指标</div>
            <div class="grade">盈利能力指标</div>
            <div class="grade">营运能力指标</div>
            <div class="grade">偿债能力指标</div>
          </div>
          <div class="text-item text-item2">
            <div class="top">
              <div>
                <div style="text-align: center">管理水平</div>
                <div style="width:32px;
height:2px;
background:rgba(255,255,255,1);margin:auto"></div>
              </div>
            </div>
            <div class="grade">人力资源管理</div>
            <div class="grade">生产质量管理</div>
            <div class="grade">品牌建设水平</div>
            <div class="grade">供应链管理</div>
          </div>
          <div class="text-item text-item2">
            <div class="top">
              <div>
                <div style="text-align: center">企业征信</div>
                <div style="width:32px;
height:2px;
background:rgba(255,255,255,1);margin:auto"></div>
              </div>
            </div>
            <div class="grade">诉讼违法记录</div>
            <div class="grade">纳税履约记录</div>
            <div class="grade">银行工商评级</div>
            <div class="grade">企业公共记录</div>
          </div>
          <div class="text-item text-item2">
            <div class="top">
              <div>
                <div style="text-align: center">高管征信</div>
                <div style="width:32px;
height:2px;
background:rgba(255,255,255,1);margin:auto"></div>
              </div>
            </div>
            <div class="grade">个人信贷记录</div>
            <div class="grade">民事判决记录</div>
            <div class="grade">强制执行记录</div>
            <div class="grade">行政处罚记录</div>
          </div>
          <div class="text-item text-item2">
            <div class="top">
              <div>
                <div style="text-align: center">惩戒与嘉奖</div>
                <div style="width:32px;
height:2px;
background:rgba(255,255,255,1);margin:auto"></div>
              </div>
            </div>
            <div class="grade">行业监管记录</div>
            <div class="grade">参评嘉奖荣誉</div>
            <div class="grade">重大售假制假</div>
            <div class="grade">重大舆论事件</div>
          </div>
        </div>
      </div>
      <div class="content-tab-text" v-show="checkTab == 2">
        <div class="title">酒企评分方法</div>
        <div
          class="text"
        >酒企诚信评分，中国酒业协会将采用赋值方法对酒企进行评分。其中，按照中国酒业诚信大数据评分专家组设计的计分项权重，以大数据征信评分为基础分值，以政府相关部门、行业协会给予的奖项、惩戒、监督等记录和信息为增减分项，根据中国酒业大数据中心实时监测的不良互联网表现进行减分，动态管理酒企的诚信综合评价得分。</div>
        <div class="method"></div>
      </div>
    </div>
    <div ref="content3" class="tab4-content">
      <div class="content-title">建设动态</div>
      <div class="en-title">Construction Dynamics</div>
      <div class="line">
        <img src="../assets/images/line-red.png" alt />
      </div>
      <div class="tab-content-news">
        <div
          style="height: 460px; border:1px solid #ccc;margin-right:10px;border:1px solid rgba(224,224,224,1);"
        >
          <div
            @click="goNews()"
            style="text-align: center; height: 170px;line-height: 170px"
            class="content content-1"
          >——&nbsp;部委诚信新闻&nbsp;——</div>
          <ul>
            <li @click="goDetail(item1)" v-for="(item1, index1) in news1" :key="index1">
              <span class="content-title-1">{{item1.title}}</span>
              <span class="content-date">{{ item1.date}}</span>
            </li>
          </ul>
        </div>
        <div
          style="height: 460px; border:1px solid #ccc;margin:0 10px;border:1px solid rgba(224,224,224,1);"
        >
          <div
            @click="goNews()"
            style="text-align: center;height: 170px;line-height: 170px"
            class="content content-2"
          >——&nbsp;协会诚信资讯&nbsp;——</div>
          <ul>
            <li @click="goDetail(item1)" v-for="(item1, index1) in news2" :key="index1">
              <span class="content-title-1">{{item1.title}}</span>
              <span class="content-date">{{ item1.date}}</span>
            </li>
          </ul>
        </div>
        <div
          @click="goNews()"
          style="height: 460px; border:1px solid #ccc;border:1px solid rgba(224,224,224,1);"
        >
          <div
            style="text-align: center;height: 170px;line-height: 170px"
            class="content content-3"
          >——&nbsp;地方诚信动态&nbsp;——</div>
          <ul>
            <li @click="goDetail(item1)" v-for="(item1, index1) in news3" :key="index1">
              <span class="content-title-1">{{item1.title}}</span>
              <span class="content-date">{{ item1.date}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import src1 from "@/assets/images/con-2.png";
import src2 from "@/assets/images/con-1.png";
import src3 from "@/assets/images/top-1.png";
import src4 from "@/assets/images/top-2.png";
import { mapMutations } from 'vuex';
export default {
  name: "SystemSurvey",
  data() {
    return {
      src1: src1,
      src2: src2,
      src3: src3,
      src4: src4,
      show1: false,
      show2: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicMainBullets: 2, //动态分页器的主指示点的数量
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      },
      tabs: ["政府背景", "建设宗旨", "评价模式和流程", "建设动态"],
      aims: [
        {
          src: "'@/assets/images/aim-1.png'",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/images/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        }
      ],
      tabPosition: "top",
      checkTab: 0,
      news1: [
        {
          title: "国家市场监督管理总局成立",
          date: "2018-03-26"
        },
        {
          title: "国家食药监总局：重点整治农村市场“傍名牌食品”“山寨食品",
          date: "2018-03-22"
        },
        {
          title: "食药监总局有关负责人解读“史上最严奶粉政策”",
          date: "2018-03-19"
        },
        {
          title: "工商总局及时部署查处“3·15”晚会曝光有关案例",
          date: "2018-03-19"
        },
        {
          title:
            "国家食品药品监督管理总局公布10起食品保健食品欺诈和虚假宣传典型案例",
          date: "2018-03-15"
        },
        {
          title: "通过科普宣传释放食品安全“正能量”",
          date: "2018-03-02"
        },
        {
          title:
            "工信部批准发布《婴幼儿配方乳粉行业产品质量安全追溯体系规范》等154项行业标准",
          date: "2018-02-28"
        },
        {
          title:
            "食品药品监管总局 公安部联合印发通知 严格落实食品药品违法行为处罚到人",
          date: "2018-01-26"
        }
      ],
      news2: [
        {
          title: "中国青稞酒研究院在青海互助成立",
          date: "2019-07-18"
        },
        {
          title: "中酒协党支部开展“不忘初心，牢记使命”主题党日活动",
          date: "2019-07-02"
        },
        {
          title: "老酒大阅兵，24000瓶名酒接受专家检验”",
          date: "2019-07-08"
        },
        {
          title: "同心同行，中国酒业协会工会组织开展“奥森健步行”活动",
          date: "2019-05-08"
        },
        {
          title: "制定陈年白酒鉴定标准 积极推进酒业诚信体系建设",
          date: " 2019-05-07"
        },
        {
          title: "三大签约！中酒协将在标准化、电商平台、投资领域大发力",
          date: "2019-04-24"
        },
        {
          title: "五粮液集团副董事长邹涛一行到访协会，共话老酒市场发展",
          date: "2019-03-01"
        },
        {
          title: "中国酒业协会主办“中国白酒3C计划”启动会议在京召开",
          date: "2013-08-23"
        }
      ],
      news3: [
        {
          title: "香港食安中心公布二月份食物安全报告",
          date: "2018-03-30"
        },
        {
          title: "四川德阳市食品药品安全监管今年重点铲除“潜规则”",
          date: "2018-03-29"
        },
        {
          title: "宁波：买进口“有机食品”要留心 有的系违规使用有机产品认证标志",
          date: "2018-03-28"
        },
        {
          title: "西宁市食药监提示：购买保健食品 还需擦亮眼睛",
          date: "2018-03-28"
        },
        {
          title: "衡阳市五措并举开展酒类产品专项整治",
          date: "2018-03-27"
        },
        {
          title: "武汉市开展春季校园食品安全专项检查",
          date: "2018-03-27"
        },
        {
          title: "鸡西市开展食品、保健食品欺诈和虚假宣传整治专项检查行动",
          date: "2018-03-26"
        },
        {
          title: "浙江吴兴四管齐下推进酒类产品质量安全专项整治",
          date: "2018-03-26"
        }
      ],

      dynamic: [
        {
          news: [
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒2",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒3",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒4",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒2",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒3",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒4",
              date: "2018-5-12"
            }
          ]
        },
        {
          news: [
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒2",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒3",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒4",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒2",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒3",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒4",
              date: "2018-5-12"
            }
          ]
        },
        {
          news: [
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒2",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒3",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒4",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒2",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒3",
              date: "2018-5-12"
            },
            {
              title: " 国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒4",
              date: "2018-5-12"
            }
          ]
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    fromTop(){
      return document.body.scrollTop
    },
  },
  watch:{
    fromTop: function(val){
      console.log(val)
    }
  },
  mounted() {
    this.setCurrentNav('诚信体系概述')
    this.swiper.slideTo(0, 1000, false);
    var canvas = document.getElementById("cvs");

    canvas.width = 1520;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.moveTo(0, 500);
    context.quadraticCurveTo(350, 100, 600, 400);
    context.moveTo(600, 400);
    context.quadraticCurveTo(700, 500, 1200, 20);
    context.moveTo(1200, 20);
    context.quadraticCurveTo(1300, -40, 1800, 80);
    context.lineWidth = 1;
    context.strokeStyle = "#c8c8c8";
    // context.globalCompositeOperation='source-over';

    context.stroke();
  },
  methods: {
    ...mapMutations({
      setCurrentNav: 'common/setCurrentNav'
    }),
    hover1(){
      this.show1 = true;
      console.log(this.show1)
    },
    hover2(){
      this.show1 = false;
    },
    hover3(){
      this.show2 = true;
    },
    hover4(){
      this.show2 = false;
    },
    toTop(){
      console.log(document.body.scrollTop)
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    scrollTab(index) {
      let farTop = this.$refs["content" + index].offsetHeight;
      console.log(11111111, farTop);
    },
    chooseTab(index) {
      this.checkTab = index;
    },
    goDetail(item) {
      this.$router.push({
        name: "newsDetail"
      });
      // window.url = 'http://www.foodcredit.org.cn/gzdt/bwyw/201803/t20180326_170791.html'
    },
    goNews() {
      this.$router.push("/dynamics");
      // window.url = 'http://www.foodcredit.org.cn/gzdt/bwyw/201803/t20180326_170791.html'
    }
  }
};
</script>

<style scoped lang='scss'>
.content {
  // height: 500px;
}
.tab-content {
  display: flex;
  align-content: center;
  align-items: center;
  .tab-item {
    width: 25%;
    height: 50px;
    line-height: 50px;
    background: #c8c8c8;
    color: white;
  }
}
.tab1-content,
.tab2-content,
.tab3-content,
.tab4-content {
  // height: 200px;
  // width: 100%;
  width: 1920px;
  // min-width: 1400px;
  background: #ffffff;
  margin: 10px 0;
}
.tab1-content {
  height: 800px;
  background: url("../assets/images/policy-bg.png");
  font-size: 12px;
  .content-title {
    font-size: 30px;
    // color: #803030;
    padding-top: 40px;
    height: 40px;
  }
  .en-title {
    height: 14px;
    font-size: 14px;
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    // color: rgba(255, 255, 255, 1);
    line-height: 24px;
    opacity: 0.5;
    margin: 10px auto;
  }
  .point {
    width: 200px;
    height: 175px;
    background: rgba(255, 255, 255, 1);
    // box-shadow: 0px 0px 15px 0px rgba(134, 229, 158, 0.35);
    border-radius: 4px;
    background: url("../assets/images/point-back-normal.png");
    background-size: 100% 100%;
    z-index: 1000;
    position: absolute;
    padding-top: 15px;
    text-align: left;
    padding-left: 20px;
    .point-content-1 {
      width: 180px;
      height: 63px;
      // margin: auto;

      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(60, 60, 75, 1);
      line-height: 22px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .point-content-2 {
      color: rgba(151, 150, 166, 1);
    }
    .point-content-3 {
      font-size: 18px;
      font-family: "MicrosoftYaHei-Bold";
      font-weight: bold;
      color: rgba(27, 27, 27, 1);
    }
  }
  .point:hover {
    // box-shadow: 0px 0px 15px 0px rgba(134, 229, 158, 0.35);
    cursor: pointer;
  }
  .circle {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 15px 0px rgba(134, 229, 158, 0.35);
    border-radius: 4px;
    background: url("../assets/images/circle.png");
    background-size: 100% 100%;
    z-index: 1001;
    position: absolute;
  }
  .circle1 {
    left: 545px;
    top: 1138px;
  }
  .point1 {
    top: 1030px;
    left: 265px;
  }
  .point2 {
    top: 1156px;
    left: 480px;
    background: url("../assets/images/point-back-1.png");
    background-size: 100% 100%;
    .point-content-3 {
      margin-top: 30px;
    }
  }
  .circle2 {
    top: 1225px;
    left: 340px;
  }
  .point3 {
    top: 1078px;
    left: 700px;
  }
  .circle3 {
    top: 1268px;
    left: 794px;
  }
  .point4 {
    top: 1270px;
    left: 850px;
    background: url("../assets/images/point-back-1.png");
    background-size: 100% 100%;
    .point-content-3 {
      margin-top: 30px;
    }
  }
  .circle4 {
    top: 1258px;
    left: 924px;
  }
  .point5 {
    top: 964px;
    left: 1025px;
  }
  .circle5 {
    top: 1154px;
    left: 1086px;
  }
  .point6 {
    top: 990px;
    left: 1230px;
    background: url("../assets/images/point-back-1.png");
    background-size: 100% 100%;
    .point-content-3 {
      margin-top: 30px;
    }
  }

  .circle6 {
    top: 970px;
    left: 1300px;
  }
}
.tab2-content {
  height: 1029px;
  background: url("../assets/images/aim-bg.png");
  color: #ffffff;
  font-size: 12px;
  .content-title {
    font-size: 30px;
    color: #ffffff;
    height: 40px;
    padding-top: 40px;
  }
  .en-title {
    height: 14px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
    opacity: 0.5;
    margin: 10px auto;
  }
  .content-text {
    width: 50%;
    margin: 16px auto;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
  }
}
.tab3-content {
  height: 1029px;
  background: rgba(248, 248, 248, 1);
  background-image: url("../assets/images/access-bg.png");

  .content-title {
    font-size: 30px;
    // color: #803030;
    height: 40px;
    padding-top: 40px;
  }
  .en-title {
    height: 14px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    // color: rgba(255, 255, 255, 1);
    line-height: 24px;
    opacity: 0.5;
    margin: 10px auto;
  }
  .content-tab-text {
    padding: 60px;
    width: 1198px;
    height: 588px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 7px 5px 0px rgba(166, 166, 166, 0.06);
    border-radius: 10px 10px 10px 10px;
    margin: auto;
    .title {
      font-weight: bold;
      width: 1009px;
      margin: 10px auto;
    }
    .text {
      margin: auto;
      width: 1009px;
      // height: 120px;
      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(60, 60, 75, 1);
      line-height: 24px;
    }

    div {
      text-align: left;
    }
    .text-content {
      display: flex;
      align-content: center;
      align-items: center;
      height: 440px;
      width: 1009px;
      margin: 20px auto;
      .text-item:first-child {
        margin-right: 20px;
      }
      .text-item:last-child {
        margin-left: 20px;
      }
      .text-item {
        width: 320px;
        height: 342px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(190, 43, 43, 1) !important;
        .top {
          width: 100%;
          height: 70px;
          background: rgba(230, 32, 32, 1);
          line-height: 70px;
          text-align: center;
          font-size: 30px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        .grade {
          width: 320px;
          height: 90px;
          line-height: 90px;
          background: #fff;
          border-top: 1px solid rgba(229, 229, 229, 1);
          text-align: center;
        }
        .grade:last-child {
          border-bottom: 1px solid rgba(190, 43, 43, 1);
        }
      }
      .text-item2 {
        width: 150px;
        height: 432px;
        .top {
          line-height: 50px;
          font-size: 16px;
        }
        .grade {
          width: 150px;
          font-size: 16px;
        }
      }
      .text-item2 {
        margin-right: 15px;
      }
      .text-item2:last-child {
        margin-left: 0px;
      }
    }
    .method {
      width: 440px;
      height: 346px;
      margin: 70px auto;
      background: url("../assets/images/method-bg.png");
      background-size: 100% 100%;
    }
  }
  .content-tabs {
    display: flex;
    align-content: center;
    align-items: center;
    width: 50%;
    margin: 40px auto;
    margin-bottom: 0px;
    .content-tab {
      width: 33%;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
      .point {
        // width: 30px;
        // height: 30px;
        text-align: center;
        .triangle {
          width: 10%;
          margin: auto;
          // background: #fff;
          visibility: visible;
        }
      }
    }
    .content-tab:hover {
      cursor: pointer;
      color: rgba(230, 32, 32, 1);
    }
  }
}
.tab4-content {
  height: 780px;
  background: url("../assets/images/dynamic-bg.png");
  .tab-content-news {
    height: 703px;
    display: flex;
    align-content: center;
    align-items: center;
    width: 68%;
    background: #fff;
    margin: -40px auto;
    flex-wrap: wrap;
    div {
      text-align: left;
      // padding: 2px;
      width: 385px;
      height: 300px;
      .content {
        width: 100%;
        height: 263px;
        background: url("../assets/images/bg-1.png");
        background-size: 100% 100%;
        line-height: 263px;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .content:hover {
        cursor: pointer;
        opacity: 0.8;
      }
      .content-1 {
        background: url("../assets/images/bg-1.png");
        background-size: 100% 100%;
      }
      .content-2 {
        background: url("../assets/images/bg-2.png");
        background-size: 100% 100%;
      }
      .content-3 {
        background: url("../assets/images/bg-3.png");
        background-size: 100% 100%;
      }
    }
  }
  .content-title {
    font-size: 30px;
    // color: #ffffff;
    height: 40px;
    padding-top: 40px;
  }
  .en-title {
    height: 14px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    // color: rgba(255, 255, 255, 1);
    line-height: 24px;
    opacity: 0.5;
    margin: 10px auto;
  }
}
.tab2-content-item {
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 800px;
  width: 50%;
  margin: auto;
  margin-top: 40px;
  .item-aim {
    width: 33%;
    height: 200px;
    line-height: 24px;
    img {
      width: 40px;
      height: 40px;
    }
    .item-name {
      // color: #000;
      font-size: 16px;
    }
    .item-content {
      color: #c8c8c8;
    }
  }
  .item-aim:hover {
    cursor: pointer;
  }
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  li {
    // padding-left: 14px;
    // border-bottom: 1px solid #ccc;
    padding: 10px 20px;
    // width: 330px;
    height: 13px;
    font-size: 14px;
    font-family: "MicrosoftYaHei";
    color: rgba(60, 60, 75, 1);
    line-height: 24px;
    .content-title-1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 400;
      width: 200px;
      display: inline-block;
    }
    .content-date {
      // margin-left: 30px;
      float: right;
      color: #ccc;
    }
  }
  li:hover {
    cursor: pointer;
  }
}
.triangle {
  width: 22.5px;
  height: 13px;
  background: url("../assets/images/triangle.png");
  background-size: 100% 100%;
  visibility: hidden;
}
.float-more{
  width: 423px;
  height: 443px;
  background: url('../assets/images/hover-more.png');
  z-index: 10001;
  position: fixed;
  bottom: 200px;
  right: 170px;
}
.close-btn:hover{
  cursor: pointer;
}
.float-info{
  width: 300px;
  height: 150px;
  position: fixed;
  bottom: 20px;
  right: 170px;
  z-index: 10001;
  background: rgba(255, 255, 255, 1);
  padding-top: 20px;
  border: 1px solid #ccc;
  // display: none;
  div {
    width: 100%;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
    img{
      margin-right: 10px;
    }
  }
}
.float-top {
  width: 60px;
  height: 170px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 20px;
  right: 100px;
  z-index: 10001;
  border: 1px solid #ccc;
  font-size: 14px;
  font-family: "MicrosoftYaHeiLight";
  font-weight: 300;
  .top {
    height: 91px;
    // background: red
    padding-top: 10px;
    .top-bg {
      width: 19px;
      margin: auto;
      // padding-top:10px;
      height: 19px;
      background: url("../assets/images/con-2.png");
      background-size: 100% 100%;
    }
  }
  .top:hover {
    background: rgba(227, 36, 42, 1);
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    .top-bg {
      background: url("../assets/images/con-1.png");
      background-size: 100% 100%;
    }
    // .float-info{
    //   display: block;
    // }
  }
  .bottom {
    height: 59px;
    padding-top: 10px;
    .bottom-bg{
      width: 14px;
      margin: auto;
      // padding-top:10px;
      height: 8px;
      background: url("../assets/images/top-1.png");
      background-size: 100% 100%;
    }
  }
  .bottom:hover {
    background: rgba(227, 36, 42, 1);
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    .bottom-bg {
      background: url("../assets/images/top-2.png");
      background-size: 100% 100%;
    }
  }
}
</style>
