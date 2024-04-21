import { Separator } from "@/components/ui/separator";
import { ProductT } from "@/types";
import { Product } from "@prisma/client";
import { GripVertical } from "lucide-react";
import Link from "next/link";
import React from "react";

const InnerProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="flex cursor-pointer text-base font-medium flex-row items-center justify-between "
      >
        <div className="flex flex-col">
          <h1>{product.name}</h1>
          <p className="text-[11px] text-neutral-400">{product.id}</p>
        </div>

        <div className="flex flex-row items-center gap-x-2">
          <h1>${product.price}</h1>
          <GripVertical size={20} className="cursor-pointer text-neutral-500" />
        </div>
      </Link>

      <Separator />
    </>
  );
};

export default InnerProductCard;
