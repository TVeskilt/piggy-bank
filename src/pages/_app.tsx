import { AppProps } from "next/app";
import { NextComponentType } from "next";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

type AuthAppProps = AppProps & {
  Component: NextComponentType & { auth?: { roles: string[] } };
};

export default function App({ Component, pageProps }: AuthAppProps) {
  return (
    <AppCacheProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </AppCacheProvider>
  );
}
