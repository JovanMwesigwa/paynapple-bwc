"use client";

import EditPreviewInvoicepdf from "@/app/(invoice)/components/EditPreviewpdf";
import SaveButton from "@/app/(invoice)/components/SaveButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvoiceT } from "@/types";
import { Client, Product } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EditInvoice from "../../../components/EditInvoice";

export function TabsComponent({ invoice }: { invoice: InvoiceT }) {
  const [client, setClient] = useState<Client | null>(null);

  const [products, setProducts] = useState<Product[] | []>([]);

  const [generatedInvoiceNumber, setGeneratedInvoiceNumber] = useState<string>(
    `INV-${Math.floor(1000 + Math.random() * 9000).toString()}`
  );

  const [terms, setTerms] = useState<string>(
    "Payment should be made within 30 days"
  );

  const [customerNotes, setCustomerNotes] = useState<string>(
    "Please make payments on time"
  );

  const [thankYouNotes, setThankYouNotes] = useState<string>(
    "Thank you for your business"
  );

  const router = useRouter();

  return (
    <Tabs defaultValue="edit" className="w-full">
      <TabsList className="flex flex-row px-4 w-full h-14 items-center  justify-between">
        <div
          onClick={() => router.back()}
          className="flex flex-row items-center flex-1 gap-x-2 text-sm cursor-pointer font-medium"
        >
          <ArrowLeft size={20} />
          <h1>Invoice</h1>
        </div>

        <div className="flex flex-row ">
          <TabsTrigger value="edit" className="text-xs">
            Edit
          </TabsTrigger>
          <TabsTrigger value="preview" className="text-xs ">
            Preview
          </TabsTrigger>
        </div>
      </TabsList>

      {/* Edit */}
      <TabsContent value="edit" className="p-4">
        <EditInvoice
          invoice={invoice}
          client={client}
          setClient={setClient}
          products={products}
          setProducts={setProducts}
          terms={terms}
          customerNotes={customerNotes}
          thankYouNotes={thankYouNotes}
          invoiceNumber={generatedInvoiceNumber}
        />
      </TabsContent>

      {/* Preview */}
      <TabsContent value="preview" className="p-4">
        <div className="h-screen relative">
          {/* <PreviewInvoicepdf invoice={invoice} /> */}

          <EditPreviewInvoicepdf
            invoice={invoice}
            products={products}
            client={client}
            terms={terms}
            customerNotes={customerNotes}
            thankYouNotes={thankYouNotes}
            invoiceNumber={generatedInvoiceNumber}
          />

          <div className="flex w-full flex-row fixed h-16 bottom-0 justify-end right-0 z-20 left-0 px-4">
            {/* <ShareDrawer invoiceID={invoice.id} />

            <DownloadInvoice invoice={invoice} /> */}

            <SaveButton
              client={client?.id}
              invoiceNumber={generatedInvoiceNumber}
              terms={terms}
              customerNotes={customerNotes}
              thankYouNotes={thankYouNotes}
              products={products}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
