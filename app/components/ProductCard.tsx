"use client";

import { ProductT } from "@/types";
import { Product } from "@prisma/client";
import React from "react";

const ProductCard = ({
  product,
  setProducts,
}: {
  product: Product | ProductT;
  setProducts?: any;
}) => {
  return (
    <div
      onClick={() => setProducts(product)}
      className="flex flex-row w-full justify-between h-16 cursor-pointer "
    >
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
