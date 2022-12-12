import React, { Component } from "react";
import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SX60M6MWJD"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)}
gtag('js', new Date());
gtag('config', 'G-SX60M6MWJD');`,
          }}
        ></Script>
      </Head>
    </div>
  );
}
