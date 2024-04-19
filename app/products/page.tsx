import { Separator } from "@/components/ui/separator";
import { GripVertical } from "lucide-react";
import React from "react";
import InnerProductCard from "./product-card";
import { Products } from "@/data";

const AllProductsPage = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {Products.map((product) => (
        <InnerProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProductsPage;
