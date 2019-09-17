<template>
  <div class="appeal">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/AccusationAndAppeal')">诚信申诉举报</span> >
      <span @click="goRouter('/AccusationAndAppeal/Appeal')">酒企申诉</span>
    </div>
    <div class="container">
      <div class="process">
        <div style="width: 30%">诚信申述流程</div>
        <div class="process-container">
          <div class="process-content">
            <img src="@/assets/images/accusation-3.png" alt />
            <div class="process-name">诚信查询</div>
          </div>
          <div style="width:100px;height:100px">
            <img style src="@/assets/images/arrow.png" alt />
          </div>

          <div class="process-content">
            <img src="@/assets/images/accusation-4.png" alt />
            <div class="process-name">申诉申请</div>
          </div>
          <div style="width:100px;height:100px">
            <img style src="@/assets/images/arrow.png" alt />
          </div>
          <div class="process-content">
            <img src="@/assets/images/accusation-5.png" alt />
            <div class="process-name">申诉受理</div>
          </div>
          <div style="width:100px;height:100px">
            <img style src="@/assets/images/arrow.png" alt />
          </div>
          <div class="process-content">
            <img src="@/assets/images/accusation-6.png" alt />
            <div class="process-name">申诉核查</div>
          </div>
          <div style="width:100px;height:100px">
            <img style src="@/assets/images/arrow.png" alt />
          </div>
          <div class="process-content">
            <img src="@/assets/images/accusation-7.png" alt />
            <div class="process-name">申诉结果</div>
          </div>
        </div>
      </div>
      <div class="search-content">
        <div class="select-group">
          <img :src="selSrc" class="search-image" />
          <el-select v-model="value" placeholder="请选择" class="search-select" @select="changeSel">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="gap"></div>

        <el-input placeholder="请输入内容" v-model="searchText"></el-input>
        <div class="search-btn" @click="goSearch()">
          <img src="@/assets/images/search-btn.png" alt />
        </div>
      </div>
      <div
        style="text-align: left;margin-left: 40px;font-family:MicrosoftYaHei;
font-weight:400;
color:rgba(22,22,22,0.8);"
      >
        <div class="tip-gap" style="margin-top: 20px;margin-left:-8px"></div>我的申诉
      </div>
      <div class="list">
        <div class="list-content">
          <div
            class="declare-form"
            @click="goDetail(item)"
            v-for="(item, index) in expalainList"
            :key="index"
          >
            <div class="declare-title">
              <div class="company">{{ item.companyName }}</div>
              <div>申诉类型：{{ item.explainType }}</div>
              <div>提交申诉时间：{{ item.createTime }}</div>
            </div>
            <div
              :class="{finish: true, finishIcon: item.status == '0' ? true : false, finishIcon2: item.status == '1' ? true : false, finishIcon3: item.status == '2' ? true : false, finishIcon4: item.status == '3' ? true : false}"
            ></div>
          </div>
        </div>
        <div class="tip-box">
          <div class="title" @click="goAppealForm">
            <img src="@/assets/images/appeal-tip.png" alt="">
            申请申诉</div>
          <div class="content">
            <span>申诉资料报错但不限于以下材料：</span>
            <span>
              1.申诉处理申请表,点击
              <a @click="downloadTemp" style="color: #E62020">下载模板</a>
            </span>
            <span>2.组织机构代码证件复印件</span>
            <span>3.代理人居民身份证原件</span>
            <span>4.授权委托书、加公章</span>
            <span>5.法人信用查询报告及其相关证据</span>
          </div>
        </div>
      </div>
      <div class="pagination" style="margin-top: 20px;">
        <el-row type="flex" justify="center">
          <el-col :span="22">
            <el-pagination
              class="right"
              layout="total, prev, pager, next, jumper"
              :total="searchParams.total"
              :page-size="searchParams.size"
              @current-change="currentPageChange"
            ></el-pagination>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import src2 from "@/assets/images/search-people.png";
import src1 from "@/assets/images/search-company.png";
import accusation from "./axios/index";
export default {
  name: "Appeal",
  data() {
    return {
      selSrc: src1,
      searchText: "",
      searchParams: {
        currentPage: 1,
        total: 10,
        size: 4,
        companyName: "",
        legalPerson: ""
      },
      changeSel: "",
      options: [
        {
          value: "1",
          label: "企业"
        },
        {
          value: "2",
          label: "法人代表"
        }
      ],
      value: "1",
      status1: true,
      status2: true,
      status3: false,
      status4: false,
      expalainList: [] //申诉列表
    };
  },
  watch: {
    value: function(newVal) {
      if (newVal == 1) {
        this.selSrc = src1;
      } else {
        this.selSrc = src2;
      }
    },
    "searchParams.currentPage": function(newVal){
        this.listSincerityExplainByUser()
    }
  },
  mounted() {
    this.listSincerityExplainByUser();
  },
  methods: {
    listSincerityExplainByUser() {
      let params = {
        currentPage: this.searchParams.currentPage,
        pageSize: this.searchParams.size,
        companyName: this.searchParams.companyName,
        legalPerson: this.searchParams.legalPerson
      };
      accusation.listSincerityExplainByUser(params).then(res => {
        this.expalainList = res.data.records;
        this.searchParams.currentPage = res.data.current;
        // this.searchParams.size = res.data.size;
        this.searchParams.total = res.data.total;
      });
    },
    currentPageChange(current) {
      this.searchParams.currentPage = current;
    },
    goSearch() {
      if (this.value == 1) {
        this.searchParams.companyName = this.searchText;
        this.searchParams.legalPerson = "";
      } else {
        this.searchParams.companyName = "";
        this.searchParams.legalPerson = this.searchText;
      }
      this.searchParams.currentPage = 1;
      this.listSincerityExplainByUser();
    },
    goRouter(path) {
      this.$router.push(path);
    },
    goAppealForm() {
      this.$router.push({ name: "AppealForm" });
    },
    goDetail(detail) {
      this.$router.push({ name: "AppealForm", params: detail });
    },
    // 下载模板
    downloadTemp() {}
  }
};
</script>
<style lang="scss" scoped>
.appeal {
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
  .container {
    width: 1201px;
    margin: 10px auto;
    // height: 827px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    .process {
      width: 1201px;
      height: 163px;
      background: rgba(246, 246, 246, 1);
      line-height: 163px;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(22, 22, 22, 1);
      display: flex;
      .process-container {
        width: 60%;
        float: right;
        display: flex;
      }
      .process-content {
        width: 65px;
        height: 65px;
        // position: absolute;
        // margin-right: 60px;
        line-height: 65px;
        background: rgba(212, 212, 212, 0.5);
        border: 1px solid rgba(102, 102, 102, 1);
        border-radius: 50%;
        display: inline-block;
        margin-top: 45px;
        img {
          opacity: 0.5;
        }
      }
      .process-name {
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        line-height: 30px;
        color: rgba(22, 22, 22, 1);
      }
    }
    .search-content {
      //   width: 60%;
      //   // margin: auto;
      //   margin-left: 20%;
      width: 91%;
      margin-left: 30px;
      margin-top: 20px;
      display: flex;
      border: 1px solid rgba(224, 224, 224, 1);
      .select-group {
        width: 200px;
        display: flex;
        align-content: center;
        align-items: center;
        padding-left: 5px;
      }
      .gap {
        width: 2px;
        height: 30px;
        background: #ccc;
        margin-top: 15px;
        // line-height: 20px;
      }
    }
    .search-btn {
      width: 81px;
      height: 60px;
      background-color: rgba(227, 36, 42, 1);
      img {
        width: 20px;
        height: 20px;
        margin: 20px auto;
      }
    }
    .search-btn:hover {
      cursor: pointer;
    }
    .list-content {
      width: 750px;
      height: 470px;
      .declare-form {
        // margin: auto;
        //   margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        // width: 60%;
        // height: 120px;
        width: 750px;
        height: 110px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(234, 234, 234, 1);
        align-content: center;
        align-items: center;
        img {
          width: 46px;
          height: 45px;
          margin-left: 39px;
        }
        .declare-title {
          text-align: left;
          margin-left: 20px;
          font-size: 16px;
          font-weight: 300;
          color: rgba(0, 0, 0, 1);
          font-family: "MicrosoftYaHeiLight";
          width: 87%;
          div {
            font-size: 14px;
            font-family: "MicrosoftYaHeiLight";
            font-weight: 300;
            color: rgba(22, 22, 22, 0.8);
          }
          .company {
            font-size: 20px;
            font-family: "MicrosoftYaHei";
            font-weight: 400;
            color: rgba(22, 22, 22, 1);
          }
        }
        .finish {
          width: 80px;
          height: 80px;
        }
        .finishIcon {
          background: url("../../assets/images/process-ing.png");
          display: absolute;
          margin-top: -30px;
        }
        .finishIcon2 {
          background: url("../../assets/images/process-success.png");
          display: absolute;
          margin-top: -30px;
        }
        .finishIcon3 {
          background: url("../../assets/images/process-fail.png");
          display: absolute;
          margin-top: -30px;
        }
        .declare-status {
          float: right;
          width: 88px;
          height: 35px;
          border: 2px solid #40cd31;
          border-radius: 18px;
          line-height: 35px;
          font-size: 14px;
          font-family: "MicrosoftYaHeiLight";
          font-weight: 300;
          color: #40cd31;
        }
        .declare-status:hover {
          cursor: pointer;
        }
        .status-other {
          background: rgba(252, 13, 27, 1) !important;
          color: rgba(255, 255, 255, 1);
          border: 2px solid rgba(234, 234, 234, 1) !important;
        }
      }
      .declare-form:hover {
        cursor: pointer;
      }
    }

    .tip-box {
      width: 300px;
      height: 275px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(234, 234, 234, 1);
      margin-left: 40px;
      .title {
        width: 300px;
        height: 60px;
        line-height: 60px;
        background: rgba(230, 32, 32, 1);
        font-size: 16px;
        font-family: "MicrosoftYaHeiLight";
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        img{
          margin-right: 10px;
          // margin-top:10px;
        }
      }
      .content {
        width: 230px;
        text-align: left;
        margin: 30px auto;
        span {
          display: block;
          font-size: 14px;
          font-family: "MicrosoftYaHeiLight";
          font-weight: 300;
          color: rgba(127, 127, 127, 1);
        }
      }
    }
    .list {
      display: flex;
      align-content: center;
      //   align-items: center;
      margin: 10px auto;
      width: 95%;
    }
  }
}
</style>

