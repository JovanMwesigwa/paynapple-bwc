"use client";

import { CeloContract, newKitFromWeb3 } from "@celo/contractkit";
import Web3 from "web3";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { upsertGetPayLinkById } from "@/app/actions/paylinks";
import { SelectAsset } from "@/app/components/SelectAsset";
import useFetchOne from "@/app/hooks/useFetch";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { ChevronDown, Loader, SendHorizonal } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import PayLinkHeader from "../pay-link-header";

const PaylinkPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const { data, isLoading, isError } = useFetchOne(
    upsertGetPayLinkById,
    Number(id),
    "getPayLink"
  );

  const pay = async () => {
    setLoading(true);
    try {
      const web3 = new Web3(window.ethereum);

      const kit = newKitFromWeb3(web3 as any);

      let accounts = await kit.web3.eth.getAccounts();
      kit.defaultAccount = accounts[0];
      // paid gas in cUSD
      await kit.setFeeCurrency(CeloContract.StableToken);

      const parsedAmount = await ethers.utils.parseEther(
        data.amount.toString()
      );

      const amount_ = parsedAmount.toString();

      let cUSDcontract = await kit.contracts.getStableToken();

      let cUSDtx = await cUSDcontract.transfer(data.wallet.toString(), amount_);

      let cUSDreceipt = await cUSDtx.sendAndWaitForReceipt();

      if (cUSDreceipt.status) {
        toast("Invoice paid successfully paid 🎉");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-1 items-center justify-center h-screen text-neutral-300 font-bold">
        <Loader size={16} />
      </div>
    );

  if (!data)
    return (
      <div className="flex flex-1 items-center justify-center h-screen text-neutral-300 font-bold">
        Link not found
      </div>
    );

  return (
    <div className="flex flex-1 h-screen p-4 bg-neutral-100 flex-col ">
      <PayLinkHeader title={data.title} />

      {/* Pay info */}
      <div className="w-full flex-col shadow-sm flex rounded-sm bg-white p-4 mb-6">
        <h1 className="text-neutral-400 font-medium">Send deposit</h1>

        <SelectAsset asset={data.asset} />

        <div className="flex flex-col my-4 gap-y-2">
          <p className="text-xs text-neutral-400 font-medium">Amount to pay</p>

          <div className="flex flex-row items-center gap-x-2">
            <div className="size-6 bg-green-500 rounded-full relative">
              <Image src="/cusd.png" fill alt="Asset" />
            </div>
            <h1>${data.amount}</h1>
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
              <p className="text-xs text-neutral-500">{data.description}</p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>

      <Button
        onClick={pay}
        className="w-full bg-green-500 text-white my-2 flex flex-row items-center gap-x-2"
        variant="ghost"
      >
        {isLoading || loading ? (
          <Loader size={18} />
        ) : (
          <>
            Pay
            <SendHorizonal size={18} />
          </>
        )}
      </Button>
    </div>
  );
};

export default PaylinkPage;
