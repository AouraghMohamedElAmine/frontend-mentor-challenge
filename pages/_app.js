import "../styles/globals.css";
import Head from "next/head";
import React, { createContext } from "react";
import store from "../redux/store.js"
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    
  
    <Provider store={store}>
      <Head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <title> Welcome to Shortly </title>
      </Head>
      <Component  {...pageProps} />
    </Provider>
  );
}

export default MyApp;
