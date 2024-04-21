"use client";

import { Products } from "@/data";
import InnerProductCard from "../components/product-card";
import useFetchAll from "../hooks/useFetchAll";
import { upsertGetAllProducts } from "../actions/products";
import { Product } from "@prisma/client";

const AllProductsPage = () => {
  const { data, isLoading, isError } = useFetchAll(
    upsertGetAllProducts,
    "products"
  );

  if (!data) return null;

  return (
    <div className="flex flex-col gap-y-6">
      {data.map((product: Product) => (
        <InnerProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProductsPage;
