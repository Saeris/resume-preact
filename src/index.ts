import App from "./App";
import { wrap } from "./ssr";

if (process.env.SSR) {
  const jsdom = __non_webpack_require__("jsdom");
  // @ts-ignore
  global["DOMParser"] = new jsdom.JSDOM().window.DOMParser;
}

export default wrap(App);
