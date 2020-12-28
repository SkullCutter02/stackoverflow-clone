import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/Layout";
import { UserContextProvider } from "../context/UserContext";

import "../styles.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>
          AskProgramming | The ultimate site to ask for programming help!
        </title>
        <script
          src={"https://kit.fontawesome.com/a40d908160.js"}
          crossOrigin="anonymous"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Layout />
          <Component {...pageProps} />
        </UserContextProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
