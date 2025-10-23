import React from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProviderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <header>Provider Header</header>
      <main>{children}</main>
      <footer>Provider Footer</footer>
    </div>
  );
};

export default ProviderLayout;
