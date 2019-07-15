<template>
  <div class="content">
    <!-- <div class="tab-content">
      <a
        @click="scrollTab(index)"
        class="tab-item"
        v-for="(tab, index) in tabs"
        :key="index"
      >{{ tab }}</a>
    </div>-->
    <div ref="content0" class="tab1-content">
      <div class="content-title">政策背景</div>
      <div class="en-title">Policy background</div>
      <div class="line">
        <img src="../assets/line-red.png" alt />
      </div>
      <div class="content-text">
        <span>以“铸诚信中国酒”为目标，构建基于大数据的诚信建设机制、规范标准、技术架构、应用门户，引导生产、流通酒企广泛参与诚信评价，形成以数据归集共享为基础、数据发布公示为手段、主体认证评价为核心的新型行业诚信自律机制和联合征信模式</span>
      </div>
      
      <canvas id="cvs" width="500" height="500">
        
      </canvas>
      <div class="point point1">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>                            
      </div>
      <div class="circle circle1"></div>
      <div class="point point2">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>   
      </div>
      <div class="circle circle2"></div>
      <div class="point point3">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>   
      </div>
      <div class="circle circle3"></div>
      <!-- <div class="point point4">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>   
      </div> -->
      <div class="circle circle4"></div>
      <!-- <div class="point point5">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>   
      </div> -->
      <div class="circle circle5"></div>
      <!-- <div class="point point6">
        <div class="point-content-1">《关于同意调整社会信用体系建设部际联席会议职责和成员单位的批复》</div>
        <div class="point-content-2">国务院</div>
        <div class="point-content-3">2012年7月</div>   
      </div> -->
      <div class="circle circle6"></div>

      <div class="tab2-content-item"></div>
    </div>
    <div ref="content1" class="tab2-content">
      <div class="content-title">建设宗旨</div>
      <div class="en-title">Purpose of construction</div>
      <div class="line">
        <img src="../assets/line-white.png" alt />
      </div>
      <div class="content-text">
        <span>以“铸诚信中国酒”为目标，构建基于大数据的诚信建设机制、规范标准、技术架构、应用门户，引导生产、流通酒企广泛参与诚信评价，形成以数据归集共享为基础、数据发布公示为手段、主体认证评价为核心的新型行业诚信自律机制和联合征信模式。</span>
      </div>
      <div class="tab2-content-item">
        <div class="item-aim">
          <img src="../assets/aim-1.png" />
          <div class="item-name">制度建设</div>
          <div class="item-content">建立完善中国酒业诚信体系制度建设</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-2.png" />
          <div class="item-name">管理体系</div>
          <div class="item-content">建立酒企信用档案和动态管理体系</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-3.png" />
          <div class="item-name">模式和流程</div>
          <div class="item-content">创新中国酒企诚信评价的模式和流程</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-4.png" />
          <div class="item-name">评价和评级</div>
          <div class="item-content">着力推进中国酒企诚信评价和评级</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-5.png" />
          <div class="item-name">结果和证书</div>
          <div class="item-content">公示酒企诚信评价结果并颁发证书</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-6.png" />
          <div class="item-name">信用变化</div>
          <div class="item-content">中国酒业大数据中心监测酒企信用变化</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-7.png" />
          <div class="item-name">应用服务</div>
          <div class="item-content">探索酒企诚信数据的市场化应用服务</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-8.png" />
          <div class="item-name">风险防范</div>
          <div class="item-content">协助中国酒企建立诚信风险防范机制</div>
        </div>
        <div class="item-aim">
          <img src="../assets/aim-9.png" />
          <div class="item-name">提升管理水平</div>
          <div class="item-content">帮助中国酒企提升诚信管理能力水平</div>
        </div>
      </div>
    </div>
    <div ref="content2" class="tab3-content">
      <div class="content-title">评价模式与流程</div>
      <div class="en-title">Evaluation Model and Process</div>
      <div class="line">
        <img src="../assets/line-red.png" alt />
      </div>
      <div class="content-tabs">
        <div class="content-tab" @click="chooseTab(0)">
          <img src="@/assets/tab-1.png" />
          <div>
            <a>评价方式</a>
          </div>
        </div>
        <div class="content-tab" @click="chooseTab(1)">
          <img src="@/assets/tab-2.png" />
          <div>
            <a>评价维度</a>
          </div>
        </div>
        <div class="content-tab" @click="chooseTab(2)">
          <img src="@/assets/tab-3.png" />
          <div>
            <a>评分方法</a>
          </div>
        </div>
      </div>
      <div class="content-tab-text" v-show="checkTab == 0">
        <div style="font-weight: bold">酒企诚信评级</div>
        <div
          class="text"
        >酒企诚信评级，严格按照工信部、商务部等联合印发的《行业诚信评价工作要求及流程》，中国酒业协会根据酒企的诚信评分，将酒企信用等级划分为三级九等，每级每等赋予一个分值段，分值越高则评级越高。中国酒业协会将根据评价年份、酒协编码、酒企诚信评级、参评酒企流水号生成酒企诚信等级编码，并核发“中国酒业协会诚信评价证书”。“中国酒业诚信大数据门户网站”将对参评酒企的诚信评级情况进行公示。</div>
        <!-- <img src="@/assets/wine-back1.png" /> -->
        <div class="text-content">
          <div>
            <div class="top">A级</div>
            <div class="grade">AAA 诚信水平极强</div>
            <div class="grade">AAA 诚信水平极强</div>
            <div class="grade">AAA 诚信水平极强</div>
          </div>
          <div>
            <div class="top">B级</div>
            <div class="grade">AAA 诚信水平极强</div>
            <div class="grade">AAA 诚信水平极强</div>
            <div class="grade">AAA 诚信水平极强</div>
          </div>
          <div>
            <div class="top">C级</div>
            <div class="grade">AAA 诚信水平极强</div>
            <div class="grade">AAA 诚信水平极强</div>
            <div class="grade">AAA 诚信水平极强</div>
          </div>
        </div>
        <div
          style="height: 30px; line-height: 30px;width:100%;text-align: center;color:rgba(182,182,190,1);font-family:'MicrosoftYaHei';"
        >除AAA级、CCC级以下等级外，每一个信用等级可用“+”、“-”符号进行微调，表示略高或略低于本级</div>
      </div>
      <div class="content-tab-text" v-show="checkTab == 1">
        <div style="font-weight: bold">酒企评价维度</div>
        <div
          class="text"
        >酒企诚信评级，严格按照工信部、商务部等联合印发的《行业诚信评价工作要求及流程》，中国酒业协会根据酒企的诚信评分，将酒企信用等级划分为三级九等，每级每等赋予一个分值段，分值越高则评级越高。中国酒业协会将根据评价年份、酒协编码、酒企诚信评级、参评酒企流水号生成酒企诚信等级编码，并核发“中国酒业协会诚信评价证书”。“中国酒业诚信大数据门户网站”将对参评酒企的诚信评级情况进行公示。</div>
        <!-- <img src="@/assets/wine-back1.png" /> -->
      </div>
      <div class="content-tab-text" v-show="checkTab == 2">
        <div style="font-weight: bold">酒企评分方法</div>
        <div
          class="text"
        >酒企诚信评分，中国酒业协会将采用赋值方法对酒企进行评分。其中，按照中国酒业诚信大数据评分专家组设计的计分项权重，以大数据征信评分为基础分值，以政府相关部门、行业协会给予的奖项、惩戒、监督等记录和信息为增减分项，根据中国酒业大数据中心实时监测的不良互联网表现进行减分，动态管理酒企的诚信综合评价得分。</div>
        <!-- <img src="@/assets/wine-back1.png" /> -->
      </div>
    </div>
    <div ref="content3" class="tab4-content">
      <div class="content-title">建设动态</div>
      <div class="en-title">Construction Dynamics</div>
      <div class="line">
        <img src="../assets/line-red.png" alt />
      </div>
      <div class="tab-content-news">
        <!-- <div style="height: 500px; border:1px solid #ccc" v-for="(item, index) in dynamic" :key="index"> -->
        <div
          style="height: 460px; border:1px solid #ccc;margin-right:10px;border:1px solid rgba(224,224,224,1);"
        >
          <div class="content-1">——部委诚信新闻——</div>
          <!-- <img src="@/assets/bg-1.png" /> -->
          <ul>
            <li v-for="(item1, index1) in dynamic[0].news" :key="index1">
              <span class="content-title-1">{{item1.title}}</span>
              <span class="content-date">{{ item1.date}}</span>
            </li>
          </ul>
        </div>
        <div
          style="height: 460px; border:1px solid #ccc;margin:0 10px;border:1px solid rgba(224,224,224,1);"
        >
          <!-- <img src="@/assets/bg-2.png" /> -->
          <div class="content-2">——部委诚信新闻——</div>
          <ul>
            <li v-for="(item1, index1) in dynamic[0].news" :key="index1">
              <span class="content-title-1">{{item1.title}}</span>
              <span class="content-date">{{ item1.date}}</span>
            </li>
          </ul>
        </div>
        <div style="height: 460px; border:1px solid #ccc;border:1px solid rgba(224,224,224,1);">
          <!-- <img src="@/assets/bg-3.png" /> -->
          <div class="content-3">——部委诚信新闻——</div>
          <ul>
            <li v-for="(item1, index1) in dynamic[0].news" :key="index1">
              <span class="content-title-1">{{item1.title}}</span>
              <span class="content-date">{{ item1.date}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- <img src="@/assets/wine-4.png" alt /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemSurvey",
  data() {
    return {
      tabs: ["政府背景", "建设宗旨", "评价模式和流程", "建设动态"],
      aims: [
        {
          src: "'@/assets/aim-1.png'",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        },
        {
          src: "@/assets/wine-back1.png",
          name: "制度建设",
          content: "建立完善酒业诚信制度"
        }
      ],
      tabPosition: "top",
      checkTab: 0,
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
            }
          ]
        }
      ]
    };
  },
  mounted() {
    var canvas = document.getElementById("cvs");

    canvas.width = 1520;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.moveTo(0, 500);
    context.quadraticCurveTo(350, 100, 600, 400);
    context.moveTo(600, 400);
    context.quadraticCurveTo(700, 500, 1200, 20);
    context.lineWidth = 1;
    context.strokeStyle = "#c8c8c8";

    context.stroke();
  },
  methods: {
    scrollTab(index) {
      let farTop = this.$refs["content" + index].offsetHeight;
      console.log(11111111, farTop);
    },
    chooseTab(index) {
      this.checkTab = index;
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
  width: 100%;
  background: #ffffff;
  margin: 10px 0;
}
.tab1-content {
  height: 1029px;
  background: url("../assets/policy-bg.png");
  font-size: 12px;
  .content-title {
    font-size: 30px;
    // color: #803030;
    height: 40px;
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
  .point {
    width: 200px;
    height: 175px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 15px 0px rgba(134, 229, 158, 0.35);
    border-radius: 4px;
    background: url("../assets/point-back.png");
    background-size: 100% 100%;
    z-index: 1000;
    position: absolute;
    padding-top: 15px;
    .point-content-1 {
      width: 180px;
      height: 63px;
      margin: auto;

      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(60, 60, 75, 1);
      line-height: 18px;
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
  .circle {
    width: 16px;
    height: 16px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 15px 0px rgba(134, 229, 158, 0.35);
    border-radius: 4px;
    background: url("../assets/circle.png");
    background-size: 100% 100%;
    z-index: 1001;
    position: absolute;
  }
  .circle1 {
    left: 355px;
    top: 1123px;
  }
  .point1 {
    top: 940px;
    left: 245px;
  }
  .point2 {
    top: 1060px;
    left: 480px;
  }
  .circle2 {
    top: 1142px;
    left: 455px;
  }
  .point3 {
    top: 940px;
    left: 780px;
  }
  .circle3 {
    top: 1242px;
    left: 584px;
  }
  // .point4 {
  //   top: 900px;
  //   left: 1000px;
  // }
  .circle4 {
    top: 1242px;
    left: 724px;
  }
  // .point5 {
  //   top: 900px;
  //   left: 1000px;
  // }
  .circle5 {
    top: 1128px;
    left: 900px;
  }
  // .point6 {
  //   top: 1000px;
  //   left: 1400px;
  // }
  .circle6 {
    top: 1044px;
    left: 1000px;
  }
}
.tab2-content {
  height: 1029px;
  background: url("../assets/aim-bg.png");
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
  background: url("../assets/access-bg.png");

  .content-title {
    font-size: 30px;
    color: #803030;
    height: 40px;
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
    width: 1198px;
    height: 638px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 7px 5px 0px rgba(166, 166, 166, 0.06);
    border-radius: 10px 10px 10px 10px;
    // width: 50%;
    // height: 300px;
    margin: auto;
    // border-radius: 10px;
    // background: #c8c8c8;
    // padding: 10px;
    .text {
      width: 1009px;
      height: 120px;
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
      // height: 300px;
      width: 100%;
      margin: auto;
      // div{
      //   width: 320px;
      //   // height: 342px;
      //   background: rgba(255, 255, 255, 1);
      //   border: 1px solid rgba(190, 43, 43, 1);
      // }
      div {
        width: 320px;
        height: 342px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(190, 43, 43, 1);
        // margin-left: 20px;
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
          width: 318px;
          height: 90px;
          line-height: 90px;
          background: rgba(232, 232, 232, 1);
          text-align: center;
        }
      }
    }
  }
  .content-tabs {
    display: flex;
    align-content: center;
    align-items: center;
    width: 50%;
    margin: 20px auto;
    .content-tab {
      width: 33%;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
.tab4-content {
  height: 1029px;
  background: url("../assets/dynamic-bg.png");
  .tab-content-news {
    height: 703px;
    display: flex;
    align-content: center;
    align-items: center;
    width: 68%;
    background: #fff;
    margin: auto;
    flex-wrap: wrap;
    div {
      text-align: center;
      // padding: 2px;
      width: 31%;
      height: 300px;
      .content-1 {
        width: 100%;
        height: 263px;
        background: url("../assets/bg-1.png");
        background-size: 100% 100%;
        line-height: 263px;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .content-2 {
        width: 100%;
        height: 263px;
        background: url("../assets/bg-2.png");
        background-size: 100% 100%;
        line-height: 263px;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .content-3 {
        width: 100%;
        height: 263px;
        background: url("../assets/bg-3.png");
        background-size: 100% 100%;
        line-height: 263px;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
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
  .item-aim {
    width: 33%;
    height: 200px;
    img {
      width: 40px;
      height: 40px;
    }
    .item-name {
      // color: #000;
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
    padding: 10px;
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
      width: 180px;
      display: inline-block;
    }
    .content-date {
      // margin-left: 30px;
      float: right;
      color: #ccc;
    }
  }
}
</style>
