"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import {
  upsertGetProductById,
  upsertUpdateProduct,
} from "@/app/actions/products";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import useFetchOne from "@/app/hooks/useFetch";
import useUpdate from "@/app/hooks/useUpdate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "next/navigation";
import { Product } from "@prisma/client";
import { useAccount } from "wagmi";

type Inputs = {
  name: string;
  price: number;
  unit: string;
  category: string;
  notes: string;
};

const ProductDetails = () => {
  const { id } = useParams();

  const { address } = useAccount();

  const { mutate, isPending, isError, isSuccess } = useUpdate(
    upsertUpdateProduct,
    Number(id)
  );

  const { data, isLoading, error } = useFetchOne(
    upsertGetProductById,
    Number(id),
    "getProductById"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

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

  if (!data) return null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 flex flex-col gap-y-4"
    >
      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Product name</Label>
        <Input
          defaultValue={data.name}
          className="w-full rounded-sm my-1 border outline-none"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-xs text-red-500">This field is required</span>
        )}
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full">
          <Label className="text-green-500 font-medium">Price</Label>
          <Input
            defaultValue={data.price}
            className="w-full rounded-sm my-1 border outline-none"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <Label className="text-green-500 font-medium">Unit</Label>
          <Input
            defaultValue={data.quantity}
            className="w-full rounded-sm my-1 border outline-none"
            {...register("unit", { required: true })}
          />
          {errors.unit && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Category</Label>
        <Input
          className="w-full rounded-sm my-1 border outline-none"
          defaultValue={"Service"}
          disabled
          {...register("category")}
        />
        {errors.category && (
          <span className="text-xs text-red-500">This field is required</span>
        )}
      </div>

      <div className="w-full flex flex-col justify-between">
        <Textarea
          className="w-full rounded-sm my-1 border outline-none h-20"
          placeholder="Notes"
          defaultValue={data.description}
          {...register("notes")}
        />
        {errors.notes && (
          <span className="text-xs text-red-500">This field is required</span>
        )}
      </div>

      <SubmitBtn loading={isPending} title="Create Product" />
    </form>
  );
};

export default ProductDetails;
