<template>
  <div class="newsDetail">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/Science')">诚信知识科普</span> >
      <span @click="goRouter('/Science/scienceDetail')">知识详情</span>
    </div>
    <div class="content">
      <div class="content-top">
        <div class="title">{{ detail.title }}</div>
        <div class="date">
          <img src="@/assets/images/from.png" alt />
          {{ detail.source }} {{ detail.createTime}}
        </div>
      </div>
      <div class="content-text">
        {{ detail.content }}
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
import science from './axios/index'
export default {
  name: "ScienceDetail",
  data() {
    return {
      detailId: '', // 科普详情id
      detail:{}, // 科普详情
    };
  },
  mounted(){
    this.detailId = this.$route.params.id
    this.getSincerityKnowledge()
  },
  methods: {
    goRouter(path) {
      this.$router.push(path);
    },
    getSincerityKnowledge(){
      let params = {
        id: this.detailId
      }
      science.getSincerityKnowledge(params).then(res => {
        this.detail = res.data
      })
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
    span:hover{
      cursor: pointer;
    }
  }
  .content {
    width: 1200px;
    height: 495px;
    margin: 10px auto;
    margin-bottom: 20px;
    border: 1px solid rgba(229, 229, 229, 1);
    .content-top {
      height: 90px;
      text-align: center;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
      .title {
        margin: 10px;
        font-size: 20px;
        font-family: "MicrosoftYaHei-Bold";
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 48px;
      }
      .date {
        margin: auto;
        width: 151px;
        height: 12px;
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
    .content-text {
      width: 1161px;
      height: 350px;
      font-size: 14px;
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: rgba(0, 0, 0, 1);
      line-height: 21px;
      opacity: 0.8;
      text-align: left;
      line-height: 28px;
      margin: auto;
      margin-top: 14px;
      text-indent: 25px;
    }
  }
}
</style>
