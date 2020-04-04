import { h } from "preact";
import { ThemeProvider } from "styled-components";
import { Resume } from "./Resume";
import { extractCSSVars } from "./extractCSSVars";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

export const App = () => (
  <ThemeProvider theme={extractCSSVars(theme)}>
    <GlobalStyles />
    <Resume />
  </ThemeProvider>
);
