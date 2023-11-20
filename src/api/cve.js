import request from '@/utils/request'

export function multiInsert() {
    return request({
        url: '/cve/multiInsert',
        method: 'get',
    })
}

export function rebuild(token) {
    return request({
        url: '/cve/rebuild',
        method: 'delete',
    })
}

//  成功列表
export function getInsertCVE() {
    return request({
        url: '/cve/getInsertCVE',
        method: 'get',
    })
}
//获取某个CVE接口
export function getCVE(CVEID) {
    return request({
        url: '/cve/getCVE',
        method: 'get',
        params: { CVEID }
    })
}

