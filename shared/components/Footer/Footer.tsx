import React from "react";
import { Container } from "../Container";

export const Footer = () => {
  return (
    <footer className="animate show">
      <Container>
        <div className="flex justify-between flex-row-reverse items items-end">
          {/* //TODO: Fix this line with CSS to relative position */}
          {/* <BackToTop /> */}
          <div className="flex justify-between items-center">
            <div>
              {/* TODO: Fix this line by move it in envs */}
              &copy; 2024 {`|`} useMim
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
