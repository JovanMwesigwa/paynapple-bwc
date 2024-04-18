import { ArrowLeft } from "lucide-react";
import React from "react";

const InvoiceHeader = () => {
  return (
    <div className="w-full  h-14 px-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <ArrowLeft size={22} />
        <h1>Invoice</h1>
      </div>
    </div>
  );
};

export default InvoiceHeader;
