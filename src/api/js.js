import request from '@/utils/request'

export function insert(data) {
    return request({
        url: '/library/register',
        method: 'post',
        data,
        baseURL: 'http://graywolf.top:6101'
    })
}

export function rebuild(token) {
    return request({
        url: '/maven/rebuild',
        method: 'delete',
    })
}

//  成功列表
export function getHistory() {
    return request({
        url: '/library/getHistory',
        method: 'get',
        baseURL: 'http://graywolf.top:6101/'
    })
}
//历史记录
export function getLibrary() {
    return request({
        url: '/library/getLibrary',
        method: 'get',
        baseURL: 'http://graywolf.top:6101/'
    })
}
//上传检测代码
export function detect(data) {
    return request({
        url: '/detect/upload',
        method: 'post',
        data,
        baseURL: 'http://graywolf.top:6101'
    })
}
export function getDetectRecord() {
    return request({
        url: '/detect/getDetectRecord',
        method: 'get',
        baseURL: 'http://graywolf.top:6101/'
    })
}
export function getDetectResult(insert_time) {
    return request({
        url: '/detect/getDetectResult',
        method: 'get',
        baseURL: 'http://graywolf.top:6101/',
        params: { insert_time }
    })
}

