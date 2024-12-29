import Link from "next/link";

import React from "react";
import { Container } from "../Container";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex flex-wrap gap-y-2 justify-between">
          <Link href="/">
            <div className="font-semibold">useMim</div>
          </Link>
          <nav className="flex gap-1">
            <Link href="/blog">blog</Link>
            <span>{`/`}</span>
            <Link href="/projects">projects</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};
