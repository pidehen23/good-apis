# good-apis

> 简单好用的 数据 Mock 插件

[![npm version](https://img.shields.io/npm/v/good-apis.svg)](https://www.npmjs.com/package/good-apis)

基于 [axios](https://github.com/axios/axios) 封装的接口管理方案。

## Features

- 接口统一管理
- 可配置多个接口服务
- 支持 restful 接口
- 支持命名空间

## Installing

```
$ npm install good-apis
```

## Syntax

```ts
new Apis(serverMap, apiMap);
```

## Parameters

#### serverMap

- serverMap 是服务配置的 map 对象
- 服务的参数配置同 axios 中的 [config](https://github.com/axios/axios#request-config) 部分
- default 为自定义属性，当 default 为 true 时，api 会使用它做为默认服务配置

```json
// `default=true` 默认启用，如果default都没有的话，会启用第一个
{
  "baseServer": {
    "default": true,
    "baseUrl": "https://base.apis.com"
  }
  "authServer": {
    "baseURL": "https://auth.apis.com"
  },
  "orderServer": {
    "baseURL": "https://order.apis.com"
  }
}
```

#### apiMap

- apiMap 是接口配置的 map 对象
- 接口的参数配置同 axios 中的 [config](https://github.com/axios/axios#request-config) 部分，会覆盖服务配置中的参数
- server 为自定义属性，表示使用哪个服务配置，当 server 为 null 或 undefined 时，表示使用默认服务配置

```json
{
  "getBaseInfo": {
    "method": "get",
    "url": "/info"
  }
}
```

## Custom

#### rest：restful 参数

当接口中需要传递 restful 参数时，按如下配置

配置时用`:`标记：

```json
{
  "getBaseInfoId": {
    "server": "baseServer", // 可选
    "method": "get",
    "url": "/info/:id"
  }
}
```

调用时参数中添加 `rest` 参数：

```javascript
apis.getBaseInfoId({
  rest: {
    id: 1
  }
});
```

编译成 => `${host}/path/1`

## Namespace

> ^0.0.4 起支持

apiMap 的 `key` 中出现的 `/` 会解析为对应的命名空间路径，不需要命名空间时，不加 `/` 即可

```
e.g: auth/user/getInfo => auth.user.getInfo()
```

```ts
{
  'user/getInfo':{
    method: "get"
    server: "baseServer"
    url: "/user/info",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  }
}

=> apis.user.getInfo({})
```

## Interceptors

Apis 通过`onUseReq`,`onUseRes`两个接口对请求做拦截，可以多次调用，添加多个 middleware

#### Apis.onUseReq(middleware) 请求拦截器

同 [axios.interceptors.request.use](https://github.com/axios/axios#interceptors)

```javascript
Apis.onUseReq(function (config) {
  config.headers.Authorization = "Bearer";
  return config;
});
```

#### Apis.onUseRes(middleware) 响应拦截器

同 [axios.interceptors.response.use](https://github.com/axios/axios#interceptors)

```ts
Apis.onUseRes(
  res => {
    return res.data;
  },
  err => {
    return Promise.reject(err);
  }
);
```

## Usage

函数调用参数同 [config](https://github.com/axios/axios#interceptors)，并且会合并`apiMap`中参数

```ts
{
  'user/getInfo':{
    method: "get"
    server: "baseServer"
    url: "/user/info"
  }
}
```

合并。

```ts
const apis = new Apis(serverMap, apiMap);

apis.getTest({
  headers: { "content-type": "application/x-www-form-urlencoded" },
  params: {
    color: "green"
  },
  data: {
    age: 30
  }
});
```

## 发布

#### 提交版本

1. 修订版本号：patch 不定时会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）列：`1.0.0 -> 1.0.1`。

```shell
npm run patch
```

2. 次版本号：minor 一个 feature 或多个 feature 同时发布,列：`1.0.0 -> 1.1.0`。

```shell
npm run minor
```

3. 主版本号：major 含有破坏性更新和新特性，不在发布周期内，列：`1.0.0 -> 2.0.0`。

```shell
npm run major
```

#### 发布到 npm

```shell
npm run publish
```
