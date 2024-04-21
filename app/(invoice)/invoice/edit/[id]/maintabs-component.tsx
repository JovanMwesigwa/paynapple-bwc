"use client";

import DownloadInvoice from "@/app/(invoice)/components/DownloadInvoice";
import PreviewInvoicepdf from "@/app/(invoice)/components/PreviewInvoicepdf";
import { ShareDrawer } from "@/app/components/Sheets/ShareDrawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Invoice } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function MainTabsComponent({ invoice }: { invoice: Invoice }) {
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
        <PreviewInvoicepdf invoice={invoice} />
      </TabsContent>

      {/* Preview */}
      <TabsContent value="preview" className="p-4">
        <div className="h-screen relative">
          <PreviewInvoicepdf invoice={invoice} />

          <div className="flex w-full flex-row fixed h-16 bottom-0 justify-end right-0 z-20 left-0 px-4">
            <ShareDrawer invoiceID={invoice.id} />

            <DownloadInvoice invoice={invoice} />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
