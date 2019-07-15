<template>
  <div id="exponent">
    <div class="exponent-integrity">
      <div class="title">产品诚信指数</div>
      <div class="sub-title">产区诚信指数为产区下所有品牌综合诚信评分得分</div>
      <baidu-map class="map-content" :center="center" :zoom="zoom" @ready="handler">
        <bm-info-window
          :position="{lng: 116.404, lat: 39.915}"
          title="Info Window Title"
          :show="infoWindow.show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
        >
          <p v-text="infoWindow.contents"></p>
          <ul>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
          <button @click="clear">Clear</button>
        </bm-info-window>
      </baidu-map>
    </div>
    <div class="exponent-develop">
      <div class="title">香型发展指数</div>
      <div class="sub-title">香型发展指数为各种香型对应品牌酒企诚信综合得分</div>
      <div class="chart-content">
        <div id="chartDevelop"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Exponent",
  data() {
    return {
      // 地图相关
      //   center: { lng: 0, lat: 0 },
      center: "北京",
      zoom: 8,
      infoWindow: {
        show: true,
        contents:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      option: {
        tooltip: {
          trigger: "axis"
        },
        name: {
          textStyle: {
            color: "#fff",
            backgroundColor: "#999",
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        radar: [
          {
            indicator: [
              { text: "馥郁香型", max: 100 },
              { text: "酱香型", max: 100 },
              { text: "浓香型", max: 100 },
              { text: "清香型", max: 100 },
              { text: "米香型", max: 100 },
              { text: "芝麻香型", max: 100 },
              { text: "其他香型", max: 100 },
              { text: "凤香型", max: 100 }
            ],
            center: ["50%", "50%"],
            radius: 80
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [
              {
                value: [60, 73, 85, 40, 60, 73, 85, 40],
                name: "某软件"
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = this.$echarts.init(document.getElementById("chartDevelop"));
      this.chart.setOption(this.option);
    });
    window.onresize = () => {
      this.chart.resize();
    };
  },
  methods: {
    handler({ BMap, map }) {
      //   console.log(BMap, map);
      //   this.center.lng = 116.404;
      //   this.center.lat = 39.915;
      //   this.zoom = 15;
    },
    infoWindowClose(e) {
      this.infoWindow.show = false;
    },
    infoWindowOpen(e) {
      this.infoWindow.show = true;
    },
    clear() {
      this.infoWindow.contents = "";
    }
  }
};
</script>

<style lang='scss' scoped>
#exponent {
  width: 80%;
  margin: auto;
  .exponent-integrity,
  .exponent-develop {
    height: 500px;
    border: 1px solid #ccc;

    margin: 10px auto;
    .map-content {
      width: 100%;
      height: 450px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .sub-title {
      color: #c8c8c8;
    }
    .chart-content {
      height: 500px;
      #chartDevelop {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
