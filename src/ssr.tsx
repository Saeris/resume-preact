import { h, Fragment, ComponentType, FunctionalComponent, JSX } from "preact";

let wrap = (App: ComponentType) => App;

// For SSR only: wrap the app to collect and append styles
if (process.env.SSR) {
  // We use require() here so that these large interfaces don't get bundled into the client:
  const { ServerStyleSheet, StyleSheetManager }: typeof import("styled-components") = require("styled-components"); // eslint-disable-line

  wrap = (App: ComponentType) => {
    const sheet = new ServerStyleSheet();

    // **This wrapper component is required.**
    // It ensures getStyleElement() runs only after <App> has been rendered.
    // Here's how:
    //   VDOM is rendered depth-first, and children are rendered in first-to-last order.
    //   By wrapping `sheet.getStyleElement()` in a component and placing that component
    //   *after* <StyleSheetManager><App/></StyleSheetManager>, we leverage the fact that
    //   <StyleTags> will always be "rendered" (and thus called) after <App> is rendered.
    //   This ensures `getStyleElement()` is invoked after rendering App, when styles are collected.
    const StyleTags = () => {
      // styled-components typings are broken and explicitly force React.Element, so we override:
      return (sheet.getStyleElement() as unknown) as JSX.Element;
    };

    // eslint-disable-next-line
    return props => (
      <Fragment>
        <StyleSheetManager sheet={sheet.instance}>
          <App {...props} />
        </StyleSheetManager>
        <StyleTags />
      </Fragment>
    );
  };
}

export { wrap };
