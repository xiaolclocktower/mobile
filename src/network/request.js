/* 封装一个单独的用于网络请求的自己的文件用于对接各个组件 */

import axios from 'axios'

/* 因为可能请求多个服务器，所以这里不用default暴露请求函数
使用function的话可以，有多个不同函数名对应不同多个服务器地址*/

export function request(config) {
    /* 1、创建axios实例，请求时间5s，所以timeout是5000 ,
    请求的服务器地址如下，实际业务中要更改服务器地址*/
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

    /* 2、使用axios拦截器处理拦截数据 */
    /* 2.1请求拦截器 */
    instance.interceptors.request.use(config =>{
        console.log(config);
        /* 处理的语句，一般拦截请求的要求如下：
            1、config中一些信息不符合服务要求需要更改
            2、每次网络请求时需要显示一个加载图标或动画
            3、某些网络请求比如登录时，必须携带一些特殊信息
        */
        //拦截处理完后还要再返还拦截信息，不然请求失败
        return config},
        err => {
            console.log(err);
        })
    /* 2.2 响应拦截 */
    instance.interceptors.response.use(res => {
        console.log(res);
        /*响应对象中有用的一般为data，所以拦截后返回res中的data就行。
        不返还就输出undefined */
        return res.data
    },err => {
        console.log(err);
    })

    /*3、返回promise对象给调用请求的对象  */
    return instance(config)
}

