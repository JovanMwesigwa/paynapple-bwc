"use client";

import { upsertCreateNewInvoice } from "@/app/actions/invoices";
import useCreate from "@/app/hooks/useCreate";
import { Button } from "@/components/ui/button";
import { InvoiceT } from "@/types";
import { Invoice, Product } from "@prisma/client";
import { Loader, Save } from "lucide-react";
import { useState } from "react";
import { useAccount } from "wagmi";

const SaveButton = ({
  client,
  invoiceNumber,
  terms,
  customerNotes,
  thankYouNotes,
  products,
}: {
  client: number | undefined;
  invoiceNumber: string;
  terms: string;
  customerNotes: string;
  thankYouNotes: string;
  products: Product[];
}) => {
  const { address } = useAccount();

  const { mutate, isPending, isSuccess, isError } = useCreate(
    upsertCreateNewInvoice
  );

  const handleSubmit = async () => {
    if (!address || !client) return;

    const total = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    const data = {
      wallet: address?.toString(),
      clientId: client,
      customerNotes,
      thankYouNotes,
      category: "Unpaid",
      terms,
      invoiceNumber,
      total,
      subTotal: total,
      products,
    };

    // @ts-ignore
    mutate(data as Invoice);
  };

  return (
    <Button
      onClick={handleSubmit}
      disabled={isPending}
      className="rounded-full flex items-center justify-center bg-blue-400 size-12 text-white mr-4 "
      variant="ghost"
    >
      {isPending ? <Loader size={20} /> : <Save size={20} />}
    </Button>
  );
};

export default SaveButton;
