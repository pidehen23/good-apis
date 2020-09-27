/*
 * @Description: 类型定义
 * @Author: Chenjiajing
 * @Date: 2020-06-22 15:07:19
 * @LastEditors: Chenjiajing
 * @LastEditTime: 2020-09-27 10:33:27
 */

export interface IBaseMap {
  [key: string]: any
  prod: string
  stage: string
  test: string
  dev: string
  local: string
}

export interface IConfig {
  default?: boolean
  baseURL?: string
  baseMap?: IBaseMap
}

export interface IServerMap {
  [key: string]: IConfig
}

export interface IApiMap {
  [key: string]: {
    server?: string
    url: string
    method?: "get" | "post" | "put" | "delete"
  }
}