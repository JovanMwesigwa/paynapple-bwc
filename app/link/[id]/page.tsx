"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { SelectAsset } from "@/app/components/SelectAsset";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { payLinks } from "@/data";
import { useParams } from "next/navigation";
import useFetchOne from "@/app/hooks/useFetch";
import {
  upsertGetPayLinkById,
  upsertUpdatePayLink,
} from "@/app/actions/paylinks";
import useUpdate from "@/app/hooks/useUpdate";
import { PayLink } from "@prisma/client";

type Inputs = {
  title: string;
  amount: number;
  description: string;
};

const EditPayLinkPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchOne(
    upsertGetPayLinkById,
    Number(id),
    "getPayLinkById"
  );

  const { mutate, isPending, isError } = useUpdate(
    upsertUpdatePayLink,
    Number(id)
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const payLinkData = {
      title: formData.title,
      amount: Number(formData.amount),
      description: formData.description,
      asset: data.asset,
      fixed: data.fixed,
      wallet: data.wallet,
      status: data.status,
      url: data.url,
    };

    await mutate(payLinkData as PayLink);
  };

  if (!data) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      {/* Header */}
      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Title</Label>

        <div className="w-full relative ">
          <Input
            type="text"
            className="outline-none"
            defaultValue={data.title}
            placeholder="Give your link a title"
            {...register("title")}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <Label className="text-sm ">Pay Currency</Label>
        <SelectAsset asset={data.asset} />
      </div>

      <div className="flex flex-col w-full gap-y-1">
        <Label className="text-sm ">Price</Label>

        <div className="w-full relative ">
          <Input
            type="number"
            defaultValue={data.amount}
            className="outline-none"
            placeholder="0.0"
            {...register("amount")}
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
            defaultValue={data.description}
            className="outline-none"
            placeholder="Optional"
            {...register("description")}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          defaultValue={data.fixed}
          checked={data.fixed}
          id="fixedrate"
        />
        <label
          htmlFor="fixedrate"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Fixed Rate
        </label>
      </div>

      <SubmitBtn loading={isPending} title="Update Payment Link" />
    </form>
  );
};

export default EditPayLinkPage;
