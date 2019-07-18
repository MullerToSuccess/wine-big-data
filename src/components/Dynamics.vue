<template>
  <div class="newsDetail">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/SystemSurvey')">首页</span> >
      <span @click="goRouter('/dynamics')">建设动态</span>
    </div>
    <div class="content">
      <div class="tab-panel">
        <div :class="{tab: true, activeTab: activeTab == 1}" @click="changeTab(1)">
          <span>部委诚信新闻</span>
        </div>
        <div :class="{tab: true, activeTab: activeTab == 2}" @click="changeTab(2)">
          <span>协会诚信资讯</span>
        </div>
        <div :class="{tab: true, activeTab: activeTab == 3}" @click="changeTab(3)">
          <span>地方诚信动态</span>
        </div>
      </div>
      <div class="content-table">
        <div v-for="(item, index) in tableData" :key="index" class="table-item">
          <div class="table-title">{{ item.title }}</div>
          <div class="table-text">{{ item.text }}</div>
          <div class="table-date">
            <img src="@/assets/images/from.png" />
            {{ item.date }}
          </div>
        </div>
      </div>
      <div class="pagination">
      <el-row type="flex" justify="center">
        <el-col :span="22">
          <el-pagination class="right" layout="total, prev, pager, next" :total="100"></el-pagination>
        </el-col>
      </el-row>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dynamics",
  data() {
    return {
      activeTab: 1,
      tableData: [
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        },
        {
          date: "中国白酒网    2019/06/24",
          title: "国家发改委等7部门严查虚标能耗 对造假者实行联合惩戒",
          text:
            "近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。"
        }
      ]
    };
  },
  methods: {
    goRouter(path) {
      this.$router.push(path);
    },
    changeTab(index) {
      this.activeTab = index;
    }
  }
};
</script>

<style scoped lang='scss'>
.newsDetail {
  // height: 500px;
  width: 100%;
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
  .activeTab {
    background: rgba(227, 36, 42, 1) !important;
    // span {
    color: rgba(255, 255, 255, 1) !important;
    // }
  }
  .content {
    width: 1200px;
    // height: 495px;
    margin: 10px auto;
    // border: 1px solid rgba(229, 229, 229, 1);
    .tab-panel {
      display: flex;
      .tab {
        width: 160px;
        height: 45px;
        background: rgba(145, 143, 143, 0.1);
        line-height: 45px;
        span {
          font-size: 16px;
          font-family: "MicrosoftYaHei-Bold";
          font-weight: bold;
          //   color: rgba(0, 0, 0, 1);
        }
      }
      .tab:hover {
        cursor: pointer;
      }
    }
    .content-table {
      border: 1px solid rgba(229, 229, 229, 1);
      .table-item {
        width: 1161px;
        height: 150px;
        // text-align: left;
        padding: 20px;
        // margin: auto;
        border-bottom: 1px solid rgba(229, 229, 229, 1);
        .table-title {
            float: left;
          width: 418px;
          height: 48px;
          font-size: 16px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 48px;
        }
        .table-text {
          width: 1161px;
          height: 35px;
          font-size: 14px;
          float: left;
          font-family: "MicrosoftYaHeiLight";
          font-weight: 300;
          color: rgba(0, 0, 0, 1);
          line-height: 21px;
          opacity: 0.8;
        }
        .table-date {
          width: 151px;
          height: 12px;
          float: right;
          margin-top: 50px;
          font-size: 12px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 21px;
          opacity: 0.5;
          display: flex;
          align-items: center;
          img {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
