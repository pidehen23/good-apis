import Apis, { IApiMap } from "../dist/index";

let serverMap = {
  baseServer: {
    default: true,
    baseURL: "https://base.apis.com"
  },
  authServer: {
    baseURL: "https://auth.apis.com"
  },
  orderServer: {
    baseURL: "https://order.apis.com"
  }
};

const apiMap: IApiMap = {
  getBaseInfo: {
    server: "baseServer",
    method: "get",
    url: "/info"
  },

  "user/postOrder": {
    server: "orderServer",
    method: "post",
    url: "/order/:id"
    // headers: { "content-type": "application/x-www-form-urlencoded" },
  }
};

Apis.onUseReq(
  config => {
    config.headers.Authorization = "Bearer";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

Apis.onUseRes(
  res => {
    if (res.data && res.data.code === 1) {
      return res.data;
    } else {
      return Promise.reject(new Error(res.data.msg ?? "响应异常"));
    }
  },
  err => {
    return Promise.reject(err);
  }
);

const apis = new Apis(serverMap, apiMap);

window.apis = apis;

console.log(apis, "-----");

apis.getBaseInfo({
  params: {
    id: 123456789
  }
});

apis.user.postOrder({
  // headers: { "content-type": "application/x-www-form-urlencoded" },
  rest: {
    id: 1234
  },
  data: {
    name: "你爸爸"
  }
});
