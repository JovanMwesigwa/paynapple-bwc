"use client";

import { Loader } from "lucide-react";
import React from "react";

const PayLinksLoading = () => {
  return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader size={16} />
    </div>
  );
};

export default PayLinksLoading;
