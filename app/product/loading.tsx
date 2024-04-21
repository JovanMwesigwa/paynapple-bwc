"use client";

import { Loader } from "lucide-react";
import React from "react";

const ProductLoadingPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader size={18} />
    </div>
  );
};

export default ProductLoadingPage;
