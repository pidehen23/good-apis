import apis from "./apis";
import { RequestMethod } from "./method";
import { IBaseResponseData } from "../type";
import { AxiosRequestConfig } from "axios";

// rest
export interface IBaseInfo {
  [key: string]: any;
}

export interface IRequestCommonMethod {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  rest?: IBaseInfo;
  params?: IBaseInfo;
}

/**
 * 返回替换rest的URL
 * @params url 服务端地址
 * @params rest example rest:{id:1}
 * @return string
 */

export function restful(url: string, rest: IBaseInfo) {
  const regex = /\:[^/]*/g;

  return url.replace(regex, p => {
    const key = p.slice(1);
    if (rest[key]) {
      return rest[key];
    }
    return p;
  });
}

export function RequestCommonMethod<T>(req: IRequestCommonMethod) {
  let restUrl = req.url;
  if (req.rest) {
    restUrl = restful(req.url, req.rest);
  }
  return new Promise<IBaseResponseData<T>>((resolve, reject) => {
    apis({
      url: restUrl,
      method: req.method ? req.method : RequestMethod.GET,
      params: req.params,
      data: req.data
    })
      .then(res => {
        resolve((res as unknown) as IBaseResponseData<T>);
      })
      .catch(error => {
        reject(error);
      });
  });
}
