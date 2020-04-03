import { CSSProp } from "styled-components"; // eslint-disable-line
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {} // eslint-disable-line
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
