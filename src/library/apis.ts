import axios from "axios";

const apis = axios.create({
  baseURL: "",
  timeout: 10 * 1000, // 超时毫秒
});

export default apis;

// apis.interceptors.request.use(
//   (config) => {
//     const token = getToken();

//     if (token) {
//       config.headers.Authorization = `${token}`;
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

// apis.interceptors.response.use(
//   (res: AxiosResponse<any>) => {
//     const data = res.data;
//     if (data.code === -401) {
//       unsetCookie(getTokenKey());
//       window.location.href = "/login";
//     }
//     return data;
//   },
//   (err) => {
//     if (err.response) {
//       switch (err.response.status) {
//         case 401:
//           unsetCookie(getTokenKey());
//           break;
//         case 403:
//           break;
//       }
//       return Promise.reject(err.response);
//     }

//     return Promise.reject(err);
//   }
// );
