import { RequestMethod } from "../../library/method";
import httpUrl from "../../library/http-url";
import { RequestCommonMethod } from "../../library/common";
import {
  IChatsDownLoadInfo,
  IChatsGroupInfo,
  IChatsPrivateInfo,
  IChatsGroupResponseData,
  IChatsDownLoadResponseData,
  IChatsPrivateResponseData,
} from "./type";

/**
 * 下载消息文件
 * 收到群聊或则私聊消息为图片或则视频时，会通过私聊和群聊消息回调，
 * 回调中包含参数FileCode（下载文件编码），然后调用本接口去下载对应的图片或视频；
 */
export const chatsDownload = (data: IChatsDownLoadInfo) => {
  return RequestCommonMethod<IChatsDownLoadResponseData>({
    url: httpUrl.UrlChatsDownload,
    method: RequestMethod.POST,
    data: data,
  });
};

/**
 * 群消息发送
 * 在群内发送信息,以{ProfileId}发送给{GroupId}
 */
export const chatsGroup = (data: IChatsGroupInfo) => {
  return RequestCommonMethod<IChatsGroupResponseData[]>({
    url: httpUrl.UrlChatsGroup,
    method: RequestMethod.POST,
    data: data,
  });
};

/**
 * 私聊发消息
 * 私聊好友发送消息,以{ProfileId}发送给{FriendId}
 */
export const chatsPrivate = (data: IChatsPrivateInfo) => {
  return RequestCommonMethod<IChatsPrivateResponseData[]>({
    url: httpUrl.UrlChatsPrivate,
    method: RequestMethod.POST,
    data: data,
  });
};
