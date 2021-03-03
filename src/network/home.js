import {request} from "./request"
/* 管理所有主页的请求 */
export function getHomeMultidata( ) {
    return request({
        /* 主页请求的数据完整url就是 baseURL+url */
        url:'/home/multidata'
    })
}