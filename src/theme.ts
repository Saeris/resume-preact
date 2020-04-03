import "typeface-orbitron";
import "typeface-titillium-web";

export interface Bounds {
  min: number;
  max: number;
}

export interface Media {
  between: (lowerBound: Bounds, upperBound: Bounds, excludeLarge?: boolean) => string;
  greaterThan: (size: Bounds) => string;
  lessThan: (size: Bounds) => string;
  size: (size: Bounds) => string;
}

export interface Theme {
  media: Media;
  breakpoints: {
    mobileSmall: { min: 0; max: 320 };
    mobileMedium: { min: 321; max: 375 };
    mobileLarge: { min: 376; max: 425 };
    tablet: { min: 426; max: 768 };
    laptop: { min: 769; max: 1024 };
    laptopLarge: { min: 1025; max: 1440 };
    desktop: { min: 1441; max: 1920 };
    desktopLarge: { min: 1921; max: 999e308 };
  };
  fonts: {
    /** 'Orbitron', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif */
    title: "'Orbitron', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif" | "var(--fonts-title)";
    /** 'Titillium Web', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif */
    body: "'Titillium Web', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif" | "var(--fonts-body)";
  };
  sizes: {
    /** 3.8rem */
    title: "3.8rem" | "var(--sizes-title)";
    /** 2.6rem */
    subtitle: "2.6rem" | "var(--sizes-subtitle)";
    /** 2.1rem */
    header: "2.1rem" | "var(--sizes-header)";
    /** 1.8rem */
    label: "1.8rem" | "var(--sizes-label)";
    /** 1.6rem */
    body: "1.6rem" | "var(--sizes-body)";
    /** 1.4rem */
    small: "1.4rem" | "var(--sizes-small)";
  };
  weights: {
    /** 800 */
    extrabold: 800 | "var(--weights-extrabold)";
    /** 700 */
    bold: 700 | "var(--weights-bold)";
    /** 600 */
    semibold: 600 | "var(--weights-semibold)";
    /** 500 */
    medium: 500 | "var(--weights-medium)";
    /** 400 */
    regular: 400 | "var(--weights-regular)";
    /** 300 */
    light: 300 | "var(--weights-light)";
    /** 200 */
    extralight: 200 | "var(--weights-extralight)";
    /** 100 */
    thin: 100 | "var(--weights-thin)";
  };
  colors: {
    /** #127cbb */
    primary: "#127cbb" | "var(--colors-primary)";
    /** #4b54a0 */
    secondary: "#4b54a0" | "var(--colors-secondary)";
    /** #d5dce4 */
    accent: "#d5dce4" | "var(--colors-accent)";
    /** #33568b */
    text: "#33568b" | "var(--colors-text)";
    /** #fff */
    white: "#fff" | "var(--colors-white)";
    /** #000 */
    black: "#000" | "var(--colors-black)";
  };
}

export const theme: Theme = Object.defineProperties(
  {
    fonts: {
      title: `'Orbitron', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
      body: `'Titillium Web', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`
    },
    sizes: {
      title: `3.8rem`,
      subtitle: `2.6rem`,
      header: `2.1rem`,
      label: `1.8rem`,
      body: `1.6rem`,
      small: `1.4rem`
    },
    weights: {
      extrabold: 800,
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400,
      light: 300,
      extralight: 200,
      thin: 100
    },
    colors: {
      primary: `#127cbb`,
      secondary: `#4b54a0`,
      accent: `#d5dce4`,
      text: `#33568b`,
      white: `#fff`,
      black: `#000`
    }
  },
  {
    media: {
      value: {
        between(lowerBound, upperBound, excludeLarge = false) {
          if (excludeLarge) {
            return `@media (min-width: ${lowerBound.min}px) and (max-width: ${upperBound.min - 1}px)`;
          }
          if (upperBound.max === Infinity) {
            return `@media (min-width: lowerBound.min}px)`;
          }
          return `@media (min-width: lowerBound.min}px) and (max-width: ${upperBound.max}px)`;
        },

        greaterThan(size) {
          return `@media (min-width: ${size.min}px)`;
        },

        lessThan(size) {
          return `@media (max-width: ${size.min - 1}px)`;
        },

        size(size) {
          if (size.min === null) return theme.media.lessThan(size);
          if (size.max === null) return theme.media.greaterThan(size);
          return theme.media.between(size, size);
        }
      } as Media
    },
    breakpoints: {
      value: {
        mobileSmall: { min: 0, max: 320 },
        mobileMedium: { min: 321, max: 375 },
        mobileLarge: { min: 376, max: 425 },
        tablet: { min: 426, max: 768 },
        laptop: { min: 769, max: 1024 },
        laptopLarge: { min: 1025, max: 1440 },
        desktop: { min: 1441, max: 1920 },
        desktopLarge: { min: 1921, max: 999e308 }
      }
    }
  }
);
