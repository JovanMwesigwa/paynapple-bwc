import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { SelectAsset } from "@/app/components/SelectAsset";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal } from "lucide-react";
import React from "react";

const EditPayLinkPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {/* Header */}
      <div className="flex flex-col w-full">
        <Label className="text-sm ">Pay Currency</Label>
        <SelectAsset />
      </div>

      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Price</Label>

        <div className="w-full relative ">
          <Input type="number" className="outline-none" placeholder="0.0" />

          <div className="absolute right-2 top-2 bg-white">
            <h1>USD</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Order Description</Label>

        <div className="w-full relative">
          <Textarea className="outline-none" placeholder="Optional" />
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
