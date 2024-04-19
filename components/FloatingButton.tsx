import React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  FileCheck,
  Mail,
  Plus,
  Printer,
  Share2,
  Trash2,
  X,
} from "lucide-react";

const FloatingButton = ({ Icon }: { Icon: any }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="text-white bg-green-500 fixed bottom-4 right-4 size-12 shadow-md z-50 rounded-full"
          variant="ghost"
        >
          <Icon size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto ">
          <div className="pb-0">
            <div className="flex flex-col py-4 gap-y-6">
              <div className="flex flex-row items-center gap-x-3">
                <FileCheck size={24} className="text-neutral-600" />
                <h1 className="text-green-600">Mark as paid</h1>
              </div>

              <div className="flex flex-row items-center gap-x-3">
                <Mail size={24} className="text-neutral-600" />
                <h1 className="text-green-600">Send Email</h1>
              </div>

              <div className="flex flex-row items-center gap-x-3">
                <Share2 size={24} className="text-neutral-600" />
                <h1 className="text-green-600">Share PDF File</h1>
              </div>

              <div className="flex flex-row items-center gap-x-3">
                <Printer size={24} className="text-neutral-600" />
                <h1 className="text-green-600">Print</h1>
              </div>

              <div className="flex flex-row items-center gap-x-3">
                <Trash2 size={24} className="text-neutral-600" />
                <h1 className="text-green-600">Delete</h1>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FloatingButton;
