import { ReactNode } from "react";
import { Grid } from "@mui/material";
import AppBar from "@/components/AppBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Grid>
      <AppBar />
      {children}
    </Grid>
  );
}
