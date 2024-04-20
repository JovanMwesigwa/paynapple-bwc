"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { PayLinkT } from "@/types";
import { ChevronsUpDown, Pen } from "lucide-react";
import Link from "next/link";
import { ShareLinkDrawer } from "../components/Sheets/ShareLinkDrawer";

const PayLinkCard = ({ item }: { item: PayLinkT }) => {
  return (
    <>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="w-full flex cursor-pointer flex-row  justify-between">
            <div className="flex flex-1 flex-col">
              <h1 className="font-medium">{item.title}</h1>
              <p className="text-xs text-neutral-400">{item.url}</p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">${item.amount}</p>
                <p className="text-xs text-neutral-400">{item.asset}</p>
              </div>

              <div className="pl-2 cursor-pointer">
                <ChevronsUpDown className="size-4 text-neutral-500" />
              </div>
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex pt-4 flex-col gap-y-2 justify-center">
            <Link href={`/link/${1}`}>
              <div className="flex flex-row items-center gap-x-2">
                <div className="size-5 bg-blue-500 flex items-center justify-center rounded-full">
                  <Pen className="size-2 text-white " />
                </div>
                <p className="text-xs text-neutral-500 ">Edit link</p>
              </div>
            </Link>

            <ShareLinkDrawer link={item} />
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
    </>
  );
};

export default PayLinkCard;
