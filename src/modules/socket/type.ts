// 心跳接口
export const enum IPingPong {
  ping = "ping",
  pong = "pong",
}

// 发送的数据类型
export interface ISendDataInfo {
  [key: string]: any;
}

interface ISocketBaseInfo {
  frn: 1 | 2 | 3; // 风声信息来源识别码,1表示wind，2表示opendns，3表示wehub
  ope: number; // 账户号
}

/**
 *  返回数据
 * @param ICbType 回调类型代码
 * @param ISocketResponseData 具体数据
 * */

// chats 1000
export interface IChatsBaseInfo extends ISocketBaseInfo {
  content: string; //文字内容
  desc: string; // 链接描述
  ext: string; // 语音消息格式 example: amr
  fromCode: string; // 发消息人编号
  fromId: number; // 发消息人的微信ID
  md5: string; // 文件的md5值
  mediaTime: number; // 语音时长/视频时长；当消息类型为以上两种类型时，必须传时长且时长要正确，否则会发送失败，当时长不正确时可能会有很大的禁封风险
  msgTime?: number; // 发送时间
  // 消息类型(1:文字;2:图片;3:语音;4:视频;5:链接;6:好友名片;7:文件;8:小程序;9:音乐)
  msgType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  msgStatus: 0 | 1 | 2; //消息发送状态：0-发送中，1-发送成功，2-发送失败
  size: number; // 语音文件大小,以Byte为单位
  title: string; //链接标题
  toCode: string; //收消息人编号
  toId: number; //收消息人的微信ID
  url: string; //链接URL，当消息为视频时，此处传视频的链接地址
}
export interface IChatsInfo_1001 extends IChatsBaseInfo {
  msgCode: string;
  num: number; // 消息编号(整型,用于区分同一组的消息)
}
export interface IChatsInfo_1002 extends IChatsBaseInfo {
  msgCode: string;
  num: number; // 消息编号(整型,用于区分同一组的消息)
  groupId: number; //群id
  isAt: boolean;
  profileIds: number[];
}
export interface IChatsInfo_1003 extends IChatsBaseInfo {
  fileCode: string; //文件编号
  fileId: number; // 文件ID
  groupCode: string; // 群成员用户编号
  groupId: number; // 群id
}

export interface IChatsInfo_1004 {
  ackId: string;
  msgId: number;
  msgCode: string;
  cbType: 1001 | 1002;
  formId: number;
  fromCode: string;
  toCode: string;
  toId: number;
}

// timeline 6000
export interface ITimelineLikes {
  likeCode: string; //点赞人的编号
  likeId: number; //点赞人的Id
  likeTime: string; // 点赞时间
}
export interface ITimelineReplies {
  content: string; //评论内容
  parentReplierCode: string; //父级评论者的编号
  parentReplierId: number; // 父级评论者的ID
  parentReplyId: number; //父级评论的编号，默认是0
  replierCode: string; //评论者的编号
  replierId: number; //评论者的ID
  replyId: number; //评论的编号
  replyTime: string; //评论时间
}
export interface ITimelineMedial {
  id: number; // 多媒体文件ID
  url: string; // 多媒体文件链接
}
export interface ITimelineInfo_6001 extends ISocketBaseInfo {
  desc: string; // 文字的内容
  likes: ITimelineLikes[]; // 点赞人列表
  medias: ITimelineMedial[]; // 媒体文件列表
  replies: ITimelineReplies[]; // 回复列表
  publishTime: string; // 时间轴发布的时间
  senderCode: string; // 发时间轴人的编号
  senderId: string; // 发时间轴人ID
  timelineId: number; //时间轴ID
  title: string; // 链接的标题
  type: 2001 | 2002 | 2004 | 2005; // 类型 2001纯文字 2002图文 2004 视频 2005链接
  url: string; // 链接地址
}

export interface ITimelineInfo_6002 extends ISocketBaseInfo {
  act: string; // 操作编号
  timelineId: number; //时间轴ID
}
export interface ITimelineInfo_6003 extends ISocketBaseInfo {
  content: string; // 评论内容
  parentReplierCode: string; //父级评论者的编号
  parentReplierId: number; //父级评论者的ID
  parentReplyId: number; //父级评论的编号，默认是0
  replierCode: string; //评论者的编号
  replierId: number; //评论者的ID
  replierNickname: string; //评论者的昵称
  replyId: number; //评论的编号
  replyTime: string; //评论时间
  timelineId: number; //时间轴ID
}
export interface ITimelineInfo_6004 extends ISocketBaseInfo {
  likeCode: string; //点赞人的编号
  likeId: number; //点赞人的Id
  likeTime: string; //点赞时间
  likerNickname: string; //点赞者的昵称
  opn: 0 | 1; //操作(1:点赞;0:取消)
  timelineId: number; //时间轴ID
}

export interface ITimelineReplies_6005 extends ITimelineReplies {
  replierNickname: string; //评论者的昵称
}
export interface ITimelineLikes_6005 extends ITimelineLikes {
  likerNickname: string; // 点赞者的昵称
  opn: 0 | 1; // 操作(1:点赞;0:取消)
}

export interface ITimelineInfo_6005 extends ISocketBaseInfo {
  opeCode: string; // 操作人编号
  opeId: 0; // 操作人id
  timelineId: number; // 时间轴ID
  likes: ITimelineLikes_6005[];
  replies: ITimelineReplies_6005[];
}

export interface ISocketResponseData {
  // 回调类型代码
  cbType:
  | 1001
  | 1002
  | 1003
  | 1004
  | 2000
  | 3000
  | 4000
  | 5000
  | 6001
  | 6002
  | 6003
  | 6004
  | 6005
  | 7000;
  data:
  | IChatsInfo_1001
  | IChatsInfo_1002
  | IChatsInfo_1003
  | IChatsInfo_1004
  | ITimelineInfo_6002
  | ITimelineInfo_6003
  | ITimelineInfo_6004
  | ITimelineInfo_6005;
  opt: string; //操作编号
}

export declare type IMsgState =
  | WebSocket["CONNECTING"]
  | WebSocket["OPEN"]
  | WebSocket["CLOSED"]
  | WebSocket["CLOSING"];

// 连接websocket需要的参数
export interface ISocketParams {
  url: string;
  token: string;
  headbeatPing?: number;
  headbeatPong?: number;
  isHoldReConnect?: boolean; // 是否一直保持重连
  maxRetryCount?: number; // 最大重连次数（isHoldReConnect为false时生效）
  reConnectInterval?: number // 重连毫秒
  onopen?: (state: IMsgState, event?: Event) => void;
  onmessage?: (data: ISocketResponseData, state: IMsgState) => void;
  onerror?: (state: IMsgState, event?: Event) => void;
  onclose?: (state: IMsgState, event?: CloseEvent) => void;
}
