/**
 Original type for Component doesn't include getLayout function. We need to declare a new types
 */
import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from "next";

import type { AppProps } from "next/app";

declare module "next" {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module "next/app" {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
