import Head from "next/head"
import React from 'react'
import App from 'next/app'

class MyApp extends App {
 
  render() {
    const { Component, pageProps } = this.props
    return (
<>
      <Head>
      <title>Wix UX Feed</title>
      <link rel="shortcut icon" type="image/x-icon" href="static/favicon.png" />
      <style>
        {`
          @font-face {
            font-family: 'Inter';
            font-style:  normal;
            font-weight: 400;
            font-display: swap;
            src: url("static/fonts/Inter-Regular.woff2") format("woff2"),
                 url("static/fonts/Inter-Regular.woff") format("woff");
          }

          @font-face {
            font-family: 'Inter';
            font-style:  normal;
            font-weight: 500;
            font-display: swap;
            src: url("static/fonts/Inter-Medium.woff2") format("woff2"),
                 url("static/fonts/Inter-Medium.woff") format("woff");
          }
          @font-face {
            font-family: 'Inter';
            font-style:  normal;
            font-weight: 700;
            font-display: swap;
            src: url("static/fonts/Inter-Bold.woff2") format("woff2"),
                 url("static/fonts/Inter-Bold.woff") format("woff");
          }
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 600;
          font-display: swap;
          src: url("static/fonts/Inter-SemiBold.woff2") format("woff2"),
               url("static/fonts/Inter-SemiBold.woff") format("woff");
        }

       
          body {
            font-family: 'Inter';
          }
        `}
      </style>
    </Head>
    <Component {...pageProps} />
    </>
    )
  }
}

export default MyApp