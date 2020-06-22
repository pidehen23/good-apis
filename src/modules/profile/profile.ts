import HttpUrl from "../../library/http-url";
import { RequestMethod } from "../../library/method";
import { RequestCommonMethod } from "../../library/common";
import * as profileType from "./type";

//********************************* 资料 *************************************************************/

// 设置是否自动通过联系人请求
export const profileAutoAdd = (data: profileType.IProfileAutoAddInfo) => {
  return RequestCommonMethod<profileType.IProfileAutoAddResponseData>({
    url: HttpUrl.UrlProfileAutoAdd,
    method: RequestMethod.POST,
    data: data
  });
};

// 设置是否自动进入群聊
export const profileAutoJoin = (data: profileType.IProfileAutoJoinInfo) => {
  return RequestCommonMethod<profileType.IProfileAutoJoinResponseData>({
    url: HttpUrl.UrlProfileAutoJoin,
    method: RequestMethod.POST,
    data: data
  });
};

// 修改头像
export const profileAvatar = (data: profileType.IProfileAvatarInfo) => {
  return RequestCommonMethod<profileType.IProfileAvatarResponseData>({
    url: HttpUrl.UrlProfileAvatar,
    method: RequestMethod.POST,
    data: data
  });
};

// 修改性别
export const profileGender = (data: profileType.IProfileGenderInfo) => {
  return RequestCommonMethod<profileType.IProfileGenderResponseData>({
    url: HttpUrl.UrlProfileGender,
    method: RequestMethod.POST,
    data: data
  });
};

//  获取资料
export const profileInfo = (data: profileType.IProfileInfo) => {
  return RequestCommonMethod<profileType.IProfileInfoResponseData>({
    url: HttpUrl.UrlProfileInfo,
    method: RequestMethod.POST,
    data: data
  });
};

//  修改昵称,同一平台(Frn)下面的不同账户昵称不能重复
export const profileNickname = (data: profileType.IProfileNicknameInfo) => {
  return RequestCommonMethod<profileType.IProfileNicknameResponseData>({
    url: HttpUrl.UrlProfileNickname,
    method: RequestMethod.POST,
    data: data
  });
};

// 修改个性签名
export const profileWhatsUp = (data: profileType.IProfileWhatsUpInfo) => {
  return RequestCommonMethod<profileType.IProfileWhatsUpResponseData>({
    url: HttpUrl.UrlProfileWhatsUp,
    method: RequestMethod.POST,
    data: data
  });
};
