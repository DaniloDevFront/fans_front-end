import "./globals.scss";

import React from "react";
import Head from "next/head";

// COMPONENTS
import { HeaderComponent } from "@/app/components/components-core/";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Fans - Sua plataforma</title>
        <meta name="description" content="Bem vindos ao Fans" />
      </Head>

      {/* <HeaderComponent /> */}
      <main className="main-content">{children}</main>
    </>
  );
}
