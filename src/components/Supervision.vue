<template>
  <div id="supervision">
    <div class="banner"></div>
    <div class="content-all">
      <div class="tab-content-news">
        <div
          style="height: 460px; border:1px solid #ccc;margin-right:10px;border:1px solid rgba(224,224,224,1);"
        >
          <div
            @click="goContent"
            style="text-align: center; height: 170px;line-height: 170px"
            class="content content-1"
          >——&nbsp;部委监管公示&nbsp;——</div>
          <ul>
            <li @click="goDetail(item1)" v-for="(item1, index1) in dynamic[0].news" :key="index1">
              <span class="content-title-1">{{item1.title}}</span>
              <span class="content-date">{{ item1.date}}</span>
            </li>
          </ul>
        </div>
        <div
          style="height: 460px; border:1px solid #ccc;margin:0 10px;border:1px solid rgba(224,224,224,1);"
        >
          <div
            @click="goContent"
            style="text-align: center; height: 170px;line-height: 170px"
            class="content content-2"
          >——&nbsp;社会监督公示&nbsp;——</div>
          <ul>
            <li @click="goDetail(item1)" v-for="(item1, index1) in news" :key="index1">
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
export default {
  name: "Search",
  data() {
    return {
      activeName: "second",
      dynamic: [
        {
          news: [
            {
              title: " 国家发展和改革委员会公告 2019年第5号",
              date: "2018-5-12"
            },
            {
              title: " 关于外商投资安全审查申报渠道调整的公告 2019年第4号",
              date: "2018-5-12"
            },
            {
              title: " 高效节能家电产品销售统计调查制度 2019年第2号公告",
              date: "2018-5-12"
            },
            {
              title:
                " 国家发展改革委直属、联系单位涉企收费公示表 2019年第1号公告",
              date: "2018-5-12"
            },
            {
              title:
                " 关于2019年棉花关税配额外优惠关税税率进口配额申请有关事项的公告 2019年第3号",
              date: "2018-5-12"
            },
            {
              title:
                " 关于发布钢铁行业等14个行业清洁生产评价指标体系的公告 2018年第17号",
              date: "2018-5-12"
            },
            {
              title: "《洗染业清洁生产评价指标体系》 2018年第15号公告",
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
      ],
      news: [
        {
          title:
            "国家发展改革委举行7月份定时定主题新闻发布会 介绍宏观经济运行情况并回应热点问题",
          date: "2018-5-12"
        },
        {
          title:
            "国家发展改革委、商务部发布2019年版全国和自贸试验区外商投资准入负面清单",
          date: "2018-5-12"
        },
        {
          title:
            "国家发展改革委举行6月份定时定主题新闻发布会 介绍宏观经济运行情况并回应热点问题",
          date: "2018-5-12"
        },
        {
          title: "国家发展改革委召开支持农民工等人员返乡创业试点工作现场会",
          date: "2018-5-12"
        },
        {
          title:
            "“资源型地区经济转型发展”系列报道之二十九：打造“五大平台” 引领转型发展",
          date: "2018-5-12"
        },
        {
          title: "2018年1-8月四川省规模以上工业增加值同比增长8.3%",
          date: "2018-5-12"
        },
        {
          title: "2018年前三季度轻工业运行总体平稳",
          date: "2018-5-12"
        }
      ],
      filterText: "" // 搜索内容
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    goContent(item) {
      this.$router.push({
        name: "supervisionDetail"
      });
    },
    goDetail() {
      this.$router.push({
        name: "newsDetail2"
      });
    },
  }
};
</script>
<style lang="scss" scoped>
#supervision {
  // height: 500px;

  .banner {
    width: 100%;
    height: 400px;
    background: url("../assets/images/supervision-bg.png");
  }
  .content-all {
    display: flex;
    align-content: center;
    align-items: center;
    .left-content,
    .right-content {
      width: 50%;
      height: 500px;
      padding: 10px;
      .title {
        margin-bottom: 20px;
        .title-name {
          font-size: 20px;
          font-weight: bold;
          // float: left;
        }
        .goContent {
          float: right;
        }
      }

      ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        li {
          padding-left: 14px;
          .content-date {
            margin-left: 30px;
            float: right;
          }
        }
      }
    }
    .tab-content-news {
      // height: 703px;
      display: flex;
      align-content: center;
      align-items: center;
      width: 70%;
      background: #fff;
      margin: 40px auto;
      flex-wrap: wrap;
      div {
        text-align: left;
        // padding: 2px;
        // width: 45%;
        height: 300px;
        .content {
          width: 600px;
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
          background: url("../assets/images/supervision-1.png");
          background-size: 100% 100%;
        }
        .content-2 {
          background: url("../assets/images/supervision-2.png");
          background-size: 100% 100%;
        }
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
          width: 280px;
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
  }
}
</style>


