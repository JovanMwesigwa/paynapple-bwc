"use client";

import { Loader } from "lucide-react";
import React from "react";

const ClientsLoadingPage = () => {
  return (
    <div className="flex flex-1 h-screen items-center justify-center">
      <Loader size={16} />
    </div>
  );
};

export default ClientsLoadingPage;
