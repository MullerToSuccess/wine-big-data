<template>
  <div class="content">
    <div class="tab-content">
      <a
        @click="scrollTab(index)"
        class="tab-item"
        v-for="(tab, index) in tabs"
        :key="index"
      >{{ tab }}</a>
    </div>
    <div ref="content0" class="tab1-content">
      <img src="@/assets/wine-2.png" alt />
    </div>
    <div ref="content1" class="tab2-content">
      <div class="content-title">建设宗旨</div>
      <div class="content-text">
        <span>以“铸诚信中国酒”为目标，构建基于大数据的诚信建设机制、规范标准、技术架构、应用门户，引导生产、流通酒企广泛参与诚信评价，形成以数据归集共享为基础、数据发布公示为手段、主体认证评价为核心的新型行业诚信自律机制和联合征信模式</span>
      </div>
      <div class="tab2-content-item">
        <div class="item-aim" v-for="(item, index) in aims" :key="index">
          <img src="@/assets/wine-back1.png" />
          <div class="item-name">{{ item.name }}</div>
          <div class="item-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div ref="content2" class="tab3-content">
      <div class="content-title">评价模式与流程</div>
      <div class="content-tabs">
        <div class="content-tab" @click="chooseTab(0)">
          <img src="@/assets/wine-back1.png" />
          <div>
            <a>评价方式</a>
          </div>
        </div>
        <div class="content-tab" @click="chooseTab(1)">
          <img src="@/assets/wine-back1.png" />
          <div>
            <a>评价维度</a>
          </div>
        </div>
        <div class="content-tab" @click="chooseTab(2)">
          <img src="@/assets/wine-back1.png" />
          <div>
            <a>评分方法</a>
          </div>
        </div>
      </div>
      <div class="content-tab-text" v-show="checkTab == 0">
        <div style="font-weight: bold">酒企诚信评级</div>
        <div>酒企诚信评级，严格按照工信部、商务部等联合印发的《行业诚信评价工作要求及流程》，中国酒业协会根据酒企的诚信评分，将酒企信用等级划分为三级九等，每级每等赋予一个分值段，分值越高则评级越高。中国酒业协会将根据评价年份、酒协编码、酒企诚信评级、参评酒企流水号生成酒企诚信等级编码，并核发“中国酒业协会诚信评价证书”。“中国酒业诚信大数据门户网站”将对参评酒企的诚信评级情况进行公示。</div>
        <!-- <img src="@/assets/wine-back1.png" /> -->
      </div>
      <div class="content-tab-text" v-show="checkTab == 1">
        <div style="font-weight: bold">酒企评价维度</div>
        <div>酒企诚信评级，严格按照工信部、商务部等联合印发的《行业诚信评价工作要求及流程》，中国酒业协会根据酒企的诚信评分，将酒企信用等级划分为三级九等，每级每等赋予一个分值段，分值越高则评级越高。中国酒业协会将根据评价年份、酒协编码、酒企诚信评级、参评酒企流水号生成酒企诚信等级编码，并核发“中国酒业协会诚信评价证书”。“中国酒业诚信大数据门户网站”将对参评酒企的诚信评级情况进行公示。</div>
        <!-- <img src="@/assets/wine-back1.png" /> -->
      </div>
      <div class="content-tab-text" v-show="checkTab == 2">
        <div style="font-weight: bold">酒企评分方法</div>
        <div>酒企诚信评分，中国酒业协会将采用赋值方法对酒企进行评分。其中，按照中国酒业诚信大数据评分专家组设计的计分项权重，以大数据征信评分为基础分值，以政府相关部门、行业协会给予的奖项、惩戒、监督等记录和信息为增减分项，根据中国酒业大数据中心实时监测的不良互联网表现进行减分，动态管理酒企的诚信综合评价得分。</div>
        <!-- <img src="@/assets/wine-back1.png" /> -->
      </div>
    </div>
    <div ref="content3" class="tab4-content">
      <div class="content-title">建设动态</div>
      <div class="tab-content-news">
        <div v-for="(item, index) in dynamic" :key="index">
          <img src="@/assets/wine-back1.png" />
          <ul>
            <li v-for="(item1, index1) in item.news" :key="index1">
              <span>{{item1.title}}</span>
              <span>{{ item1.date}}</span>
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
              title: "标题1",
              date: "2018-5-12"
            },
            {
              title: "标题2",
              date: "2018-5-12"
            },
            {
              title: "标题3",
              date: "2018-5-12"
            },
            {
              title: "标题4",
              date: "2018-5-12"
            }
          ]
        },
        {
          news: [
            {
              title: "标题1",
              date: "2018-5-12"
            },
            {
              title: "标题2",
              date: "2018-5-12"
            },
            {
              title: "标题3",
              date: "2018-5-12"
            },
            {
              title: "标题4",
              date: "2018-5-12"
            }
          ]
        },
        {
          news: [
            {
              title: "标题1",
              date: "2018-5-12"
            },
            {
              title: "标题2",
              date: "2018-5-12"
            },
            {
              title: "标题3",
              date: "2018-5-12"
            },
            {
              title: "标题4",
              date: "2018-5-12"
            }
          ]
        }
      ]
    };
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

.tab2-content {
  background: #803030;
  color: #ffffff;
  font-size: 12px;
  .content-title {
    font-size: 30px;
    color: #ffffff;
    height: 40px;
  }
  .content-text {
    width: 50%;
    margin: 16px auto;
    font-size: 14px;
  }
}
.tab3-content {
  // height: 200px;
  // color: #803030;
  .content-title {
    font-size: 30px;
    color: #803030;
    height: 40px;
  }
  .content-tab-text {
    width: 50%;
    height: 300px;
    margin: auto;
    border-radius: 10px;
    background: #c8c8c8;
    padding: 10px;
    div {
      text-align: left;
    }
  }
  .content-tabs {
    display: flex;
    align-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
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
  background: #803030;
  height: 400px;
  .tab-content-news {
    display: flex;
    align-content: center;
    align-items: center;
    width: 50%;
    background: #fff;
    margin: auto;
    flex-wrap: wrap;
    div {
      text-align: center;
      padding: 2px;
      width: 32%;
      height: 300px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .content-title {
    font-size: 30px;
    color: #ffffff;
    height: 40px;
  }
}
.tab2-content-item {
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 300px;
  width: 50%;
  margin: auto;
  .item-aim {
    width: 33%;
    height: 100px;
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
}
</style>
