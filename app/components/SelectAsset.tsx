import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { AssetsEnum } from "@/types";

export function SelectAsset({ asset }: { asset: AssetsEnum | undefined }) {
  return (
    <Select>
      <SelectTrigger className="w-full my-2 outline-none">
        <SelectValue placeholder="Select an asset" defaultValue={asset} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>All Currencies</SelectLabel>
          <SelectItem value="cUSD">
            <div className="flex flex-row items-center gap-x-2">
              <div className="size-5 rounded-full bg-green-400 relative">
                <Image src="/cusd.png" layout="fill" alt="cUSD" />
              </div>
              <p>cUSD</p>
            </div>
          </SelectItem>
          <SelectItem value="USDC">
            <div className="flex flex-row items-center gap-x-2">
              <div className="w-6 h-5 rounded-full  relative">
                <Image src="/usdc-celo.png" layout="fill" alt="USDC" />
              </div>
              <p>USDC</p>
            </div>
          </SelectItem>
          <SelectItem value="USDT">
            <div className="flex flex-row items-center gap-x-2">
              <div className="size-5 rounded-full bg-[#009393]"></div>
              <p>USDT</p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
