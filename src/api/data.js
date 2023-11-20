import request from '@/utils/request'

export function insert(data) {
    return request({
        url: '/maven/insert',
        method: 'post',
        data
    })
}

export function rebuild(token) {
    return request({
        url: '/maven/rebuild',
        method: 'delete',
    })
}

//  成功列表
export function getInsertHub() {
    return request({
        url: '/maven/getInsertHub',
        method: 'get',
    })
}
//历史记录
export function getInsertRecord() {
    return request({
        url: '/maven/getInsertRecord',
        method: 'get',
    })
}

