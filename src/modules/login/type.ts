import { IBaseResponseData } from "../../type";

// 登出返回数据
export interface ILogonResponseData {
  [key: string]: any;
}

// 登录参数信息
export interface ILoginInfo {
  account: string; // 登录账号
  password: string; /// 登录密码
  onSuccess?: (res: IBaseResponseData<string>) => void;
  onError?: (error: any) => void;
}
