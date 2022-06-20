import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};
export function CommonLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Shared skills app</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
