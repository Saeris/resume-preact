import { css, DefaultTheme } from "styled-components";

const createProps = (namespace: string, props: Record<string, string | number>) =>
  Object.entries(props).reduce((declartions, [key, value]) => {
    return css`${declartions}--${namespace}-${key}: ${value};`;
  }, css``);

const createVars = <T>(namespace: keyof DefaultTheme, props: T): T =>
  Object.keys(props).reduce((declartions, key) => {
    return {
      ...declartions,
      [key]: `var(--${String(namespace)}-${key})`
    };
  }, {} as T);

export const extractCSSProps = (theme: DefaultTheme) => css`
  :root {
    ${Object.entries(theme).map(([key, value]: [string, Record<string, string | number>]) => createProps(key, value))}
  }
`;

export const extractCSSVars = (theme: DefaultTheme) => {
  const modified: DefaultTheme = Object.create(theme);

  for (const [key, value] of Object.entries(theme)) {
    modified[key as keyof DefaultTheme] = createVars(key as keyof DefaultTheme, value);
  }

  return modified;
};
