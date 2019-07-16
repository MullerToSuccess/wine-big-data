<template>
  <div id="supervision">
    <div class="banner"></div>
    <div class="content-all">
      <div class="tab-content-news">
        <div
          style="height: 460px; border:1px solid #ccc;margin-right:10px;border:1px solid rgba(224,224,224,1);"
        >
          <div class="content content-1">——部委监管公式——</div>
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
          <div class="content content-2">——社会监督公示——</div>
          <ul>
            <li @click="goDetail(item1)" v-for="(item1, index1) in dynamic[0].news" :key="index1">
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
            }
          ]
        }
      ],
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
      height: 703px;
      display: flex;
      align-content: center;
      align-items: center;
      width: 70%;
      background: #fff;
      margin: auto;
      flex-wrap: wrap;
      div {
        text-align: center;
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
        padding: 10px;
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
          width: 200px;
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


