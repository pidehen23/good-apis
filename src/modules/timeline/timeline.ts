import httpUrl from "../../library/http-url";
import { RequestMethod } from "../../library/method";
import { RequestCommonMethod } from "../../library/common";
import * as timelineType from "./type";

//********************************* 时间轴 *************************************************************/

// 更换时间轴相册封面
export const timelineCover = (data: timelineType.ITimelineCoverInfo) => {
  return RequestCommonMethod<timelineType.ITimeLineCoverResponseData>({
    url: httpUrl.UrlTimelineCover,
    method: RequestMethod.POST,
    data: data
  });
};

// 时间轴删除
export const timelineDelete = (data: timelineType.ITimelineDeleteInfo) => {
  return RequestCommonMethod<timelineType.ITimeLineDeleteResponseData>({
    url: httpUrl.UrlTimelineDelete,
    method: RequestMethod.POST,
    data: data
  });
};

// 时间轴点赞
export const timelineLike = (data: timelineType.ITimelineLikeInfo) => {
  return RequestCommonMethod<timelineType.ITimeLineLikeResponseData>({
    url: httpUrl.UrlTimelineLike,
    method: RequestMethod.POST,
    data: data
  });
};

// 时间轴信息查询
export const timelineList = (data: timelineType.ITimelineListInfo) => {
  return RequestCommonMethod<timelineType.ITimeLineListResponseData>({
    url: httpUrl.UrlTimelineList,
    method: RequestMethod.POST,
    data: data
  });
};

// 允许陌生人查看十条时间轴
export const timelinePublic = (data: timelineType.ITimelinePublicInfo) => {
  return RequestCommonMethod<timelineType.ITimeLinePublicResponseData>({
    url: httpUrl.UrlTimelinePublic,
    method: RequestMethod.POST,
    data: data
  });
};

// 发布时间轴
export const timelinePublish = (data: timelineType.ITimelinePublishInfo) => {
  return RequestCommonMethod<timelineType.ITimeLinePublishResponseData>({
    url: httpUrl.UrlTimelinePublish,
    method: RequestMethod.POST,
    data: data
  });
};

// 时间轴评论
export const timelineReply = (data: timelineType.ITimelineReplyInfo) => {
  return RequestCommonMethod<timelineType.ITimeLineReplyResponseData>({
    url: httpUrl.UrlTimelineReply,
    method: RequestMethod.POST,
    data: data
  });
};

// 设置是否允许朋友查看时间轴的范围(3天;半年;全部).
export const timelineViewable = (data: timelineType.ITimelineViewableInfo) => {
  return RequestCommonMethod<timelineType.ITimeLineViewableResponseData>({
    url: httpUrl.UrlTimelineViewable,
    method: RequestMethod.POST,
    data: data
  });
};
