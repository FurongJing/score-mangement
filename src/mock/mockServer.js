// import Mock from 'mockjs'
// import dataApi from './data.json'

// // 获取成绩列表
// Mock.mock('https://www.easy-mock.com/mock/5d2be05168e7813c16900852/example/testList', dataApi)
// // Mock.mock(RegExp('/testlist' + ".*"), "get", (options) => {
// //     console.log(options);
// //     return Mock.mock(dataApi)
// // })
// Mock.mock('/scorelist', dataApi)
// Mock.mock(RegExp('/scoredetail' + ".*"), "get", (options) =>{
//     // 最佳实践，将请求和参数都打印出来，以便调试
//     console.log("options", options);
//     return Mock.mock(dataApi);
// })