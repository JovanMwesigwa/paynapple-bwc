import React, { ReactNode } from "react";
import LinkHeader from "./header";

const LinkDetailsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <LinkHeader />
      <main className="p-5">{children}</main>
    </div>
  );
};

export default LinkDetailsLayout;
