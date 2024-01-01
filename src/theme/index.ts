import { createTheme } from "@mui/material";
import palette from "@/theme/palette";
import * as components from "./components";

export const theme = createTheme({
  spacing: 1,
  palette,
  components,
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
