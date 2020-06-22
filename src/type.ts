// base response info
export interface IBaseResponseData<T = any> {
  data: T;
  msg: string; // 返回信息,业务描述
  opt: string; // 操作编号
  code: number; // 返回状态;接口返回码等于0表示SDK正常10002:{账号不存在},10003:{密码错误};
}
