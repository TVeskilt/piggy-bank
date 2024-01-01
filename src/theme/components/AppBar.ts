import { Components } from "@mui/material";
import { theme } from "@/theme";

export const MuiAppBar: Components["MuiAppBar"] = {
  styleOverrides: {
    root: () => ({
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
    }),
  },
};
