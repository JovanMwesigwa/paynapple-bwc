"use client";

import { invoices } from "@/data";
import { useParams } from "next/navigation";
import { TabsComponent } from "./tabs-component";
import useFetchOne from "@/app/hooks/useFetch";
import { upsertGetInvoiceById } from "@/app/actions/invoices";
import { Loader } from "lucide-react";
import { MainTabsComponent } from "./maintabs-component";

const InvoiceDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchOne(
    upsertGetInvoiceById,
    Number(id),
    "getInvoice"
  );

  if (isLoading)
    return (
      <div className="flex flex-1 items-center justify-center">
        <Loader size={16} />
      </div>
    );

  return (
    <div>
      <MainTabsComponent invoice={data} />
    </div>
  );
};

export default InvoiceDetails;
