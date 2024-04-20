"use client";

import { Separator } from "@/components/ui/separator";
import { appUrl } from "@/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Pen, Share2 } from "lucide-react";
import { ShareDrawer } from "../components/Sheets/ShareDrawer";
import { ShareLinkDrawer } from "../components/Sheets/ShareLinkDrawer";
import Link from "next/link";

const PayLinkCard = () => {
  return (
    <>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="w-full flex cursor-pointer flex-row  justify-between">
            <div className="flex flex-1 flex-col">
              <h1 className="font-medium">UpWork link</h1>
              <p className="text-xs text-neutral-400">{appUrl}/pay/732539</p>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-medium">$20</p>
                <p className="text-xs text-neutral-400">cUSD</p>
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

            <ShareLinkDrawer linkID="732539" />
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
    </>
  );
};

export default PayLinkCard;
