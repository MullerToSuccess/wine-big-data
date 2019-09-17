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
      <el-table :data="tableData" style="width: 100%" @row-click="clickBusiness">
        <el-table-column label="序号" type="index" show-overflow-tooltip width="100">
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
      <div class="content-title" style="margin-top: 40px">
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
          <img :src="item.src" style="width: 125px;height: 125px;border-radius:50%"/>
          <div>
            <span class="item-name">{{ item.name }}</span>
            <span>{{item.content}}</span>
          </div>
          <div class="item-content">{{item.company}}</div>
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
      <el-table :data="tableData3" style="width: 100%" @row-click="clickGoods">
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
    <div class="industry-content content-4" >
      <div class="content-title" style="margin-top: 40px">
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
        <div class="item-aim" v-for="(item, index) in wines" :key="index" @click="clickQuality">
          <img style="width:100%;height: 180px" :src="item.src" />
          <div class="item-name" style="margin-top: 20px">
            <span style="float: left; margin-left: 20px;">{{ item.name }}</span>
            <span style="float:right;margin-right:20px;color: #c8c8c8;">{{ item.type }}</span>
          </div>
          <br />
          <div class="item-content">
            <span style="float: left; margin-left: 20px;">{{ item.company}}</span>
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
      <img style="z-index: 1000;position:absolute;left:300px" src="../assets/images/map-bg.png" />
      <!-- <div style="width: 100%;z-index: 1001;position:absolute;left: 1080px;width: 400px">
        <div style="background: #ccc;height: 60px;line-height: 60px">诚信示范门店</div>
        <el-table :data="tableData2" @row-click='clickStore'>
          <el-table-column prop="name" label="企业名称"></el-table-column>
          <el-table-column prop="date" label="证书编号"></el-table-column>
        </el-table>
      </div> -->

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
      </baidu-map>-->
    </div>
  </div>
</template>
<script>
// 引入图片（从后台来的静态图片路径）
import boss1 from '../assets/images/boss-1.jpg';
import boss2 from '../assets/images/boss-2.jpg';
import boss3 from '../assets/images/boss-3.jpg';
import boss4 from '../assets/images/boss-4.jpg';
import boss5 from '../assets/images/boss-5.jpg';
import boss6 from '../assets/images/boss-6.jpg';
import boss7 from '../assets/images/boss-7.jpg';
import boss8 from '../assets/images/boss8.png';
import boss9 from '../assets/images/boss9.png';
import boss10 from '../assets/images/boss10.png';

import wine1 from '../assets/images/001.png';
import wine2 from '../assets/images/002.png';
import wine3 from '../assets/images/003.png';
import wine4 from '../assets/images/004.png';
import wine5 from '../assets/images/005.png';
import wine6 from '../assets/images/006.png';

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
      tableData2: [
        { name: "宜宾五粮液股份有限公司", date: "CXP-2018-00548" },
        { name: "宜宾五粮液股份有限公司", date: "CXP-2018-00548" },
        { name: "宜宾五粮液股份有限公司", date: "CXP-2018-00548" },
        { name: "宜宾五粮液股份有限公司", date: "CXP-2018-00548" },
        { name: "宜宾五粮液股份有限公司", date: "CXP-2018-00548" },
        { name: "宜宾五粮液股份有限公司", date: "CXP-2018-00548" },
      ],
      tableData: [
        {
          date: "",
          name: "中国贵州茅台酒厂有限责任公司",
          address: "贵州省",
          code: "913502063028548455",
          grade: "AAA",
          number: "520000000068409",
          rank: 1
        },
        {
          date: "",
          name: "五粮液集团有限公司",
          address: "四川省",
          code: "91511500709066998M",
          grade: "AAA",
          number: "511500000052322",
          rank: 2
        },
        {
          date: "",
          name: "江西李渡酒业有限公司",
          address: "江西省",
          code: "91360100736364018D",
          grade: "AAA",
          number: "360100520001805",
          rank: 3
        },
        {
          date: "",
          name: "山西汾酒股份有限公司",
          address: "山西省",
          code: "911400001123599660",
          grade: "AAA",
          number: "140000100028286",
          rank: 4
        },{
          date: "",
          name: "泸州老窖集团有限责任公司",
          address: "四川省",
          code: "91510500723203346U",
          grade: "AAA",
          number: "510500000001710",
          rank: 5
        },{
          date: "",
          name: "陕西省凤翔县西凤酒厂",
          address: "陕西省",
          code: "91610300221307065G",
          grade: "AAA",
          number: "610300000002229",
          rank: 6
        }
        // ,{
        //   date: "",
        //   name: "四川剑南春集团有限责任公司",
        //   address: "四川省",
        //   code: "915106837175377539",
        //   grade: "AAA",
        //   number: "510683000001409",
        //   rank: 7
        // }
      ],

      tableData3: [
        {
          date: "",
          name: "成都市宏森文富酒业有限公司",
          address: "四川省",
          code: "913502063028548455",
          grade: "AAA",
          number: "520000000068409",
          rank: 1
        },
        {
          date: "",
          name: "成都弘基进出口贸易发展有限公司",
          address: "四川省",
          code: "91511500709066998M",
          grade: "AAA",
          number: "511500000052322",
          rank: 2
        },
        {
          date: "",
          name: "成都宏兴金果子商贸有限公司",
          address: "四川省",
          code: "91360100736364018D",
          grade: "AAA",
          number: "360100520001805",
          rank: 3
        },
        {
          date: "",
          name: "宜宾市开元酒业有限责任公司(简阳店)",
          address: "四川省",
          code: "911400001123599660",
          grade: "AAA",
          number: "140000100028286",
          rank: 4
        },{
          date: "",
          name: "四川省广安市糖酒有限责任公司",
          address: "四川省",
          code: "91510500723203346U",
          grade: "AAA",
          number: "510500000001710",
          rank: 5
        },{
          date: "",
          name: "阆中市瑞峰酒业有限公司（专）",
          address: "四川省",
          code: "91610300221307065G",
          grade: "AAA",
          number: "610300000002229",
          rank: 6
        },{
          date: "",
          name: "阆中市瑞峰酒业有限公司（旗）",
          address: "四川省",
          code: "91610300221355065G",
          grade: "AAA",
          number: "610300088002229",
          rank: 7
        },{
          date: "",
          name: "仪陇县新政镇宇弘食品经营部",
          address: "四川省",
          code: "91610300221388065G",
          grade: "AAA",
          number: "610300000006629",
          rank: 8
        },{
          date: "",
          name: "南部县昌平酒业有限公司",
          address: "四川省",
          code: "91610300221366065G",
          grade: "AAA",
          number: "610300000002449",
          rank: 9
        },{
          date: "",
          name: "南充市三名酒业有限公司（南充专卖店）",
          address: "四川省",
          code: "916103002213070887",
          grade: "AAA",
          number: "610300000003339",
          rank: 10
        }
      ],
      wines: [
        {
          src: wine1,
          name: "五粮液 53%vol 500ml",
          type: "浓香",
          company:'五粮液集团有限公司'
        },{
          src: wine2,
          name: "五粮液 53%vol 500ml",
          type: "浓香",
          company:'五粮液集团有限公司'
        },
        {
          src: wine3,
          name: "五粮液  52%vol  500ml ",
          type: "浓香",
          company:'五粮液集团有限公司'
        },{
          src: wine4,
          name: "五粮液	50%vol	500ml",
          type: "浓香",
          company:'五粮液集团有限公司'
        },{
          src: wine5,
          name: "龙元素 52% 500ml",
          type: "浓香",
          company:'五粮液集团有限公司'
        },{
          src: wine6,
          name: "五粮液 52度 500ml单瓶装",
          type: "浓香",
          company:'五粮液集团有限公司'
        }
      ],
      aims: [
        {
          src: boss1,
          name: "李保芳",
          content: "董事长/总经理",
          company: '中国贵州茅台酒厂有限责任公司'
        },
        {  
          src: boss2,
          name: "李曙光",
          content: "董事长",
          company: '五粮液集团有限公司'
        },
        {  
          src: boss3,
          name: "谭忠豹",
          content: "董事长",
          company: '山西汾酒股份有限公司'
        },
        {
          src: boss4,
          name: "张良",
          content: "董事长",
          company:'泸州老窖集团有限责任公司'
        },{
          src: boss5,
          name: "乔天明",
          content: "董事长",
          company:'四川剑南春集团有限责任公司'
        },{
          src: boss6,
          name: "梁金辉",
          content: "董事长",
          company:'安徽古井贡酒股份有限公司'
        },{
          src: boss7,
          name: "周洪江",
          content: "董事长",
          company:'烟台张裕集团有限公司'
        },
        {
          src: boss8,
          name: "梁金辉",
          content: "董事长",
          company:'古井贡酒股份有限公司'
        },
        {
          src: boss9,
          name: "汪俊林",
          content: "董事长",
          company:'郎酒集团有限公司'
        },
        {
          src: boss10,
          name: "陶石泉",
          content: "董事长",
          company:'江小白酒业股份有限公司'
        },
        
      ]
    };
  },
  methods: {
    clickBusiness(row, column, event) {
      this.$router.push({ name: "integrityDetail" });
    },
    clickStore(row, column, event) {
      this.$router.push({ name: "storeDetail" });
    },
    clickBoss() {
      this.$router.push({ name: "bossDetail" });
    },
    clickGoods(row, column, event) {
      this.$router.push({ name: "bussinessDetail" });
    },
    clickQuality() {
      this.$router.push({ name: "goodsDetail" });
    },
    clickStore(){
      this.$router.push({ name: "storeDetail" });
    },
    handler({ BMap, map }) {
      this.getBoundary("成都市");
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
    height: 520px;
    margin: 40px auto;
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
    height: 780px;
  }
  .content-4 {
    height: 840px;
    background: rgba(248, 248, 248, 1);
    padding-top: 20px;
    overflow: hidden;
  }
  .content-5 {
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
      padding-top: 50px;
      line-height: 30px;
      img {
        width: 60px;
        height: 60px;
        margin-bottom: 30px;
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
  .item-aim:hover {
    cursor: pointer;
  }
}
</style>
