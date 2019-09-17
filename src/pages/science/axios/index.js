import axios from "@/axios/axios"

/* 诚信自主申报接口 */
let apis = {
  listSincerityKnowledge: "/sincerity-knowledge/listSincerityKnowledge", // 分页科普列表
  getSincerityKnowledge: "/sincerity-knowledge/getSincerityKnowledge" // 单个科普数据
}

let science = {}

// 分页科普列表
science.listSincerityKnowledge = async params => {
  return await axios.post(apis.listSincerityKnowledge, params, {
    auth: true,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
}
// 单个科普数据
science.getSincerityKnowledge = async params => {
  return await axios.post(apis.getSincerityKnowledge, params, {
    auth: true,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
}
export default science
