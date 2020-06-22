// 基础信息
export interface IBaseTagInfo {
  frn: 1 | 2 | 3; // 风声信息来源识别码,1表示wind，2表示opendns，3表示wehub
  ope: number; // 账户号
}

// 标签下添加多个好友
interface IFriendInfo {
  friendId: string; // 好友编号
}
export interface ITagAddInfo extends IBaseTagInfo {
  friends: IFriendInfo[];
  tagId: number; // 标签ID
}
export interface ITagAddResponseData {
  [key: string]: any;
}

//  创建标签
export interface ITagCreateInfo extends IBaseTagInfo {
  tagName: string; //标签名称
}
export interface ITagCreateResponseData {
  [key: string]: any;
}

// 删除标签
export interface ITagDeleteInfo extends IBaseTagInfo {
  tagId: number; // 标签id
}
export interface ITagDeleteResponseData {
  [key: string]: any;
}

// 编辑标签
export interface ITagEditInfo extends IBaseTagInfo {
  tagId: number;
  tagName: string;
}
export interface ITagEditResponseData {
  [key: string]: any;
}

// 获取标签下好友列表
export interface ITagFriendsInfo extends IBaseTagInfo {
  tagId: number;
}
export interface IFriendListInfo {
  avatar: string; //好友头像
  base64Nickname: string; // 好友昵称base64
  friendCode: string; //好友编号
  friendId: number; //好友ID
  gender: number; // 好友性别(0:未知;1:男生;2:女生)

  nickname: string; //好友昵称
}
export interface ITagFriendsResponseData {
  base64TagName: string; //base64编码标签名称
  friends: IFriendListInfo[]; // 好友列表
  numL: number; //好友数量
  tagId: number; //标签id
  tagName: string; //标签名称
}

// 标签列表
export interface ITagListInfo extends IBaseTagInfo {}
export interface ITagListResponseData {
  [key: string]: any;
}

//  移除用户好友标签
interface IRemoveInfo {
  tagId: number;
}
export interface ITagRemoveResponseData {
  [key: string]: any;
}
export interface ITagRemoveInfo extends IBaseTagInfo {
  friendId: number;
  tags: IRemoveInfo[];
}

//  设置好友标签
interface ISetupInfo {
  base64TagName: string; // base64编码标签名称
  tagId: number; // 标签id
  tagName: string; // 标签名称
}
export interface ITagSetupInfo extends IBaseTagInfo {
  friendId: number;
  tags: ISetupInfo[];
}
export interface ITagSetupResponseData {
  [key: string]: any;
}
