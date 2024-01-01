import { darken, lighten } from "@mui/material";

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "gray";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    darker: string;
  }

  interface Palette {
    gray: PaletteColor;
  }
}

const PRIMARY = {
  light: "#9580FF",
  main: "#7B61FF",
  dark: "#5643B2",
  contrastText: "#fff",
};

const GRAY = {
  light: lighten("#9098A2", 0.2),
  main: "#9098A2",
  dark: "#404E4D",
  contrastText: "#FFFFFF",
};

const COMMON = {
  common: { black: "#000000", white: "#FFFFFF" },
  primary: PRIMARY,
  secondary: PRIMARY,
  info: PRIMARY,
  gray: GRAY,
};

export default {
  ...COMMON,
  mode: "light",
  background: { paper: "#F9F9F9", default: "#F9F9F9", darker: "#F3F3F3" },
} as const;
