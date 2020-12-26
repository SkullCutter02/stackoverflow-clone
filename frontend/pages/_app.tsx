import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import { UserContextProvider } from "../context/UserContext";

import "../styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>
          AskProgramming | The ultimate site to ask for programming help!
        </title>
      </Head>
      <UserContextProvider>
        <Layout />
        <Component {...pageProps} />
      </UserContextProvider>
    </React.Fragment>
  );
}

export default App;
