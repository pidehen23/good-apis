// 基础信息
export interface IBaseTimeLine {
  frn: 1 | 2 | 3; // 风声信息来源识别码,1表示wind，2表示opendns，3表示wehub
  ope: number; // 账户号
}

// 更换时间轴相册封面
export interface ITimelineCoverInfo extends IBaseTimeLine {
  img: string; // url
}
export interface ITimeLineCoverResponseData {
  [key: string]: any;
}

// 时间轴删除
export interface ITimelineDeleteInfo extends IBaseTimeLine {
  timelineId: number; // 时间轴ID
}
export interface ITimeLineDeleteResponseData {
  [key: string]: any;
}

// 时间轴点赞
export interface ITimelineLikeInfo extends IBaseTimeLine {
  opn: 0 | 1; //操作(1:点赞;0:取消)
  timelineId: number;
}
export interface ITimeLineLikeResponseData {
  [key: string]: any;
}

// 时间轴信息查询
export interface ITimelineListInfo extends IBaseTimeLine {
  friendCode: string; // 指定人的编号(只获取他的时间轴，传机器人自己的微信编号获取自己的时间轴)
  latestTimelineId: number; // 最新时间轴ID默认为0
}
export interface ITimeLineListResponseData {
  [key: string]: any;
}

// 允许陌生人查看十条时间轴
export interface ITimelinePublicInfo extends IBaseTimeLine {
  allow: 0 | 1; // 是否允许(1:是;0:否)
}
export interface ITimeLinePublicResponseData {
  [key: string]: any;
}

// 发布时间轴
interface IMediasInfo {
  id: number; // 多媒体文件ID
  url: string; // 多媒体文件链接
}
interface IPublishTag {
  tagId: number; // 标签ID
  tagName: string; // 标签名称
}
export interface ITimelinePublishInfo extends IBaseTimeLine {
  contacts: string[]; // 指定人的编号
  cover?: string; // 封面图片,可选
  desc: string; // 文字的内容
  medias: IMediasInfo[];
  private: 0 | 1 | 2; // 可见类型(0:默认无限制;1:指定不可见;2:指定可见)
  tags: IPublishTag[];
  title: string; // 链接的标题
  type: 1; // 时间轴类型
  url: string; // 链接地址
}
export interface ITimeLinePublishResponseData {
  [key: string]: any;
}

// 时间轴评论
export interface ITimelineReplyInfo extends IBaseTimeLine {
  content: string; // 评论内容
  replyId: number; // 评论id
  timelineId: number; // 时间轴id
}
export interface ITimeLineReplyResponseData {
  [key: string]: any;
}

// 设置允许朋友查看时间轴的范围
export interface ITimelineViewableInfo extends IBaseTimeLine {
  scope: 0 | 1 | 2; // 范围(0:3天;1;半年;2:全部)
}
export interface ITimeLineViewableResponseData {
  [key: string]: any;
}
