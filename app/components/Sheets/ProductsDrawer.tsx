"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { upsertGetAllProducts } from "@/app/actions/products";
import useFetchAll from "@/app/hooks/useFetchAll";
import { Product } from "@prisma/client";
import { PlusIcon, X } from "lucide-react";
import { useState } from "react";
import ProductCard from "../ProductCard";

const ProductsDrawer = ({
  products,
  setProducts,
}: {
  products: Product[];
  setProducts: any;
}) => {
  const [open, setOpen] = useState(false);

  const { data, isLoading, isError } = useFetchAll(
    upsertGetAllProducts,
    "products"
  );

  if (!data) return null;

  const selectedProducts = data ? data : products;

  const selectProducts = (product: Product) => {
    setProducts((prev: Product[]) => [...prev, product]);
    setOpen(false);
  };

  return (
    <Drawer open={open}>
      <DrawerTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          className="flex cursor-pointer flex-row items-center justify-center gap-x-2"
        >
          <PlusIcon size={20} className="text-green-500" />
          <h1 className="font-light text-sm">
            {" "}
            {/* {client ? "EDIT" : "ADD"} CLIENT */}
            ADD ITEM
          </h1>
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex pb-4 w-full items-center justify-between">
              <div className=""></div>
              <p>Select a product </p>
              <div
                onClick={() => setOpen(false)}
                className="cursor-pointer text-neutral-500"
              >
                <X size={25} />
              </div>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="p-4 h-[500px]">
          {selectedProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              setProducts={selectProducts}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductsDrawer;
