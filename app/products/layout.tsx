import BottomTabs from "@/components/bottom-tabs";
import MainHeader from "@/components/header";
import React, { ReactNode } from "react";
import ProductsHeader from "./products-header";

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <ProductsHeader />

      <main className="mt-28 p-4">{children}</main>

      <BottomTabs active="products" />
    </div>
  );
};

export default ProductsLayout;
