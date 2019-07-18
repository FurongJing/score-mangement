import Vue from 'vue'
import Vuex from 'vuex' //引入 vuex
import {
    reqTestList,
    reqScoreList,
    reqScoreDetail
} from './axios'

Vue.use(Vuex) //使用 vuex

export default new Vuex.Store({
    state: {
        // 初始化状态
        token: "", // 对token状态进行监管
        testList: [], // 测验列表
        subject: [], // 考试的课程
        scoreList: [], // 成绩列表
        scoreDetail: {}, // 详细成绩
        total: 0 // 个人总分
    },
    mutations: {
        // 处理状态

        // 更新考试列表
        GETTESTLIST(state, {testList}) {
            state.testList = testList
        },

        // 更新成绩列表
        GETSCORELIST(state, {scoreList}) {
            state.scoreList = scoreList
            // state.scoreDetail = scoreList.scoreDetail
       },

        // 更新详细成绩   
       REQSCOREDETAIL(state, scoreDetail) {
           state.scoreDetail = scoreDetail.scoreDetail
           state.total = scoreDetail.total
       }
    },
    actions: {
        // 提交改变后的状态

        // 获取考试列表
        async getTestList({commit}) {
            const result = await reqTestList()
            // 判断返回的code
            commit('GETTESTLIST', {testList: result.testList})
        },

        // 获取成绩列表
        async getScoreList({commit}, testId) {
            const result = await reqScoreList(testId)
            commit('GETSCORELIST', {scoreList: result.list})
        },

        // 获取学生详细成绩
        async getScoreDetail({commit}, {testId, stuId}) {
            const result = await reqScoreDetail({testId, stuId})
            // const result = state.scoreList.scoreDetail
            commit('REQSCOREDETAIL', result.list)
        }
    },
    getters: {

    }
})