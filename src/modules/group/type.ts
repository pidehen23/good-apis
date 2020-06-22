export interface IGroupBaseInfo {
  frn: 1 | 2 | 3; // 风声信息来源识别码,1表示wind，2表示opendns，3表示wehub
  ope: number; // 账户号
}
//  群内主动添加好友
export interface IGroupAddInfo extends IGroupBaseInfo {
  friendId: number; // 好友ID
  groupId: number; // 群ID
  helloWord: string; // 打招呼（必填-例如：我是XXX）
}
// 返回 data 数据
export interface IGroupAddResponseData {
  [key: string]: any;
}

// 群管理
export interface IGroupAdminInfo extends IGroupBaseInfo {
  adminIds: number[]; // 被设置为管理员或被移除管理员的编号
  groupId: number; // 群ID
  opn: 0 | 1; // 操作(1:新增;0:移除)
}

// 返回 data 数据
export interface IGroupAdminResponseData {
  [key: string]: any;
}

// 通过好友群邀请
export interface IGroupAdoptInviteInfo extends IGroupBaseInfo {
  act: string; // 操作编号
}
// 返回 data 数据
export interface IGroupAdoptInviteResponseData {
  [key: string]: any;
}

// 撤销邀请好友入群
export interface IGroupCancelInviteInfo extends IGroupBaseInfo {
  friendId: number[]; // 好友ID最少一个
  groupId: number;
}
// 返回 data 数据
export interface IGroupCancelInviteResponseData {
  [key: string]: any;
}

// 获取通讯录的群
export interface IGroupContactsInfo extends IGroupBaseInfo { }
// 返回 data 数据
export interface IGroupContactsResponseData {
  [key: string]: any;
}

// 创建群
export interface IGroupCreateInfo extends IGroupBaseInfo {
  friends: number[]; // 创建群被拉成员id
  name: string; // 群名称
}
// 返回 data 数据
export interface IGroupCreateResponseData {
  [key: string]: any;
}

// 群内踢人
export interface IGroupDeleteInfo extends IGroupBaseInfo {
  friendId: number;
  groupId: number;
}
// 返回 data 数据
export interface IGroupDeleteResponseData {
  [key: string]: any;
}

// 主动退群
export interface IGroupLeaveInfo extends IGroupBaseInfo {
  groupId: number;
}
// 返回 data 数据
export interface IGroupLeaveResponseData {
  [key: string]: any;
}

// 获取群列表
export interface IGroupListInfo extends IGroupBaseInfo {
  isOpenMessage: "10" | "11"; // 是否已开通(10:是;11:否)
}
// 返回 data 数据
export interface IGroupListResponseData {
  adminCode: string; // 群主编号
  adminId: number; // 群主微信ID
  avatar: string; // 群头像
  base64Name: string; // Base64编码后的群名称
  createTime: string; // 创建时间
  groupCode: string; // 群成员用户编号
  groupId: number; // 群id
  isInContacts: 0 | 1; // 是否保存在通讯录(1:是;0:否）
  isInStatus: 0 | 1; // 机器人是否在群内(0:在群内;1:不在群内）
  isOpenMessage: "10" | "11"; // 是否已开通(10:是;11:否)
  name: string; // 群名称
  qrcode: string; // 群二维码
  userNum: number; //群人数
}

// 修改群名称
export interface IGroupNameInfo extends IGroupBaseInfo {
  groupId: number;
  name: string;
}
// 返回 data 数据
export interface IGroupNameResponseData {
  [key: string]: any;
}

// 设置群内昵称
export interface IGroupNicknameInfo extends IGroupBaseInfo {
  groupId: number;
  name: string;
}
// 返回 data 数据
export interface IGroupNicknameResponseData {
  [key: string]: any;
}

// 群发布公告
export interface IGroupNoticeInfo extends IGroupBaseInfo {
  content: string; // 公告内容
  groupId: number;
}
// 返回 data 数据
export interface IGroupNoticeResponseData {
  [key: string]: any;
}

// 获取群公告
export interface IGroupNoticeReadInfo extends IGroupBaseInfo {
  groupId: number;
}
// 返回 data 数据
export interface IGroupNoticeReadResponseData {
  [key: string]: any;
}

// 查询群聊验证状态
export interface IGroupOpenVerifyInfo extends IGroupBaseInfo {
  groupId: number;
}
// 返回 data 数据
export interface IGroupOpenVerifyResponseData {
  [key: string]: any;
}

// 获取群二维码
export interface IGroupQrcodeInfo extends IGroupBaseInfo {
  groupId: number;
}
// 返回 data 数据
export interface IGroupQrcodeResponseData {
  [key: string]: any;
}

// 保存群至通讯录
export interface IGroupSaveInfo extends IGroupBaseInfo {
  groupId: number;
  isInContacts: 0 | 1; // 是否保存在通讯录(1:是;0:否）
}
// 返回 data 数据
export interface IGroupSaveResponseData {
  [key: string]: any;
}

// 邀请好友入群
export interface IGroupScanInfo extends IGroupBaseInfo {
  friendId: number[];
  groupId: number;
}
// 返回 data 数据
export interface IGroupScanResponseData {
  [key: string]: any;
}

// 转移群主
export interface IGroupTransferInfo extends IGroupBaseInfo {
  friendId: number;
  groupId: number;
}
// 返回 data 数据
export interface IGroupTransferResponseData {
  [key: string]: any;
}

// 获取群成员信息列表
export interface IGroupUsersInfo extends IGroupBaseInfo {
  groupId: number;
}
// 返回群成员列表 data 数据
export interface IGroupUsersResponseData {
  avatar: string;
  base64Nickname: string;
  base64RemarkName: string
  base64WhatsUp: string;
  frn: 1 | 2 | 3;
  gender: 0 | 1 | 2;
  nickname: string;
  ope: number;
  profileCode: string;
  profileId: number
  region: string;
  remarkName: string
  whatsUp: string
}

// 开启群聊验证
export interface IGroupVerifyInfo extends IGroupBaseInfo {
  groupId: number;
  opn: 0 | 1; // 操作(1:新增;0:移除)
}
// 返回 data 数据
export interface IGroupVerifyResponseData {
  [key: string]: any;
}
