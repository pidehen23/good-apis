// isJSon 对象
export const isJsonString = (str: any) => {
  if (typeof str == "string") {
    try {
      var obj = JSON.parse(str);
      if (obj && typeof obj == "object") {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
};