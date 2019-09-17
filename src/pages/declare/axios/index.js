import axios from "@/axios/axios"

/* 诚信自主申报接口 */
let apis = {
  // 保存
  saveQualificationInfo: "/sincerity/saveQualificationInfo", //保存资质
  savePrizeInfo: "/sincerity/savePrizeInfo", // 获奖信息
  saveManagementInfo: "/sincerity/saveManagementInfo", // 管理信息
  saveFinanceInfo: "/sincerity/saveFinanceInfo", // 财务信息
  sincerityAll: "/sincerity/sincerityAll", // 获取所有状态
  // 更新
  updateFinanceInfo: "/sincerity/updateFinanceInfo",
  updateManagementInfo: "/sincerity/updateManagementInfo",
  updatePrizeInfo: "/sincerity/updatePrizeInfo",
  updateQualificationInfo: "/sincerity/updateQualificationInfo"
}

let declare = {}

//保存资质
declare.saveQualificationInfo = async params => {
  return await axios.post(apis.saveQualificationInfo, params, {
    dataType: "json",
    auth: true,
    headers: { "Content-Type": "application/json" }
  })
}
// 获奖信息
declare.savePrizeInfo = async params => {
  return await axios.post(apis.savePrizeInfo, params, {
    dataType: "json",
    auth: true,
    headers: { "Content-Type": "application/json" }
  })
}
// 管理信息
declare.saveManagementInfo = async params => {
  return await axios.post(apis.saveManagementInfo, params, {
    dataType: "json",
    auth: true,
    headers: { "Content-Type": "application/json" }
  })
}
// 财务信息
declare.saveFinanceInfo = async params => {
  return await axios.post(apis.saveFinanceInfo, params, {
    dataType: "json",
    auth: true,
    headers: { "Content-Type": "application/json" }
  })
}
// 获取状态
declare.sincerityAll = async params => {
  return await axios.post(apis.sincerityAll, params, {
    auth: true,
    dataType: "json",
    headers: { "Content-Type": "application/json" }
  })
}
// 更新资质信息管理
declare.updateQualificationInfo = async params => {
  return await axios.post(apis.updateQualificationInfo, params, {
    auth: true,
    dataType: "json",
    headers: { "Content-Type": "application/json" }
  })
}
// 更新管理信息管理
declare.updateManagementInfo = async params => {
  return await axios.post(apis.updateManagementInfo, params, {
    auth: true,
    dataType: "json",
    headers: { "Content-Type": "application/json" }
  })
}
// 更新获奖信息管理
declare.updatePrizeInfo = async params => {
  return await axios.post(apis.updatePrizeInfo, params, {
    auth: true,
    dataType: "json",
    headers: { "Content-Type": "application/json" }
  })
}
// 更新财务信息管理
declare.updateFinanceInfo = async params => {
  return await axios.post(apis.updateFinanceInfo, params, {
    auth: true,
    dataType: "json",
    headers: { "Content-Type": "application/json" }
  })
}

export default declare
