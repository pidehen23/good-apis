import httpUrl from "../../library/http-url";
import { RequestMethod } from "../../library/method";
import { RequestCommonMethod } from "../../library/common";
import * as tagType from "./type";

//********************************* 标签 *************************************************************/

// 标签下添加多个好友
export const tagAdd = (data: tagType.ITagAddInfo) => {
  return RequestCommonMethod<tagType.ITagAddResponseData>({
    url: httpUrl.UrlTagAdd,
    method: RequestMethod.POST,
    data: data
  });
};

//  创建标签
export const tagCreate = (data: tagType.ITagCreateInfo) => {
  return RequestCommonMethod<tagType.ITagCreateResponseData>({
    url: httpUrl.UrlTagCreate,
    method: RequestMethod.POST,
    data: data
  });
};

//  删除标签
export const tagDelete = (data: tagType.ITagDeleteInfo) => {
  return RequestCommonMethod<tagType.ITagDeleteResponseData>({
    url: httpUrl.UrlTagDelete,
    method: RequestMethod.POST,
    data: data
  });
};

//  编辑标签
export const tagEdit = (data: tagType.ITagEditInfo) => {
  return RequestCommonMethod<tagType.ITagEditResponseData>({
    url: httpUrl.UrlTagEdit,
    method: RequestMethod.POST,
    data: data
  });
};

// 获取标签下好友列表
export const tagFriends = (data: tagType.ITagFriendsInfo) => {
  return RequestCommonMethod<tagType.ITagFriendsResponseData>({
    url: httpUrl.UrlTagFriends,
    method: RequestMethod.POST,
    data: data
  });
};

//  标签列表
export const tagList = (data: tagType.ITagListInfo) => {
  return RequestCommonMethod<tagType.ITagListResponseData>({
    url: httpUrl.UrlTagList,
    method: RequestMethod.POST,
    data: data
  });
};

// 移除用户好友标签
export const tagRemove = (data: tagType.ITagRemoveInfo) => {
  return RequestCommonMethod<tagType.ITagRemoveResponseData>({
    url: httpUrl.UrlTagRemove,
    method: RequestMethod.POST,
    data: data
  });
};

// 设置好友标签
export const tagSetup = (data: tagType.ITagSetupInfo) => {
  return RequestCommonMethod<tagType.ITagSetupResponseData>({
    url: httpUrl.UrlTagSetup,
    method: RequestMethod.POST,
    data: data
  });
};
