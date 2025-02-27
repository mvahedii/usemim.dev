import React from "react";
import { Container } from "../Container";

export const Footer = () => {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
  return (
    <footer className="animate show">
      <Container>
        <div className="flex justify-between flex-row-reverse items items-end">
          {/* //TODO: Fix this line with CSS to relative position */}
          {/* <BackToTop /> */}
          <div className="flex justify-between items-center">
            <div>
              &copy; 2025 {`|`} {SITE_NAME}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
