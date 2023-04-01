import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Saleen Shahriar"
        titleTemplate="Saleen Shahriar"
        defaultTitle="Saleen Shahriar"
        description="Hey, I'm Saleen! I'm a Computer Engineering student at the University of Waterloo, with a passion for software development, embedded systems, hardware, and design."
        openGraph={{
          url: "https://saleen.dev/",
          title: "Saleen Shahriar",
          description:
            "Hey, I'm Saleen! I'm a Computer Engineering student at the University of Waterloo, with a passion for software development, embedded systems, hardware, and design.",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Saleen, Saleen Shahriar, Developer, Software Engineer, Computer Engineer, Hardware Engineer, Student",
          },
        ]}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
