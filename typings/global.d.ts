import Apis from "../dist/index";

declare global {
  interface Window {
    apis: Apis
  }
}
