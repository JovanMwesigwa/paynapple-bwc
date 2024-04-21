import { Loader } from "lucide-react";
import React from "react";

const ProductsLoadingPage = () => {
  return (
    <div className="flex flex-1 h-screen items-center justify-center">
      <Loader size={28} />
    </div>
  );
};

export default ProductsLoadingPage;
