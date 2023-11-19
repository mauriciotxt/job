import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {  
  return (
    <>
      <Head>
        <title>Welcome to the App!</title>
      </Head>
      <SessionProvider session={session}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
