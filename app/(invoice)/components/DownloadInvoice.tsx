"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import PreviewInvoicepdf from "./PreviewInvoicepdf";
import { ReactNode } from "react";
import { InvoiceT } from "@/types";

const DownloadInvoice = ({ invoice }: { invoice: InvoiceT }) => {
  return (
    <PDFDownloadLink
      document={<PreviewInvoicepdf invoice={invoice} />}
      fileName="invoice.pdf"
    >
      <div className="rounded-full flex items-center justify-center bg-blue-400 size-12 text-white mr-4 ">
        <Download size={20} />
      </div>
    </PDFDownloadLink>
  );
};

export default DownloadInvoice;
