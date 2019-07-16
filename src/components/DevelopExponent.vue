<template>
  <div id="exponent">
    <div class="banner"></div>
    <!-- <swiper
      class="header-swiper"
      :options="swiperOption"
      ref="mySwiper"
      @someSwiperEvent="callback"
    >
      <swiper-slide>
        <img src="../assets/images/develop-bg.png" alt />
      </swiper-slide>
    </swiper>-->
    <div class="content exponent-integrity">
      <div class="content-title">产品诚信指数</div>
      <div class="en-title">Production area integrity index</div>
      <div class="line">
        <img src="../assets/images/line-red.png" alt />
      </div>
      <div class="sub-title">“ 产区诚信指数为产区下所有品牌综合诚信评分得分 ”</div>
      <baidu-map id="mapContainer" class="map-content" :center="center" :zoom="zoom" @ready="handler">
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
    <div class="content exponent-develop">
      <div class="content-title">香型发展指数</div>
      <div class="en-title">Fragrance development index</div>
      <div class="line">
        <img src="../assets/images/line-red.png" alt />
      </div>
      <div class="sub-title">“ 香型发展指数为各种香型对应品牌酒企诚信综合得分 ”</div>
      <div class="chart-content">
        <div id="chartDevelop"></div>
      </div>
    </div>
  </div>
</template>
<script>
// 自定义控件:
// 定义一个控件类，即function
function ZoomControl() {
  // 设置默认停靠位置和偏移量
  this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
  this.defaultOffset = new BMap.Size(10, 10);
}
// // 通过JavaScript的prototype属性继承于BMap.Control
// ZoomControl.prototype = new BMap.Control();

// ZoomControl.prototype.initialize = function(map) {
//   // 创建一个DOM元素
//   var div = document.createElement("div");
//   // var div2 = document.createElement("div");
//   // 添加文字说明
//   div.appendChild(document.createTextNode("缩放"));
//   // div2.appendChild(document.createTextNode("缩小"));
//   // 设置样式
//   div.style.cursor = "pointer";
//   div.style.backgroundColor = "white";
//   div.style.left = "500px";
//   // div2.style.cursor = "pointer";
//   // div2.style.backgroundColor = "white";
//   // 绑定事件，点击一次放大两级
//   div.onclick = function(e) {
//     map.zoomTo(map.getZoom() + 2);
//   };
//   // div2.onclick = function(e) {
//   //   map.zoomTo(map.getZoom() - 2);
//   // };

//   // 添加DOM元素到地图中
//   map.getContainer().appendChild(div);
//   // map.getContainer().appendChild(div2);
//   // 将DOM元素返回
//   return div;
// };
export default {
  name: "Exponent",
  data() {
    return {
      // swiperOption: {
      //   // some swiper options/callbacks
      //   // 所有的参数同 swiper 官方 api 参数
      //   // ...
      // },
      // 地图相关
      //   center: { lng: 0, lat: 0 },
      center: "四川",
      zoom: 7,
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
            color: "rgba(60,60,75,1)",
            borderRadius: 1,
            padding: [3, 5]
          }
        },
        radar: [
          {
            splitNumber: 4, // 雷达图圈数设置
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
            radius: 237,
            axisLine: {
              lineStyle: {
                color: "rgba(128,128,128, 1);"
              }
            },
            name: {
              textStyle: {
                color: "rgba(128,128,128,1);"
              }
            },
            splitArea: {
              show: false,
              areaStyle: {
                color: "rgba(255,0,0,0.3);" // 图表背景的颜色
              }
            }
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            itemStyle: {
              normal: {
                areaStyle: { color: "rgba(255,0,0,0.3)" }
              }
            },
            data: [
              {
                value: [60, 73, 85, 40, 60, 73, 85, 40],
                name: "",
                itemStyle: {
                  normal: {
                    color: "#FF0000",
                    lineStyle: {
                      color: "#FF0000"
                    }
                  }
                },
                label: {
                  normal: {
                    show: true,
                    formatter: params => {
                      return params.value;
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    };
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      this.chart = this.$echarts.init(document.getElementById("chartDevelop"));
      this.chart.setOption(this.option);
      // this.swiper.slideTo(0, 1000, false);
    });
    window.onresize = () => {
      this.chart.resize();
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.getBoundary('成都市');
      map.enableScrollWheelZoom(true);
      var myZoomCtrl = new ZoomControl();
      map.addControl(myZoomCtrl);
      var opts = {
        type: BMAP_NAVIGATION_CONTROL_ZOOM,
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT
      };
      map.addControl(new BMap.NavigationControl(opts));
    },
    infoWindowClose(e) {
      this.infoWindow.show = false;
    },
    infoWindowOpen(e) {
      this.infoWindow.show = true;
    },
    clear() {
      this.infoWindow.contents = "";
    },
    getBoundary(name) {
      
      var map1 = new BMap.Map("mapContainer");
      var bdary = new BMap.Boundary();
      bdary.get(name, function(rs) {
        //获取行政区域
        map1.clearOverlays(); //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        for (var i = 0; i < count; i++) {
          var ply = new BMap.Polygon(rs.boundaries[i], {
            strokeWeight: 2, //设置多边形边线线粗

            strokeOpacity: 0.5, //设置多边形边线透明度0-1
            StrokeStyle: "dashed", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed

            strokeColor: "#ff0000" //设置多边形边线颜色
          }); //建立多边形覆盖物
          map1.addOverlay(ply); //添加覆盖物
          map1.setViewport(ply.getPath()); //调整视野
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
#exponent {
  width: 100%;
  margin: auto;
  .banner {
    width: 100%;
    height: 400px;
    background: url("../assets/images/develop-bg.png");
  }
  .exponent-integrity,
  .exponent-develop {
    height: 1053px;
    // border: 1px solid #ccc;
    background: rgba(248, 248, 248, 1);
    margin: 10px auto;
    .content-title {
      font-size: 30px;
      color: rgba(38, 50, 56, 1);
      height: 40px;
      padding-top: 40px;
    }
    .en-title {
      height: 14px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 24px;
      opacity: 0.5;
      margin: 10px auto;
    }
    .map-content {
      width: 80%;
      margin: 50px auto;
      height: 600px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .sub-title {
      color: rgba(60, 60, 75, 1);
      margin-top: 20px;
      // width: 363px;
      height: 14px;
      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(60, 60, 75, 1);
      line-height: 24px;
    }
    .chart-content {
      height: 600px;
      width: 80%;
      margin: auto;
      #chartDevelop {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
