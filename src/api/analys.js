import request from '@/utils/request'

export function detect(data) {
    return request({
        url: '/detect/detect',
        method: 'post',
        data
    })
}


export function getDetectRecord() {
    return request({
        url: '/detect/getDetectRecord',
        method: 'get',

    })
}
export function getHubDetectResult(uuid) {
    return request({
        url: '/detect/getHubDetectResult',
        method: 'get',
        params: { uuid }
    })
}
export function getFileDetectResult(uuid, groupID, artifactID, tag) {
    return request({
        url: '/detect/getFileDetectResult',
        method: 'get',
        params: { uuid, groupID, artifactID, tag }
    })
}

export function getFunctionDetectResult(uuid, groupID, artifactID, tag, gitLocation, hubLocation) {
    return request({
        url: '/detect/getFunctionDetectResult',
        method: 'get',
        params: { uuid, groupID, artifactID, tag, gitLocation, hubLocation }
    })
}


export function getFileCVEDetectResult(uuid) {
    return request({
        url: '/detect/getFileCVEDetectResult',
        method: 'get',
        params: { uuid }
    })
}


export function getFunctionCVEDetectResult(uuid, location) {
    return request({
        url: '/detect/getFunctionCVEDetectResult',
        method: 'get',
        params: { uuid, location }
    })
}

