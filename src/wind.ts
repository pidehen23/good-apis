import HttpUrl from "./library/http-url";
import Socket from "./modules/socket/socket";
import chats from "./modules/chats";
import group from "./modules/group";
import profile from "./modules/profile";
import sns from "./modules/sns";
import tag from "./modules/tag";
import timeline from "./modules/timeline";
import { login, logon } from "./modules/login/login";
import { IBaseResponseData } from "./type";

interface IParamsInfo {
  isLogin?: boolean;
  account?: string;
  password?: string;
  url: string; // 共有接口地址
  onSuccess?: (res?: IBaseResponseData<string>) => void;
  onError?: (error?: any) => void;
}

export default class windSDK {
  constructor(params: IParamsInfo) {
    if (params.url) {
      HttpUrl.resetUrl(params.url);
    }
  }

  public static getInstance(params: IParamsInfo) {
    if (!params.url) {
      console.error("url参数缺失");
    }
    const SDK = new windSDK(params)

    if (params.isLogin) {
      if (!params.account) {
        console.error("account参数缺失");
      }
      if (!params.password) {
        console.error("password参数缺失");
      }
      if (params.account && params.password) {
        login({
          account: params.account,
          password: params.password,
          onSuccess: (res) => params.onSuccess && params.onSuccess(res),
          onError: (error) => params.onError && params.onError(error),
        });
      } else {
        console.error("请填入必须的参数");
      }
    }
    return SDK;
  }

  login = login;
  logon = logon;
  sns = sns;
  tag = tag;
  chats = chats;
  group = group;
  profile = profile;
  timeline = timeline;
  Socket = Socket;
}
