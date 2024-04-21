import { InvoiceEnum, InvoiceT } from "@/types";
import { Invoice } from "@prisma/client";
import Link from "next/link";
import React from "react";

const InvoiceCard = ({ invoice }: { invoice: Invoice }) => {
  const category = invoice.category;

  const btnTextColor =
    category === InvoiceEnum.Unpaid
      ? "text-green-600"
      : category === InvoiceEnum.Paid
      ? "text-green-600"
      : category === InvoiceEnum.Partially
      ? "text-orange-600"
      : "text-red-600";

  const btnBgColor =
    category === InvoiceEnum.Unpaid
      ? "bg-green-100"
      : category === InvoiceEnum.Paid
      ? "bg-green-100"
      : category === InvoiceEnum.Partially
      ? "bg-orange-100"
      : "bg-red-100";
  return (
    <Link href={`/invoice/edit/${invoice.id}`}>
      <div className="flex justify-between my-5 items-center p-4 bg-white rounded-lg shadow-sm ">
        <div className="flex flex-1 flex-col gap-y-1">
          <div className="">
            {/* @ts-ignore */}
            <h1>{invoice.client.name}</h1>
          </div>
          <div className="text-xs text-neutral-400">
            <p>#{invoice.invoiceNumber}</p>
          </div>
          <div className="text-xs text-neutral-400">24/10/2024</div>
        </div>

        <div className="">
          <div className="text-lg ">
            <h1>${invoice.total}</h1>
          </div>
          <h1
            className={`text-xs my-1 ${btnBgColor} flex items-center justify-center p-1 rounded-full ${btnTextColor} font-medium`}
          >
            {category}
          </h1>
          <div className="text-xs text-right">
            <p className="text-neutral-400">Due in 7 days</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InvoiceCard;
