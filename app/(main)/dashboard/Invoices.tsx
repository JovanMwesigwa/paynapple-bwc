"use client";

import { upsertGetAllInvoices } from "@/app/actions/invoices";
import useFetchAll from "@/app/hooks/useFetchAll";
import { Invoice } from "@prisma/client";
import { Loader } from "lucide-react";
import InvoiceCard from "../../components/InvoiceCard";

const Invoices = () => {
  const { data, isLoading, error } = useFetchAll(
    upsertGetAllInvoices,
    "invoices"
  );

  if (isLoading)
    return (
      <div className="flex flex-1 h-screen items-center justify-center">
        <Loader size={16} />
      </div>
    );

  return (
    <div className="mt-4 space-y-4 min-h-screen">
      {data.map((invoice: Invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default Invoices;
