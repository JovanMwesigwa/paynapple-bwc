import BottomTabs from "@/components/bottom-tabs";
import MainHeader from "@/components/header";
import React, { ReactNode } from "react";
import ProductsHeader from "./products-header";
import ParentFloatingButton from "../components/ParentFloatingButton";

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <ProductsHeader />

      <main className="mt-28 p-4">{children}</main>

      <ParentFloatingButton link="product/new" />
      <BottomTabs active="products" />
    </div>
  );
};

export default ProductsLayout;
