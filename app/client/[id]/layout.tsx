import React, { ReactNode } from "react";
import ProductHeader from "./header";

const ClientDetailsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <ProductHeader />
      <main className="p-5">{children}</main>
    </div>
  );
};

export default ClientDetailsLayout;
