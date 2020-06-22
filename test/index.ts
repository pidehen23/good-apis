import windSDK from "../dist/index";
import { ISocketResponseData } from "../dist/modules/socket/type";

const SDK = windSDK.getInstance({
  url: "http://localhost:4320/",
  account: "123",
  password: "44444",
  onSuccess: res => {
    console.log(res);
  },
  onError: error => {
    console.log(error);
  }
});

SDK.login({
  account: "1",
  password: "2"
});

// 接受服务器消息
const onmessage = (state: number, data: ISocketResponseData) => {
  console.log("服务器的消息: ", data.data);
};
const ws = new SDK.Socket({
  url: "ws://localhost:8084/",
  onmessage: onmessage,
  onopen: (state: number, event?: Event) => { },
  onerror: (state: number, event?: Event) => { },
  onclose: (state: number, event?: CloseEvent) => { }
});
ws.connect();

// 登出
SDK.logon()
  .then(res => {
    console.log(res.data);
  })
  .catch(error => console.log("33333", error));

// 测试组
SDK.group
  .groupAdd({
    friendId: 333,
    groupId: 444,
    helloWord: "55555",
    frn: 1,
    ope: 5555
  })
  .then(res => {
    console.log("组add:", res.data);
  })
  .catch(error => {
    console.log("组add:", error);
  });
