import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Template from "template/Template";
import "styles/globals.css";
import "assets/fonts/Vazirmatn.css";

type Props = {};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
        />
        <title>T-Studio</title>
      </Head>
      <Template>
        <Component {...pageProps} />
      </Template>
    </>
  );
};

export default MyApp;
