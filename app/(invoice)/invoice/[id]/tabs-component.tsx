"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import EditInvoice from "../../components/EditInvoice";

export function TabsComponent() {
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
        <EditInvoice />
      </TabsContent>

      {/* Preview */}
      <TabsContent value="preview" className="p-4">
        <div className="space-y-1">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </TabsContent>
    </Tabs>
  );
}
