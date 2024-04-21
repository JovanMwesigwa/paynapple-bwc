"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAccount } from "wagmi";
import useCreate from "@/app/hooks/useCreate";
import { upsertProduct } from "@/app/actions/products";
import { Product } from "@prisma/client";

type Inputs = {
  name: string;
  price: number;
  unit: string;
  category: string;
  notes: string;
};

const ProductDetails = () => {
  const { address } = useAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate, data, isError, isPending, isSuccess } =
    useCreate(upsertProduct);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!address) return;

    // const generatedId = Math.random().toString(36).substring(7).toUpperCase(); // to be used later

    const product = {
      wallet: address.toString(),
      name: data.name,
      price: Number(data.price),
      quantity: Number(data.unit),
      description: data.notes,
    };

    await mutate(product as Product);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 flex flex-col gap-y-4"
    >
      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Product name</Label>
        <Input
          {...register("name", { required: true })}
          className="w-full rounded-sm my-1 border outline-none"
        />
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full">
          <Label className="text-green-500 font-medium">Price</Label>
          <Input
            {...register("price", { required: true })}
            className="w-full rounded-sm my-1 border outline-none"
          />
        </div>

        <div className="flex flex-col">
          <Label className="text-green-500 font-medium">Unit</Label>
          <Input
            {...register("unit")}
            className="w-full rounded-sm my-1 border outline-none"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Category</Label>
        <Input
          {...register("category")}
          defaultValue="Service"
          className="w-full rounded-sm my-1 border outline-none"
          disabled
        />
      </div>

      <div className="w-full flex flex-col justify-between">
        <Textarea
          {...register("notes")}
          className="w-full rounded-sm my-1 border outline-none h-20"
          placeholder="Notes"
        />
      </div>

      <SubmitBtn loading={isPending} title="Create Product" />
    </form>
  );
};

export default ProductDetails;
