import Mock from 'mockjs'
import dataApi from './data.json'

// 获取成绩列表
Mock.mock('/testlist', dataApi)
Mock.mock('/scorelist', dataApi)
Mock.mock(RegExp('/scoreDetail' + ".*"), "get", (options) =>{
    // 最佳实践，将请求和参数都打印出来，以便调试
    console.debug(options);
    return Mock.mock(dataApi);
})