import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <h1>Shared skills</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Test</Link>
          </li>
          <li>
            <Link href="/check">Check</Link>
          </li>
        </ul>
      </nav>
      <button type="button">Connect wallet</button>
    </header>
  );
};
