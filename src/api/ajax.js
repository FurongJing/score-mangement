import axios from 'axios'

export default function ajax(url='', data={}, type='GET') {
    return new Promise(function(resolve, reject) {
        let promise
        // 发送get请求
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            console.log("请求的url:", url)
            promise = axios.get(url)
        } else { // 发送post请求
            promise = axios.post(url, data)
        }

        // 请求成功回调函数
        // Respones 返回数据字段要求驼峰  且首字母小写
        promise.then(response => {
            // 判断code的值
            let code = response.data.code 
            if (code === 0) {
                console.log("获取数据失败")
            }else if(code === 1){
                console.log("获取数据成功（包括空数据。只要是正确的拉取数据，都返回此值）")
                resolve(response.data.data)
            }else if(code === 2) {
                console.log("当前用户token过期 ")
            }else if(code === 3){
                console.log("失效类数据")
            }else {
                console.log("未知错误")
            }
        }) 
        .catch(error => {  // 返回失败回调函数
            reject(error)
        })
    })
    
    
}