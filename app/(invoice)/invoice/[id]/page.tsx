"use client";

import React from "react";
import InvoiceHeader from "../../header";
import { TabsComponent } from "./tabs-component";
import { useParams } from "next/navigation";
import { invoices } from "@/data";
import { InvoiceT } from "@/types";

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
