import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import TestList from './views/TestList/TestList.vue'
import ScoreList from './views/ScoreList/ScoreList.vue'
import ScoreDetail from './views/ScoreDetail/ScoreDetail.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/testList',
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/testList',
            component: TestList,
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/scoreList',
            component: ScoreList,
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/scoreDetail',
            component: ScoreDetail,
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            }
        }
    ]
})