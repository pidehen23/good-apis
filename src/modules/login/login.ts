import apis from "../../library/apis";
import HttpUrl from "../../library/http-url";
import { IBaseResponseData } from "../../type";
import { RequestMethod } from "../../library/method";
import { RequestCommonMethod } from "../../library/common";
import { ILoginInfo, ILogonResponseData } from "./type";

// 登录IM
export const login = (params: ILoginInfo) => {
  apis({
    url: HttpUrl.UrlLogin,
    method: RequestMethod.POST,
    data: { account: params.account, password: params.password },
  })
    .then((res) => {
      const resData = (res as unknown) as IBaseResponseData<string>;
      return params.onSuccess && params.onSuccess(resData);
    })
    .catch((error) => {
      return params.onError && params.onError(error);
    });
};

// 登出IM
export const logon = () => {
  return RequestCommonMethod<ILogonResponseData>({
    url: HttpUrl.UrlLogon,
    method: RequestMethod.GET,
  });
};
