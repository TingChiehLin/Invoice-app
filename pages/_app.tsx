import "../styles/globals.css";
import type { AppProps } from "next/app";

import NavBarLayout from "../layouts/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBarLayout />
      <Component {...pageProps} />
      <footer></footer>
    </>
  );
}

export default MyApp;
