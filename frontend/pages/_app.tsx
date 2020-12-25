import { AppProps } from "next/app";
import React from "react";

import Layout from "../components/Layout";
import { UserContextProvider } from "../context/UserContext";

import "../styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <UserContextProvider>
        <Layout />
        <Component {...pageProps} />
      </UserContextProvider>
    </React.Fragment>
  );
}

export default App;
