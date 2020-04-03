import { Theme } from "./theme";
import { CSSProp } from "styled-components" // eslint-disable-line

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp
    }
  }
}
