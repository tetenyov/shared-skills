import React, { ReactNode } from "react";
import { CommonLayout } from "../components";

export default function CheckPage() {
  return <div>Check page</div>;
}

CheckPage.getLayout = function getLayout(page: ReactNode): ReactNode {
  return <CommonLayout>{page}</CommonLayout>;
};
