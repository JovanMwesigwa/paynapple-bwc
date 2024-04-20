"use client";

import { invoices } from "@/data";
import { useParams } from "next/navigation";
import { TabsComponent } from "./tabs-component";

const InvoiceDetails = () => {
  const { id } = useParams();

  const invoice = invoices.find((invoice) => invoice.id === id);

  if (!invoice) return null;

  return (
    <div>
      <TabsComponent invoice={invoice} />
    </div>
  );
};

export default InvoiceDetails;
