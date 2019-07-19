<template>
  <div id="example">
    <div class="banner"></div>
    <!-- 酒企 -->
    <div class="industry-content content-1">
      <div class="content-title">
        <span class="title">诚信示范酒企</span>
        <div class="time">
          更新日期：
          {{updateTime}}
        </div>
        <div class="line">
          <img src="../assets/images/line-red.png" />
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%" @row-click='clickBusiness'>
        <el-table-column label type="index" show-overflow-tooltip width="100">
          <template slot-scope="scope">
            <img
              v-if="scope.row.rank == 1"
              src="../assets/images/golden.png"
              style="width:38px;height:33px"
            />
            <img
              v-else-if="scope.row.rank == 2"
              src="../assets/images/silver.png"
              style="width:38px;height:33px"
            />
            <img
              v-else-if="scope.row.rank == 3"
              src="../assets/images/broze.png"
              style="width:38px;height:33px"
            />
            <span v-else style="margin-left: 10px;">{{scope.row.rank}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="酒企名称"></el-table-column>
        <el-table-column prop="code" label="统一社会信用代码"></el-table-column>
        <el-table-column prop="address" label="地区"></el-table-column>
        <el-table-column prop="grade" label="诚信评级"></el-table-column>
        <el-table-column prop="number" label="证书编号"></el-table-column>
      </el-table>
    </div>
    <!-- 企业家 -->
    <div class="industry-content content-2">
      <div class="content-title">
        <span class="title">诚信示范企业家</span>
        <div class="time">
          更新日期：
          {{updateTime}}
        </div>
        <div class="line">
          <img src="../assets/images/line-red.png" />
        </div>
      </div>
      <div class="tab2-content-item">
        <div class="item-aim" v-for="(item, index) in aims" :key="index" @click="clickBoss">
          <img src="@/assets/images/boss.png" style="width: 125px;height: 125px" />
          <div>
            <span class="item-name">{{ item.name }}</span>
            <span>/ 副总裁</span>
          </div>
          <div class="item-content">宜宾五粮液股份有限公司</div>
        </div>
      </div>
    </div>
    <!-- 酒商 -->
    <div class="industry-content content-3">
      <div class="content-title">
        <span class="title">诚信示范酒商</span>
        <div class="time">
          更新日期：
          {{updateTime}}
        </div>
        <div class="line">
          <img src="../assets/images/line-red.png" />
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%" @row-click='clickGoods'>
        <el-table-column label type="index" show-overflow-tooltip width="100">
          <template slot-scope="scope">
            <img
              v-if="scope.row.rank == 1"
              src="../assets/images/golden.png"
              style="width:38px;height:33px"
            />
            <img
              v-else-if="scope.row.rank == 2"
              src="../assets/images/silver.png"
              style="width:38px;height:33px"
            />
            <img
              v-else-if="scope.row.rank == 3"
              src="../assets/images/broze.png"
              style="width:38px;height:33px"
            />
            <span v-else>{{scope.row.rank}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="酒企名称"></el-table-column>
        <el-table-column prop="code" label="统一社会信用代码"></el-table-column>
        <el-table-column prop="address" label="地区"></el-table-column>
        <el-table-column prop="grade" label="诚信评级"></el-table-column>
        <el-table-column prop="number" label="证书编号"></el-table-column>
      </el-table>
    </div>
    <!-- 酒品 -->
    <div class="industry-content content-4">
      <div class="content-title">
        <span class="title">诚信示范酒品</span>
        <div class="time">
          更新日期：
          {{updateTime}}
        </div>
        <div class="line">
          <img src="../assets/images/line-red.png" />
        </div>
      </div>
      <div class="tab4-content-item">
        <div class="item-aim" v-for="(item, index) in wines" :key="index" @click="clickBoss">
          <img style="width:100%;height: 180px" src="@/assets/images/wine-icon.png" />
          <div class="item-name">
            <span style="float: left; margin-left: 20px;">52度五粮国宾酒精品500ml</span>
            <span style="float:right;margin-right:20px;color: #c8c8c8;">酱香型</span>
          </div>
          <div class="item-content">
            <span style="float: left; margin-left: 20px;">宜宾五粮液股份有限公司</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 门店 -->
    <div class="industry-content content-5">
      <div class="content-title">
        <span class="title">诚信示范门店</span>
        <div class="time">
          更新日期：
          {{updateTime}}
        </div>
        <div class="line">
          <img src="../assets/images/line-red.png" />
        </div>
      </div>
      <img src="../assets/images/map-bg.png" />
      <!-- <baidu-map
        id="mapContainer1"
        class="map-content"
        :center="center"
        :zoom="zoom"
        @ready="handler"
      >
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
      </baidu-map> -->
    </div>
  </div>
</template>
<script>
function ZoomControl() {
  // 设置默认停靠位置和偏移量
  this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
  this.defaultOffset = new BMap.Size(10, 10);
}

export default {
  name: "Example",
  data() {
    return {
      // 地图相关
      //   center: { lng: 0, lat: 0 },
      center: "四川",
      zoom: 7,
      infoWindow: {
        show: true,
        contents:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      updateTime: "2019-7-1",
      tableData: [
        {
          date: "宜宾五粮液股份有限公司",
          name: "宜宾五粮液股份有限公司",
          address: "四川省宜宾市",
          code: "913502063028548455",
          grade: "AAA",
          number: "201907601100062",
          rank: 1
        },
        {
          date: "宜宾五粮液股份有限公司",
          name: "宜宾五粮液股份有限公司",
          address: "四川省宜宾市",
          code: "913502063028548455",
          grade: "AAA",
          number: "201907601100062",
          rank: 2
        },
        {
          date: "宜宾五粮液股份有限公司",
          name: "宜宾五粮液股份有限公司",
          address: "四川省宜宾市",
          code: "913502063028548455",
          grade: "AAA",
          number: "201907601100062",
          rank: 3
        },
        {
          date: "宜宾五粮液股份有限公司",
          name: "宜宾五粮液股份有限公司",
          address: "四川省宜宾市",
          code: "913502063028548455",
          grade: "AAA",
          number: "201907601100062",
          rank: 4
        },
        {
          date: "宜宾五粮液股份有限公司",
          name: "宜宾五粮液股份有限公司",
          address: "四川省宜宾市",
          code: "913502063028548455",
          grade: "AAA",
          number: "201907601100062",
          rank: 5
        }
      ],
      wines: [
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        }
      ],
      aims: [
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "尹雪涛",
          content: "副总裁"
        }
      ]
    };
  },
  methods: {
    clickBusiness(row, column, event) {
      this.$router.push({ name: "bussinessDetail" });
    },
    clickStore(row, column, event) {
      this.$router.push({ name: "storeDetail" });
    },
    clickBoss() {
      this.$router.push({ name: "bossDetail" });
    },
    clickGoods(row, column, event) {
      this.$router.push({ name: "goodsDetail" });
    },
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
      
      var map1 = new BMap.Map("mapContainer1");
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
<style lang="scss" scoped>
#example {
  width: 100%;
  margin: auto;
  .banner {
    width: 100%;
    height: 400px;
    background: url("../assets/images/example-bg.png");
  }
  .industry-content {
    width: 100%;
    height: 500px;
    margin: auto;
    .content-title {
      margin: 20px auto;
      text-align: center;
      .title {
        text-align: center;
        width: 180px;
        height: 31px;
        font-size: 30px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(38, 50, 56, 1);
        line-height: 24px;
      }
      .time {
        // text-align: center;
        width: 231px;
        margin: 10px auto;
        height: 15px;
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 24px;
      }
    }
  }
  .content-1 {
    width: 80%;
    padding-top: 20px;
  }
  .content-2 {
    height: 871px;
    background: rgba(248, 248, 248, 1);
    padding-top: 20px;
  }
  .content-3 {
    width: 80%;
    padding-top: 20px;
  }
  .content-4 {
    height: 871px;
    background: rgba(248, 248, 248, 1);
    padding-top: 20px;
    overflow: hidden;
  }
  .content-5{
     width: 80%;
    padding-top: 20px;
    height: 871px;
    
  }
  .tab2-content-item {
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    // height: 300px;
    width: 80%;
    margin: auto;
    .item-aim {
      width: 18%;
      height: 290px;
      background: rgba(255, 255, 255, 1);
      border-radius: 6px;
      margin: 10px 10px;
      padding-top: 37px;
      line-height: 30px;
      img {
        width: 60px;
        height: 60px;
      }
      .item-content {
        color: #c8c8c8;
      }
      .item-name {
        font-size: 19px;
        font-family: "MicrosoftYaHei-Bold";
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  .tab4-content-item {
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    // height: 300px;
    width: 80%;
    margin: auto;
    .item-aim {
      // background: url("../assets/images/wine-icon.png");
      width: 30%;
      height: 290px;
      background: rgba(255, 255, 255, 1);
      border-radius: 6px;
      margin: 10px 10px;
      line-height: 30px;
      img {
        width: 60px;
        height: 60px;
      }
      .item-content {
        color: #c8c8c8;
      }
    }
  }
  .item-aim:hover{
    cursor: pointer;
  }
}
</style>
