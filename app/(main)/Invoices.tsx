import React from "react";
import InvoiceCard from "../components/InvoiceCard";
import { invoices } from "@/data";

const Invoices = () => {
  return (
    <div className="mt-4 space-y-4">
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default Invoices;
