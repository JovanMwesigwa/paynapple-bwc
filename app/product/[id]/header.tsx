"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ProductHeader = () => {
  const router = useRouter();
  return (
    <nav className="w-full flex-row items-center justify-between flex text-base font-medium px-3 h-12 bg-neutral-100">
      <div onClick={() => router.back()} className="cursor-pointer">
        <ChevronLeft size={25} />
      </div>

      <h1>Edit Product</h1>

      <Button className="text-green-500 " variant="ghost">
        Save
      </Button>
    </nav>
  );
};

export default ProductHeader;
