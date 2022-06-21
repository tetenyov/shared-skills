import React, { ReactNode } from "react";
import Link from "next/link";
import { CommonLayout } from "../components";

export default function Home() {
  return (
    <section>
      <h3>Check your knowledge of welding</h3>
      <Link href="/test/1">Start test</Link>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactNode): ReactNode {
  return <CommonLayout>{page}</CommonLayout>;
};
