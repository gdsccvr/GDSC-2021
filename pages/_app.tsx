import Script from "next/script";
import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Q2LXM26G88`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Q2LXM26G88');
  `}
      </Script>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
