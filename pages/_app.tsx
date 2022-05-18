import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobaThemeStyle } from "@common/GlobalThemeStyle";
import { PageTransition } from "@common/PageTransition";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";
import "@fontsource/mulish/900.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobaThemeStyle>
      <PageTransition />
      <Component {...pageProps} />
    </GlobaThemeStyle>
  );
}

export default MyApp;
