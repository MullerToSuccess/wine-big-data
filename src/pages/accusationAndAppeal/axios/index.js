import axios from "@/axios/axios"

/* 诚信申述举报接口 */
let apis = {
  listSincerityExplainByUser: "/sincerity-report/listSincerityExplainByUser",
  listSincerityReportByUser: "/sincerity-report/listSincerityReportByUser",
  saveSincerityExplain: "/sincerity-report/saveSincerityExplain",
  saveSincerityReport: "/sincerity-report/saveSincerityReport"
}

let accusation = {}

// 举报列表
accusation.listSincerityReportByUser = async params => {
  return await axios.post(apis.listSincerityReportByUser, params, {
    auth: true,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
}
// 申述列表
accusation.listSincerityExplainByUser = async params => {
  return await axios.post(apis.listSincerityExplainByUser, params, {
    auth: true,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
}
// 申述
accusation.saveSincerityExplain = async params => {
  return await axios.post(apis.saveSincerityExplain, params, {
    auth: true,
    dataType: "json",
    headers: { "Content-Type": "application/json" }
  })
}
// 举报
accusation.saveSincerityReport = async params => {
  return await axios.post(apis.saveSincerityReport, params, {
    auth: true,
    dataType: "json",
    headers: { "Content-Type": "application/json" }
  })
}

export default accusation
