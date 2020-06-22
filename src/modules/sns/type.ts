export interface ISnsBaseInfo {
  frn: 1 | 2 | 3; // 风声信息来源识别码,1表示wind，2表示opendns，3表示wehub
  ope: number; // 账户号
}
// 通过联系人请求
export interface ISnsAcceptInfo extends ISnsBaseInfo {
  act: string; // 请求编号
}
export interface ISnsAcceptResponseData {
  [key: string]: any;
}

// 添加联系人
export interface ISnsAddInfo extends ISnsBaseInfo {
  account: string; // 微信号/手机号/二维码地址//账户
  helloWord: string; // 打招呼（必填-例如：我是XXX）
}
export interface ISnsAddResponseData {
  [key: string]: any;
}

// 设置联系人备注
export interface ISnsAutoRemarkInfo extends ISnsBaseInfo {
  friendId: number; // 好友ID
  remark: string; // 好友备注
}
export interface ISnsAutoRemarkResponseData {
  [key: string]: any;
}

// 设置联系人黑名单
export interface ISnsBlacklistInfo extends ISnsBaseInfo {
  friendId: number;
  opn: 0 | 1; // 操作(1:移除;0:设置)
}
export interface ISnsBlacklistResponseData {
  [key: string]: any;
}

// 删除联系人
export interface ISnsDeleteInfo extends ISnsBaseInfo {
  friendId: number;
}
export interface ISnsDeleteResponseData {
  [key: string]: any;
}

// 联系人列表
export interface ISnsListInfo extends ISnsBaseInfo {}
export interface ISnsListResponseData {
  avatar: string; // 好友头像
  base64Nickname: string; //BASE64编码过后的用户昵称
  base64WhatsUp: string; // base64编码个性签名
  gender: 0 | 1 | 2; //好友性别(0:未知;1:男生;2:女生)
  nickname: string; //用户昵称
  profileCode: string; //用户编号
  profileId: number; //用户ID
  region: string; //地区支持的字符：全部，包括 Emoji
  whatsUp: string; //个性签名
}
