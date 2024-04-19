import BottomTabs from "@/components/bottom-tabs";
import React, { ReactNode } from "react";

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {children}

      <BottomTabs active="products" />
    </div>
  );
};

export default ProductsLayout;
