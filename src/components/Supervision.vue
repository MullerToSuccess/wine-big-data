<template>
  <div id="supervision">
    <div class="left-content">
      <div class="title">
        <span class="title-name">部委监管公式</span>
        <a class="goContent">=></a>
      </div>
      <ul>
        <li @click="goContent()" v-for="(item1, index1) in news" :key="index1">
          <span class="content-title">{{item1.title}}</span>
          <span class="content-date">{{ item1.date}}</span>
        </li>
      </ul>
    </div>
    <div class="right-content">
      <div class="title">
        <span class="title-name">社会监督公示</span>
        <a class="goContent">=></a>
      </div>
      <ul>
        <li @click="goContent()" v-for="(item1, index1) in news" :key="index1">
          <span class="content-title">{{item1.title}}</span>
          <span class="content-date">{{ item1.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      activeName: "second",
      news: [
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
          date: "2018-5-12"
        },
        {
          title: "市场监管总局关于30批次食品不合格情况的通告",
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
    goContent() {}
  }
};
</script>
<style lang="scss" scoped>
#supervision {
  height: 500px;
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
}
</style>


