<template>
  <div id="declare">
    <div class="banner"></div>
    <div class="container" style="height: 560px;padding: 20px">
      <div class="declare-form">
      <img src="@/assets/images/declare-1.png" />
      <div class="declare-title">资质填报</div>
      <div @click="goForm(1)" :class='{"declare-status": true, "status-other": status1 }'>
        {{ status1 ? '去更新' : '去填报' }}
      </div>
      <div :class="{finish: true, finishIcon: status1}"></div>
    </div>
    <div class="declare-form">
      <img src="@/assets/images/declare-2.png" />
      <div class="declare-title">奖励填报</div>
      <div @click="goForm(2)" :class='{"declare-status": true, "status-other": status2 }'>
        {{ status2 ? '去更新' : '去填报' }}
      </div>
      <div :class="{finish: true, finishIcon: status2}"></div>
    </div>
    <div class="declare-form">
      <img src="@/assets/images/declare-3.png" />
      <div class="declare-title">财务数据填报</div>
      <div @click="goForm(3)" :class='{"declare-status": true, "status-other": status3 }'>
        {{ status3 ? '去更新' : '去填报' }}
      </div>
      <div :class="{finish: true, finishIcon: status3}"></div>
    </div>
    <div class="declare-form">
      <img src="@/assets/images/declare-4.png" />
      <div class="declare-title">管理数据填报</div>
      <div @click="goForm(4)" :class='{"declare-status": true, "status-other": status4 }'>
        {{ status4 ? '去更新' : '去填报' }}
      </div>
      <div :class="{finish: true, finishIcon: status4}"></div>
    </div>
    </div>
  </div>
</template>
<script>
import declare from './axios/index'
import { truncate } from 'fs';
import { mapMutations } from "vuex";
export default {
  name: "Declare",
  data() {
    return {
      status1: false,
      status2: false,
      status3: false,
      status4: false,
      declareInfo:{}, // 四个详情
    };
  },
  mounted(){
    this.sincerityAll()
  },
  methods:{
    ...mapMutations({
      setDeclareInfo: 'declare/setDeclareInfo'
    }), 
    sincerityAll(){
      declare.sincerityAll().then(res => {
        //判断状态
        this.setDeclareInfo(res.data)
        this.declareInfo = res.data // 四个详情
        if(res.data.qualificationInfo) this.status1 = true
        if(res.data.prizeInfo) this.status2 = true
        if(res.data.financeInfo) this.status3 = true
        if(res.data.managementInfo) this.status4 = true
      })
    },
    goForm(index){
      switch(index){
        case 1:
          this.$router.push({name: 'QualificationForm'});
          break;
        case 2:
          this.$router.push({name: 'PrizeForm'})
          break;
        case 3:
          this.$router.push({name: 'FinanceForm'})
          break;
        case 4:
          this.$router.push({name: 'ManagementForm'})
            break;
        default:
           break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#declare {
  width: 100%;
  margin: auto;
  // padding: 20px auto;
  .banner {
    width: 100%;
    height: 400px;
    background: url("../../assets/images/declare-bg.png");
  }
  .declare-form {
    margin: auto;
    margin-top: 20px;
    // margin-bottom: 30px;
    display: flex;
    // width: 60%;
    // height: 120px;
    width:1197px;
    height:110px;
    background:rgba(255,255,255,1);
    border:2px solid rgba(234, 234, 234, 1);
    align-content: center;
    align-items: center;
    img {
      width:46px;
      height:45px;
      margin-left: 39px;
    }
    .declare-title {
      text-align: left;
      margin-left: 20px;
      font-size: 16px;
      font-weight:300;
      color:rgba(0,0,0,1);
      font-family:"MicrosoftYaHeiLight";
      width: 80%;
    }
    .finish{
      width: 80px;
      height: 80px;
      
    }
    .finishIcon{
      background: url('../../assets/images/finish.png');
      display: absolute;
      margin-top: -30px;
    }
    .declare-status {
      float: right;
      width: 88px;
      height: 35px;
      border: 2px solid #40CD31;
      border-radius: 18px;
      line-height: 35px;
      font-size: 14px;
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: #40CD31;
    }
    .declare-status:hover{
      cursor: pointer;
    }
    .status-other {
      background: rgba(252, 13, 27, 1) !important;
      color:rgba(255,255,255,1);
      border:2px solid rgba(234, 234, 234, 1) !important;
    }
  }
}
</style>

