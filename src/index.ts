import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  Method
} from "axios";

// server详情
export interface IServerMap {
  [key: string]: {
    default?: boolean; // 是否默认baseUrl
    baseURL?: string; // baseUrl
  };
}

export interface IApiConfig extends AxiosRequestConfig {
  server?: string; // 服务器配置
  url: string; // 请求pathname（不带baseUrl）如：'api/info'
  method?: Method; // 请求方法 列如："get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK"
}
// api接口详情
export interface IApiMap {
  [key: string]: IApiConfig;
}

// rest
export interface IRestInfo {
  [key: string]: number | string;
}

export interface IInstanceInfo {
  [key: string]: <T = any>(config: AxiosRequestConfig) => AxiosPromise<T>;
}

class Apis {
  private serverMap: IServerMap;
  private apiMap: IApiMap;
  private instance: IInstanceInfo;
  static reqMiddleware: any[];
  static resMiddleware: any[];
  static useReq: <V = AxiosRequestConfig>(
    onFulfilled?: (value: V) => V | Promise<V>,
    onRejected?: (error: AxiosError) => any
  ) => number;
  static useRes: <V = AxiosResponse>(
    onFulfilled?: (value: V) => V | Promise<V>,
    onRejected?: (error: AxiosError) => any
  ) => number;

  constructor(serverMap: IServerMap, apiMap: IApiMap) {
    this.serverMap = serverMap;
    this.apiMap = apiMap;

    this.instance = {
      gRequest: axios.request
    };

    if (this.validate) {
      this.format();
      this.middleware();
      this.combine();
      return (this.instance as unknown) as Apis;
    } else {
      console.error("apis: 参数不合法，请检查你的配置参数");
    }
  }

  // 校验
  private get validate() {
    if (this.serverMap && this.apiMap) {
      return true;
    }
    console.error("请传入初始化参数");
    return false;
  }

  // 设置baseUrl的key
  private get getBaseUrl() {
    let base = "";

    for (const key of Object.keys(this.serverMap)) {
      // 去数组第一个元素
      if (!base) {
        base = key;
      }
      // 去 default=true 的元素
      if (this.serverMap[key].default) {
        base = key;
      }
    }

    if (!base) {
      console.error("apis: 找不到默认服务器配置");
    }

    return base;
  }

  // 处理apiMap
  private format() {
    for (const key of Object.keys(this.apiMap)) {
      const item = this.apiMap[key];

      if (!item.server) {
        item.server = this.getBaseUrl;
      }

      this.apiMap[key] = Object.assign({}, this.serverMap[item.server], item);
    }
  }

  private middleware() {
    Apis.reqMiddleware.map(middleware => {
      axios.interceptors.request.use(...middleware);
    });

    Apis.resMiddleware.map(middleware => {
      axios.interceptors.response.use(...middleware);
    });
  }

  // rest
  private restful(url: string, rest: IRestInfo) {
    const regex = /\:[^/]*/g;

    return url.replace(regex, p => {
      const key = p.slice(1);
      const value = String(rest[key]);
      if (value) {
        return value;
      }
      return p;
    });
  }

  private comboo(bf: IApiConfig, af: { rest: IRestInfo; url: string }) {
    if (af.rest) {
      af.url = this.restful(bf.url, af.rest);
    }

    return Object.assign({}, bf, af);
  }

  /**
   * @description 命名空间调用
   * @example
   * @return
   */
  private namespace(
    obj: IInstanceInfo,
    keys: string[],
    cb: (config: { rest: IRestInfo; url: string }) => Promise<AxiosResponse<any>>
  ) {
    const key = keys[0];

    if (keys.length === 1) {
      obj[key] = obj[key] || cb;
    } else {
      obj[key] = obj[key] || {};
      this.namespace(obj[key] as any, keys.slice(1), cb);
    }
  }

  private combine() {
    for (const key of Object.keys(this.apiMap)) {
      const keys = key.replace(/^\//, "").split("/");
      this.namespace(this.instance, keys, config => {
        let result = this.apiMap[key];
        if (config) {
          result = this.comboo(this.apiMap[key], config);
        }
        return axios.request(result);
      });
    }
  }
}

Apis.reqMiddleware = [];
Apis.resMiddleware = [];

Apis.useReq = function () {
  Apis.reqMiddleware.push(arguments);
  return arguments.length;
};

Apis.useRes = function () {
  Apis.resMiddleware.push(arguments);
  return arguments.length;
};

export default Apis;
