import { ProductT } from "@/types";
import React from "react";

const ProductCard = ({ product }: { product: ProductT }) => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col">
        <h1 className="font-medium text-md">{product.name}</h1>
        <p className="text-sm font-light text-neutral-600">
          ${product.price} x {product.quantity}hrs
        </p>
      </div>
      <div className="">
        <h1 className="font-medium text-md">
          ${product.price * product.quantity}
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;
