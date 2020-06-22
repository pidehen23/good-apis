export interface IProfileBaseInfo {
  frn: 1 | 2 | 3; // 风声信息来源识别码,1表示wind，2表示opendns，3表示wehub
  ope: number; // 账户号
}
// 设置是否自动通过联系人请求
export interface IProfileAutoAddInfo extends IProfileBaseInfo {
  allow: 0 | 1; // 是否自动通过(1:自动;0:手动)
}
// 返回 data 数据
export interface IProfileAutoAddResponseData {
  [key: string]: any;
}

// 设置是否自动进入群聊
export interface IProfileAutoJoinInfo extends IProfileBaseInfo {
  allow: 0 | 1;
}
// 返回 data 数据
export interface IProfileAutoJoinResponseData {
  [key: string]: any;
}

// 修改头像
export interface IProfileAvatarInfo extends IProfileBaseInfo {
  avatar: string; // 头像URL
}
// 返回 data 数据
export interface IProfileAvatarResponseData {
  [key: string]: any;
}

// 修改性别
export interface IProfileGenderInfo extends IProfileBaseInfo {
  gender: 0 | 1 | 2; // 性别(0:未知;1:男生;2:女生)
}
// 返回 data 数据
export interface IProfileGenderResponseData {
  [key: string]: any;
}

// 获取资料
export interface IProfileInfo extends IProfileBaseInfo {}
// 返回 data 数据
export interface IProfileInfoResponseData {
  autoAdd: number; // 是否设置自动通过好友请求(0:否;1:是）
  autoJoin: number; // 是否设置自动进入群聊(0:否;1:是）
  avatar: string; // 好友头像
  base64Nickname: string; //BASE64编码过后的用户昵称
  base64WhatsUp: string; //base64编码个性签名
  extras: string; //用户自定义json对象
  gender: number; // 好友性别(0:未知;1:男生;2:女生)
  isLimit: number; //是否被封号 0 未封号 1 已封号
  isReal: number; //是否实名认证(0:否;1:是）
  nickname: string; //用户昵称
  phone: string; // 扫码号绑定的手机号
  profileCode: string; //用户编号
  profileId: number; // 用户ID
  qrcode: string; // 用户二维码
  region: string; // 地区支持的字符：全部，包括 Emoji
  whatsUp: string; // 个性签名
}

// 修改昵称
export interface IProfileNicknameInfo extends IProfileBaseInfo {
  nickname: string; // 用户昵称
}
// 返回 data 数据
export interface IProfileNicknameResponseData {
  [key: string]: any;
}

// 修改个性签名
export interface IProfileWhatsUpInfo {
  whatsUp: string; // 个性签名
}
// 返回 data 数据
export interface IProfileWhatsUpResponseData {
  [key: string]: any;
}
