import HttpUr from "../../library/http-url";
import { RequestMethod } from "../../library/method";
import { RequestCommonMethod } from "../../library/common";
import * as groupType from "./type";

//  群内主动添加好友
export const groupAdd = (data: groupType.IGroupAddInfo) => {
  return RequestCommonMethod<groupType.IGroupAddResponseData>({
    url: HttpUr.UrlGroupAdd,
    method: RequestMethod.POST,
    data: data
  });
};

// 群管理
export const groupAdmin = (data: groupType.IGroupAdminInfo) => {
  return RequestCommonMethod<groupType.IGroupAdminResponseData>({
    url: HttpUr.UrlGroupAdmin,
    method: RequestMethod.POST,
    data: data
  });
};

// 通过好友群邀请
export const groupAdoptInvite = (data: groupType.IGroupAdoptInviteInfo) => {
  return RequestCommonMethod<groupType.IGroupAdoptInviteResponseData>({
    url: HttpUr.UrlGroupAdoptInvite,
    method: RequestMethod.POST,
    data: data
  });
};

// 撤销邀请好友入群
export const groupCancelInvite = (data: groupType.IGroupCancelInviteInfo) => {
  return RequestCommonMethod<groupType.IGroupCancelInviteResponseData>({
    url: HttpUr.UrlGroupCancelInvite,
    method: RequestMethod.POST,
    data: data
  });
};

// 获取保存至通讯录的群
export const groupContacts = (data: groupType.IGroupContactsInfo) => {
  return RequestCommonMethod<groupType.IGroupContactsResponseData>({
    url: HttpUr.UrlGroupContacts,
    method: RequestMethod.POST,
    data: data
  });
};

// 创建群
export const groupCreate = (data: groupType.IGroupCreateInfo) => {
  return RequestCommonMethod<groupType.IGroupCreateResponseData>({
    url: HttpUr.UrlGroupCreate,
    method: RequestMethod.POST,
    data: data
  });
};

// 群内踢人
export const groupDelete = (data: groupType.IGroupDeleteInfo) => {
  return RequestCommonMethod<groupType.IGroupDeleteResponseData>({
    url: HttpUr.UrlGroupDelete,
    method: RequestMethod.POST,
    data: data
  });
};

// 主动退群[异步调用]
export const groupLeave = (data: groupType.IGroupLeaveInfo) => {
  return RequestCommonMethod<groupType.IGroupLeaveResponseData>({
    url: HttpUr.UrlGroupLeave,
    method: RequestMethod.POST,
    data: data
  });
};

// 获取群列表
export const groupList = (data: groupType.IGroupListInfo) => {
  return RequestCommonMethod<groupType.IGroupListResponseData[]>({
    url: HttpUr.UrlGroupList,
    method: RequestMethod.POST,
    data: data
  });
};

// 修改群名称
export const groupName = (data: groupType.IGroupNameInfo) => {
  return RequestCommonMethod<groupType.IGroupNameResponseData>({
    url: HttpUr.UrlGroupName,
    method: RequestMethod.POST,
    data: data
  });
};

// 设置群内昵称[异步调用]
export const groupNickname = (data: groupType.IGroupNicknameInfo) => {
  return RequestCommonMethod<groupType.IGroupNicknameResponseData>({
    url: HttpUr.UrlGroupNickname,
    method: RequestMethod.POST,
    data: data
  });
};

//  群发布公告
export const groupNotice = (data: groupType.IGroupNoticeInfo) => {
  return RequestCommonMethod<groupType.IGroupNoticeResponseData>({
    url: HttpUr.UrlGroupNotice,
    method: RequestMethod.POST,
    data: data
  });
};

// 获取群公告
export const groupNoticeRead = (data: groupType.IGroupNoticeReadInfo) => {
  return RequestCommonMethod<groupType.IGroupNoticeReadResponseData>({
    url: HttpUr.UrlGroupNoticeRead,
    method: RequestMethod.POST,
    data: data
  });
};

//  查询群聊验证状态
export const groupOpenVerify = (data: groupType.IGroupOpenVerifyInfo) => {
  return RequestCommonMethod<groupType.IGroupOpenVerifyResponseData>({
    url: HttpUr.UrlGroupOpenVerify,
    method: RequestMethod.POST,
    data: data
  });
};

// 获取群二维码[异步调用]
export const groupQrcode = (data: groupType.IGroupQrcodeInfo) => {
  return RequestCommonMethod<groupType.IGroupQrcodeResponseData>({
    url: HttpUr.UrlGroupQrcode,
    method: RequestMethod.POST,
    data: data
  });
};

// 保存群至通讯录
export const groupSave = (data: groupType.IGroupSaveInfo) => {
  return RequestCommonMethod<groupType.IGroupSaveResponseData>({
    url: HttpUr.UrlGroupSave,
    method: RequestMethod.POST,
    data: data
  });
};

// 邀请好友入群
export const groupScan = (data: groupType.IGroupScanInfo) => {
  return RequestCommonMethod<groupType.IGroupScanResponseData>({
    url: HttpUr.UrlGroupScan,
    method: RequestMethod.POST,
    data: data
  });
};

// 转移群主
export const groupTransfer = (data: groupType.IGroupTransferInfo) => {
  return RequestCommonMethod<groupType.IGroupTransferResponseData>({
    url: HttpUr.UrlGroupTransfer,
    method: RequestMethod.POST,
    data: data
  });
};

// 获取群成员信息列表
export const groupUsers = (data: groupType.IGroupUsersInfo) => {
  return RequestCommonMethod<groupType.IGroupUsersResponseData[]>({
    url: HttpUr.UrlGroupUsers,
    method: RequestMethod.POST,
    data: data
  });
};

// 开启群聊验证
export const groupVerify = (data: groupType.IGroupVerifyInfo) => {
  return RequestCommonMethod<groupType.IGroupVerifyResponseData>({
    url: HttpUr.UrlGroupVerify,
    method: RequestMethod.POST,
    data: data
  });
};
