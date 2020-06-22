export interface IChatBaseInfo {
  frn: 1 | 2 | 3; // 风声信息来源识别码,1表示wind，2表示opendns，3表示wehub
  ope: number; // 账户号
}

// 下载消息文件类型
export interface IChatsDownLoadInfo extends IChatBaseInfo {
  // 下载类型  0.其他类型 1.下载视频封面/图片文件/语音（视频封面图：只下载视频的第一帧图片）2.下载视频 3.下载视频和视频封面
  downType: 0 | 1 | 2 | 3;
  fileCode: string;
}

// msg具体消息
export interface IMessageInfo {
  uuid: string;
  content?: string; // 文字内容
  desc?: string; // 链接描述
  ext?: string; // 语音消息格式
  md5?: string; // 文件的md5值
  // 语音时长/视频时长；当消息类型为以上两种类型时，语音时长/视频时长；
  // 当消息类型为以上两种类型时，当时长不正确时可能会有很大的禁封风险
  mediaTime?: number;
  msgTime?: number; // 发送时间
  // 消息类型(1:文字;2:图片;3:语音;4:视频;5:链接;6:好友名片;7:文件;8:小程序;9:音乐)
  msgType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  num?: number; // 消息编号(整型,用于区分同一组的消息)
  size?: number; // 语音文件大小,以Byte为单位
  title?: string; // 链接标题
  url?: string; // 链接URL，当消息为视频时，此处传视频的链接地址
}

// 群消息发送
export interface IChatsGroupInfo extends IChatBaseInfo {
  groupId: number; // 群id
  isAt?: boolean; // 是否艾特(0:艾特群内所有人;1:艾特或者不艾特用户)
  msg: IMessageInfo[];
  profileId: number; // 用户ID
  profileIds?: number[]; // @的人员
}

// 私聊发消息
export interface IChatsPrivateInfo extends IChatBaseInfo {
  friendId: number; // 好友ID
  msg: IMessageInfo[];
  profileId: number; // 用户ID
}

// 返回群消息发送 data 数据
export interface IChatsGroupResponseData {
  uuid: string;
  msgId: number;
  msgCode: string;
}

// 返回私聊 data 数据
export interface IChatsPrivateResponseData {
  uuid: string;
  msgId: number;
  msgCode: string;
}

// 返回下载消息 data 数据
export interface IChatsDownLoadResponseData {
  [key: string]: any;
}
