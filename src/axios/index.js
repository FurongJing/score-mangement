/**
 * 包含n个接口请求函数的模块
 * 函数的返回值:promise对象
 */

import ajax from './api'


// 获取所有考试列表
export const reqTestList = () => ajax(`https://www.easy-mock.com/mock/5d2be05168e7813c16900852/example/test-list`)

// 根据考试的id获取班级学生的成绩列表
export const reqScoreList = (testId) => ajax(`https://www.easy-mock.com/mock/5d2be05168e7813c16900852/example/score-list`, {testId})

// 根据学生的id和考试的id获取该学生的详细成绩
export const reqScoreDetail = ({testId, stuId}) => ajax(`https://www.easy-mock.com/mock/5d2be05168e7813c16900852/example/score-detail`, {testId, stuId})