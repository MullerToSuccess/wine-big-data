<template>
  <div id="hotspot">
    <div class="hotspot-left">
      <div class="topic">
        <div class="title">今日热门话题</div>
        <ul>
          <li @click="goContent()" v-for="(item1, index1) in news" :key="index1">
            <span class="content-title">{{item1.title}}</span>
            <span class="content-date">138937人参与</span>
          </li>
        </ul>
      </div>
      <div class="echart-ditch">
        <div id="chartDitch"></div>
      </div>
    </div>
    <div class="hotspot-center">
      <div class="echart-num">
        <!-- <span class="title">本月舆情数量分布</span> -->
        <div id="chartNum"></div>
      </div>
      <div class="echart-trend">
        <div id="chartTrend"></div>
      </div>
    </div>
    <div class="hotspot-right">
      <div class="news">
        <div class="title">行业突发新闻</div>
        <ul>
          <li @click="goContent()" v-for="(item1, index1) in news" :key="index1">
            <span class="content-title">{{item1.title}}</span>
          </li>
        </ul>
      </div>
      <div class="top10">
        <div id="chartTop10"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotspot",
  data() {
    return {
      news: [
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        },
        {
          title: "怎么从产量看五粮液的稀缺度？",
          date: "2018-5-12"
        }
      ],
      option: {
        title: {
          text: "本月舆情数量分布",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      },
      option1: {
        title: {
          text: "行业突发新闻数量-本月趋势",
          x: "center"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      },
      option2: {
        title: {
          text: "话题渠道分布",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8"
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 110],
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" },
              { value: 30, name: "rose7" },
              { value: 40, name: "rose8" }
            ]
          }
        ]
      },
      option3: {
        title: {
          text: "评论渠道top10",
          x: "center"
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      //   this.computedSize();
      this.chart = this.$echarts.init(document.getElementById("chartNum"));
      this.chart.setOption(this.option);

      this.chart1 = this.$echarts.init(document.getElementById("chartTrend"));
      this.chart1.setOption(this.option1);

      this.chart2 = this.$echarts.init(document.getElementById("chartDitch"));
      this.chart2.setOption(this.option2);

      this.chart3 = this.$echarts.init(document.getElementById("chartTop10"));
      this.chart3.setOption(this.option3);
    });
    window.onresize = () => {
      this.chart.resize();
      this.chart1.resize();
      this.chart2.resize();
      this.chart3.resize();
    };
  }
};
</script>
<style lang='scss' scoped>
#hotspot {
  width: 90%;
  margin: 30px auto;
  //   height: 500px;
  display: flex;
  .hotspot-left {
    width: 30%;
    .topic {
      margin-bottom: 20px;
      width: 500px;
      height: 451px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(204, 209, 223, 1);
      li{
        height: 40px;
        width: 400px;
        line-height: 40px;
      }

    }
    .echart-ditch {
      width: 500px;
      height: 452px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(204, 209, 223, 1);
      #chartDitch {
        width: 100%;
        height: 100%;
      }
    }
  }
  .hotspot-center {
    margin: 0 20px;
    width: 835px;
    height: 923px;
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid rgba(204, 209, 223, 1);
    .echart-num {
      height: 400px;
      margin-bottom: 10px;
      #chartNum {
        width: 100%;
        height: 100%;
      }
    }
    .echart-trend {
      height: 300px;
      #chartTrend {
        width: 100%;
        height: 100%;
      }
    }
  }
  .hotspot-right {
    width: 30%;
    .news {
      width: 500px;
      height: 451px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(204, 209, 223, 1);
      margin-bottom: 20px;
      li{
        height: 40px;
        width: 400px;
        line-height: 40px;
      }
    }
    .top10 {
      width: 500px;
      height: 454px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(204, 209, 223, 1);
      #chartTop10 {
        width: 100%;
        height: 100%;
      }
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
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 24px;
    width: 112px;
    height: 18px;
    font-size: 18px;
    font-family: "MicrosoftYaHei-Bold";
    font-weight: bold;
    color: rgba(81, 97, 128, 1);
    line-height: 34px;
  }
}
</style>
