import httpUrl from "../../library/http-url";
import { RequestMethod } from "../../library/method";
import { RequestCommonMethod } from "../../library/common";
import * as snsType from "./type";

//********************************* 关系链 *************************************************************/

// 通过联系人请求
export const snsAccept = (data: snsType.ISnsAcceptInfo) => {
  return RequestCommonMethod<snsType.ISnsAcceptResponseData>({
    url: httpUrl.UrlSnsAccept,
    method: RequestMethod.POST,
    data: data
  });
};

// 添加联系人
export const snsAdd = (data: snsType.ISnsAddInfo) => {
  return RequestCommonMethod<snsType.ISnsAddResponseData>({
    url: httpUrl.UrlSnsAdd,
    method: RequestMethod.POST,
    data: data
  });
};

//  设置联系人备注
export const snsAutoRemark = (data: snsType.ISnsAutoRemarkInfo) => {
  return RequestCommonMethod<snsType.ISnsAutoRemarkResponseData>({
    url: httpUrl.UrlSnsAutoRemark,
    method: RequestMethod.POST,
    data: data
  });
};

//  设置联系人黑名单
export const snsBlacklist = (data: snsType.ISnsBlacklistInfo) => {
  return RequestCommonMethod<snsType.ISnsBlacklistResponseData>({
    url: httpUrl.UrlSnsBlacklist,
    method: RequestMethod.POST,
    data: data
  });
};

//  删除联系人
export const snsDelete = (data: snsType.ISnsDeleteInfo) => {
  return RequestCommonMethod<snsType.ISnsDeleteResponseData>({
    url: httpUrl.UrlSnsDelete,
    method: RequestMethod.POST,
    data: data
  });
};

//  联系人列表
export const snsList = (data: snsType.ISnsListInfo) => {
  return RequestCommonMethod<snsType.ISnsListResponseData[]>({
    url: httpUrl.UrlSnsList,
    method: RequestMethod.POST,
    data: data
  });
};
