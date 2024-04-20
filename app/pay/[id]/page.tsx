"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { SelectAsset } from "@/app/components/SelectAsset";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import PayLinkHeader from "../pay-link-header";
import { useParams } from "next/navigation";
import { payLinks } from "@/data";

const PaylinkPage = () => {
  const { id } = useParams();

  const payLink = payLinks.find((link) => link.id === id);

  if (!payLink)
    return (
      <div className="flex flex-1 items-center justify-center h-screen text-neutral-300 font-bold">
        Link not found
      </div>
    );

  return (
    <div className="flex flex-1 h-screen p-4 bg-neutral-100 flex-col ">
      <PayLinkHeader />

      {/* Pay info */}
      <div className="w-full flex-col shadow-sm flex rounded-sm bg-white p-4 mb-6">
        <h1 className="text-neutral-400 font-medium">Send deposit</h1>

        <SelectAsset asset={payLink.asset} />

        <div className="flex flex-col my-4 gap-y-2">
          <p className="text-xs text-neutral-400 font-medium">Amount to pay</p>

          <div className="flex flex-row items-center gap-x-2">
            <div className="size-6 bg-green-500 rounded-full relative">
              <Image src="/cusd.png" fill alt="Asset" />
            </div>
            <h1>${payLink.amount}</h1>
          </div>
        </div>
      </div>

      {/* More info */}
      <Collapsible>
        <div className="w-full flex-col mb-5 shadow-sm cursor-pointer flex rounded-sm bg-white p-4">
          <CollapsibleTrigger>
            <div className="flex flex-row items-center justify-between">
              <h1>More details</h1>

              <ChevronDown size={18} />
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="flex">
              <p className="text-xs text-neutral-500">{payLink.description}</p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>

      <SubmitBtn title="Pay" />
    </div>
  );
};

export default PaylinkPage;
