<template>
  <div id="example">
    <div class="industry-content">
      <div class="content-title">
        <span style="font-size: 20px;font-weight: bold">诚信示范酒企</span>
        <span>更新日期：{{updateTime}}</span>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="酒企名称"></el-table-column>
        <el-table-column prop="name" label="统一社会信用代码"></el-table-column>
        <el-table-column prop="name" label="地区"></el-table-column>
        <el-table-column prop="name" label="诚信评级"></el-table-column>
        <el-table-column prop="name" label="证书编号"></el-table-column>
      </el-table>
    </div>
    <div class="industry-content">
      <div class="content-title">
        <span style="font-size: 20px;font-weight: bold">诚信示范企业家</span>
        <span>更新日期：{{updateTime}}</span>
      </div>
      <div class="tab2-content-item">
        <div class="item-aim" v-for="(item, index) in aims" :key="index">
          <img src="@/assets/images/wine-icon.png" />
          <div class="item-name">{{ item.name }}</div>
          <div class="item-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div class="industry-content">
      <div class="content-title">
        <span style="font-size: 20px;font-weight: bold">诚信示范酒商</span>
        <span>更新日期：{{updateTime}}</span>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="酒企名称"></el-table-column>
        <el-table-column prop="name" label="统一社会信用代码"></el-table-column>
        <el-table-column prop="name" label="地区"></el-table-column>
        <el-table-column prop="name" label="诚信评级"></el-table-column>
        <el-table-column prop="name" label="证书编号"></el-table-column>
      </el-table>
    </div>
    <div class="industry-content">
      <div class="content-title">
        <span style="font-size: 20px;font-weight: bold">诚信示范酒品</span>
        <span>更新日期：{{updateTime}}</span>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="酒企名称"></el-table-column>
        <el-table-column prop="name" label="统一社会信用代码"></el-table-column>
        <el-table-column prop="name" label="地区"></el-table-column>
        <el-table-column prop="name" label="诚信评级"></el-table-column>
        <el-table-column prop="name" label="证书编号"></el-table-column>
      </el-table>
    </div>
    <div class="industry-content">
      <div class="content-title">
        <span style="font-size: 20px;font-weight: bold">诚信示范门店</span>
        <span>更新日期：{{updateTime}}</span>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="酒企名称"></el-table-column>
        <el-table-column prop="name" label="统一社会信用代码"></el-table-column>
        <el-table-column prop="name" label="地区"></el-table-column>
        <el-table-column prop="name" label="诚信评级"></el-table-column>
        <el-table-column prop="name" label="证书编号"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Example",
  data() {
    return {
      updateTime: "2019-7-1",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      aims: [
        {
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },
        {
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        },{
          src: "@/assets/images/wine-icon.png",
          name: "张晓月",
          content: "副总裁"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#example {
  width: 80%;
  margin: auto;
  .industry-content {
    width: 100%;
    height: 500px;
    .content-title {
      margin-bottom: 20px;
      span {
        display: block;
      }
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
      width: 15%;
      height: 150px;
      img {
        width: 60px;
        height: 60px;
      }
      .item-content {
        color: #c8c8c8;
      }
    }
  }
}
</style>
