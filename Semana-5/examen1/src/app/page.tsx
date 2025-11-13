import { Component } from "react";
import { GastoProvider } from "../app/context/GastoContext";
import { AppProps } from "next/app";


export default function Home({Component, pageProps } : AppProps) {
  return (
    <GastoProvider>
      <Component {...pageProps} />
    </GastoProvider>
  );
}
