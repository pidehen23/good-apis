import Apis, { IApiMap } from '../dist/index'

let serverMap = {
  baseServer: {
    default: true,
    baseURL: 'https://base.apis.com'
  },
  authServer: {
    baseURL: 'https://auth.apis.com'
  },
  orderServer: {
    baseURL: 'https://order.apis.com'
  }
}

const apiMap: IApiMap = {
  getBaseInfo: {
    server: 'baseServer',
    method: 'get',
    url: '/info'
  },

  'user/postOrder': {
    server: 'orderServer',
    method: 'post',
    url: '/order/:id'
  }
}

Apis.useReq(
  config => {
    config.headers.Authorization = 'Bearer'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

Apis.useRes(
  res => {
    if (res.data && res.data.code === 1) {
      return res.data
    } else {
      return Promise.reject(new Error(res.data.msg ?? '响应异常'))
    }
  },
  err => {
    return Promise.reject(err)
  }
)

let apis = new Apis(serverMap, apiMap)

window.apis = apis

apis.getBaseInfo()

apis.user.postOrder({
  rest: {
    id: 1234
  }
})
