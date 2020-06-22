import { isJsonString } from "../../library/util";
import {
  IMsgState,
  ISocketParams,
  IPingPong,
  ISendDataInfo,
  ISocketResponseData,
} from "./type";

/**
 * @param {String} serverUrl ws地址
 * @param {Function} onWsCallback 服务器信息的回调传数据给函数
 */

export default class Socket {
  private token = "";
  private state = WebSocket.CLOSED; // 关闭状态
  private maxRetryCount = 5; // 最大重连次数
  private connection: WebSocket | null = null; // ws实例
  private reConnectInterval: number = 5 * 1000; // 重连频率
  private isHandCloseWs = false; // 是否主动关闭ws
  private isLockReConnect = false; // 加锁，防止重连多次触发
  private isHoldReConnect = true; // 是否一直保持重连
  private serverUrl = ""; // ws地址
  // 心跳机制
  private pingPong = IPingPong.ping;
  private pingInterval: NodeJS.Timeout | null = null;
  private pongInterval: NodeJS.Timeout | null = null;
  private headbeatPing = 30 * 1000; // 心跳发送频率
  private headbeatPong = 60 * 1000; // 心跳接收频率
  //  回调函数
  onopen?: (state: IMsgState, event?: Event) => void;
  onmessage?: (data: ISocketResponseData, state: IMsgState) => void;
  onerror?: (state: IMsgState, event?: Event) => void;
  onclose?: (state: IMsgState, event?: CloseEvent) => void;

  constructor(params: ISocketParams) {
    this.serverUrl = params.url.replace(/\/$/gi, "");
    this.maxRetryCount = params.maxRetryCount || this.maxRetryCount;
    this.isHoldReConnect = params.isHoldReConnect || this.isHoldReConnect;
    this.maxRetryCount = params.maxRetryCount || this.maxRetryCount;
    this.headbeatPing = params.headbeatPing || this.headbeatPing;
    this.headbeatPong = params.headbeatPong || this.headbeatPong;
    this.reConnectInterval = params.reConnectInterval || this.reConnectInterval
    this.onopen = params.onopen;
    this.onmessage = params.onmessage;
    this.onerror = params.onerror;
    this.onclose = params.onclose;
    this.token = params.token;
    if (!params.url) {
      console.error("请输入webSocket地址");
    }
    if (!params.token) {
      console.error("token不能为空");
    }
  }
  // 重连
  private onReconnect(retryCount: number) {
    if (this.isLockReConnect) {
      return;
    }

    this.isLockReConnect = true;

    // 非手动断开才从重连
    if (!this.isHandCloseWs) {
      // 清除心跳定时器
      if (this.pingInterval) {
        clearInterval(this.pingInterval);
        this.pingInterval = null;
      }
      if (this.pongInterval) {
        clearInterval(this.pongInterval);
        this.pongInterval = null;
      }

      this.state = WebSocket.CLOSED;
      this.connection = null;

      setTimeout(() => {
        console.log("正在重新尝试连接中...");
        this.connect(
          this.isHoldReConnect ? this.maxRetryCount : retryCount - 1
        );
        this.isLockReConnect = false;
      }, this.reConnectInterval);
    } else {
      console.log("主动断开的情况不会重连，请手动连接");
    }
  }
  // 连接socket
  public connect(retryCount = this.maxRetryCount) {
    if (this.state === WebSocket.OPEN) {
      return;
    }

    if (retryCount === 0) {
      console.error("重试次数已达到上限!");
      this.state = WebSocket.CLOSED;
      return;
    } else {
      if (window.WebSocket) {
        const WS = new WebSocket(
          `${this.serverUrl}/callback?token=${this.token}`
        );
        this.state = WS.readyState;
        //  连接成功
        WS.onopen = (event: Event) => {
          console.log(`连接成功`);
          this.connection = WS;
          this.state = WS.readyState;
          this.heartCheck();

          return this.onopen && this.onopen(WS.readyState, event);
        };

        // 监听服务端返回的数据
        WS.onmessage = (event: MessageEvent) => {
          const data = event.data;
          this.state = WS.readyState;

          // 整理返回数据
          if (isJsonString(data)) {
            return (
              this.onmessage &&
              this.onmessage(
                JSON.parse(data) as ISocketResponseData,
                WS.readyState
              )
            );
          } else {
            // 服务器端返回pong,修改pingPong的状态
            if (data === IPingPong.pong) {
              this.pingPong = IPingPong.pong;
            }
          }
        };

        WS.onerror = (event: Event) => {
          this.state = WS.readyState;
          this.onReconnect(retryCount);
          return this.onerror && this.onerror(WS.readyState, event);
        };
        // 连接关闭
        WS.onclose = (event: CloseEvent) => {
          this.state = WS.readyState;
          if (this.isHandCloseWs) {
            console.log("已主动断开连接！");
          }
          this.onReconnect(retryCount);

          return this.onclose && this.onclose(WS.readyState, event);
        };
      } else {
        alert("你的浏览器不支持 WebSocket！");
      }
    }
  }

  // 连接完毕
  public connected() {
    switch (this.state) {
      case WebSocket.OPEN:
        return Promise.resolve(this);
      default:
        return Promise.reject("连接错误");
    }
  }

  // 心跳连接
  private heartCheck() {
    this.pingPong = IPingPong.ping;
    // 客户端发送ping
    this.pingInterval = setInterval(() => {
      if (this.connection && this.state === WebSocket.OPEN) {
        this.connection.send(IPingPong.ping);
      }
    }, this.headbeatPing);
    // 客户端接收
    this.pongInterval = setInterval(() => {
      // 没有返回pong 重启webSocket
      if (this.pingPong === IPingPong.ping) {
        this.connect();
      }
      // 重置为ping 若下一次 ping 发送失败 或者pong返回失败(pingPong不会改成pong)，将重启
      this.pingPong = IPingPong.ping;
    }, this.headbeatPong);
  }

  // 主动关闭ws
  public onHandClose() {
    // ws实例存在且没有关闭
    if (this.connection) {
      if (this.pingInterval) {
        clearInterval(this.pingInterval);
        this.pingInterval = null;
      }
      if (this.pongInterval) {
        clearInterval(this.pongInterval);
        this.pongInterval = null;
      }
      this.isHandCloseWs = true;
      this.connection.close(1000, "手动关闭");
      this.connection = null;
    }
    return this;
  }

  // 发送数据
  public sendData(data: ISendDataInfo | string) {
    if (!window.WebSocket) {
      return Promise.reject("你的浏览器不支持 WebSocket！");
    }
    if (this.connection && this.state === WebSocket.OPEN) {
      // 判断要发送数据类型
      if (typeof data === "object") {
        // 对象需要转json
        this.connection.send(JSON.stringify(data));
      } else if (typeof data === "string") {
        this.connection.send(data);
      }
    } else {
      console.log("ws已断开连接！");
    }

    return Promise.resolve(this);
  }
}
