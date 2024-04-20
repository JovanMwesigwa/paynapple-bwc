"use client";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { SelectAsset } from "@/app/components/SelectAsset";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { payLinks } from "@/data";
import { useParams } from "next/navigation";

const EditPayLinkPage = () => {
  const { id } = useParams();

  const payLink = payLinks.find((link) => link.id === id);

  return (
    <div className="flex flex-col gap-y-4">
      {/* Header */}
      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Title</Label>

        <div className="w-full relative ">
          <Input
            type="text"
            className="outline-none"
            value={payLink?.title}
            placeholder="Give your link a title"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <Label className="text-sm ">Pay Currency</Label>
        <SelectAsset asset={payLink?.asset} />
      </div>

      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Price</Label>

        <div className="w-full relative ">
          <Input
            type="number"
            value={payLink?.amount}
            className="outline-none"
            placeholder="0.0"
          />

          <div className="absolute right-2 top-2 bg-white">
            <h1>USD</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Order Description</Label>

        <div className="w-full relative">
          <Textarea
            value={payLink?.description}
            className="outline-none"
            placeholder="Optional"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="fixedrate" />
        <label
          htmlFor="fixedrate"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Fixed Rate
        </label>
      </div>

      <SubmitBtn title="Create Payment Link" />
    </div>
  );
};

export default EditPayLinkPage;
