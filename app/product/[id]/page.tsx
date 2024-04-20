"use client";

import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Products } from "@/data";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();

  const product = Products.find((product) => product.id === id);

  return (
    <div className="py-4 flex flex-col gap-y-4">
      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Product name</Label>
        <Input
          value={product?.name}
          className="w-full rounded-sm my-1 border outline-none"
        />
      </div>

      <div className="w-full flex flex-row justify-between gap-x-4">
        <div className="flex flex-col w-full">
          <Label className="text-green-500 font-medium">Price</Label>
          <Input
            value={product?.price}
            className="w-full rounded-sm my-1 border outline-none"
          />
        </div>

        <div className="flex flex-col">
          <Label className="text-green-500 font-medium">Unit</Label>
          <Input
            value={product?.quantity}
            className="w-full rounded-sm my-1 border outline-none"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-between">
        <Label className="text-green-500 font-medium">Category</Label>
        <Input
          className="w-full rounded-sm my-1 border outline-none"
          value="Service"
          disabled
        />
      </div>

      <div className="w-full flex flex-col justify-between">
        <Textarea
          className="w-full rounded-sm my-1 border outline-none h-20"
          placeholder="Notes"
          value={product?.description}
        />
      </div>

      <SubmitBtn title="Create Product" />
    </div>
  );
};

export default ProductDetails;
