"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { SelectAsset } from "@/app/components/SelectAsset";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { AssetsEnum, PayLink } from "@prisma/client";
import useCreate from "@/app/hooks/useCreate";
import { upsertCreateNewPayLink } from "@/app/actions/paylinks";
import { useAccount } from "wagmi";

type Inputs = {
  name: string;
  amount: number;
  notes: string;
};

const NewPayLinkPage = () => {
  const [selectedAsset, setSelectedAsset] = useState<AssetsEnum | undefined>(
    "cUSD"
  );

  const { address } = useAccount();

  const { mutate, isPending, isSuccess, error } = useCreate(
    upsertCreateNewPayLink
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!address) return;

    const payLinkData = {
      wallet: address.toString(),
      title: data.name,
      asset: selectedAsset,
      amount: Number(data.amount),
      status: "active",
      fixed: true,
      url: "https://example.com",
      description: data.notes,
    };

    await mutate(payLinkData as PayLink);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      {/* Header */}
      <div className="w-full relative ">
        <Label className="text-sm ">Link name</Label>
        <Input
          className="outline-none"
          placeholder="Enter a link name..."
          {...register("name", { required: true })}
        />
      </div>

      <div className="flex flex-col w-full">
        <Label className="text-sm ">Pay Currency</Label>
        <SelectAsset setSelectedAsset={setSelectedAsset} />
      </div>

      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Price</Label>

        <div className="w-full relative ">
          <Input
            type="number"
            className="outline-none"
            placeholder="0.0"
            {...register("amount", { required: true })}
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
            className="outline-none"
            placeholder="Optional"
            {...register("notes")}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox defaultChecked id="fixedrate" />
        <label
          htmlFor="fixedrate"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Fixed Rate
        </label>
      </div>

      <SubmitBtn loading={isPending} title="Create Payment Link" />
    </form>
  );
};

export default NewPayLinkPage;
