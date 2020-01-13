import React from 'react'
import axios from 'axios'
import { timeout } from 'q'
//修改默认属性
const newaxios = axios.creata({
    //公用地址
    baseURL:'/api',
    //超时
    timeout:10000,

})
//请求拦截 在发送请求之前执行
newaxios.interceptors.requst.use(
    //请求中添加token
    config=>{
        if(token){
            config.header.authorization = `Bearer${token}`
        }
        //请求方式post 
        if(config.method === 'post'){
            const keys = Object.keys(config.data)
            const data = keys
                .reduce((prev,curr)=>{
                    prev += `&${curr}=${config.data[curr]}`
                    return prev
                },'')
                .slice(1)
                config.data = data
                config.headers['content-type'] = 'application/x-www-form-urlencoded'
        }
            return config
    }
)
newaxios.interceptors.respoonse.use(
    response=>{
        if(response.data.staus === 0){
            return response.data.data
        }else{
            return Promise.reject(response.data.msg)
        }
    },
    err=>{
        const errCode = {
            401: '没有权限访问当前接口',
            403: '禁止访问当前接口',
            404: '当前资源未找到',
            500: '服务器发生未知错误，请联系管理员'
        }
        let errMessage = ''
        if(err.responage){
            errMessage = errCode[err.response.status]
        }else{
            if(err.message.index('Network Error') !==-1){
                errMessage = '网络连接失败'
            }else if (err.message.indexOf('timeout') !==-1){
                errMessage = '网络超时'
            }
        }
        return Promise.reject(errMessage || '发生未知错误')
    }
)