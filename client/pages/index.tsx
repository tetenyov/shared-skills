import React, { ReactNode } from "react";
import type { NextPage } from "next";
import { CommonLayout } from "../components";

export default function Home() {
  return <div>Index page</div>;
}

Home.getLayout = function getLayout(page: ReactNode): ReactNode {
  return <CommonLayout>{page}</CommonLayout>;
};
