/**
 * 包含n个接口请求函数的模块
 * 函数的返回值:promise对象
 */

import ajax from './ajax'

// 获取所有考试列表
export const reqTestList = () => ajax(`/testlist`)

// 根据考试的id获取班级学生的成绩列表
// export const reqScoreList = (testId) => ajax(`/scorelist`, testId)
export const reqScoreList = () => ajax(`/scorelist`)

// 根据学生的id和考试的id获取该学生的详细成绩
// export const reqScoreDetail = (stuId, testId) => ajax(`/scoreDetail`, {stuId, testId})
export const reqScoreDetail = (stuId) => ajax(`/scoreDetail`, {stuId: stuId})