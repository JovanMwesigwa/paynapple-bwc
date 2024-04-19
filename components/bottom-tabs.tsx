"use client";

import { Link as LucideLink, PackageOpen, Receipt, User } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const BottomTabs = ({
  active,
}: {
  active: "home" | "products" | "links" | "user";
}) => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex flex-row border-t shadow-md">
      <Button
        variant="ghost"
        onClick={() => router.push("/")}
        className={`flex-1 flex hover:bg-white hover:text-green-500  items-center justify-center flex-col  ${
          active === "home" ? " text-green-600" : "text-neutral-400"
        } w-full cursor-pointer`}
      >
        <Receipt className="" size={24} />
        {/* <p className="text-[10px]">Invoices</p> */}
      </Button>

      <Button
        variant="ghost"
        onClick={() => router.push("/products")}
        className={`flex-1 flex hover:bg-white hover:text-green-500  items-center justify-center flex-col  ${
          active === "products" ? " text-green-600" : "text-neutral-400"
        } w-full cursor-pointer`}
      >
        <PackageOpen className="" size={24} />
        {/* <p className="text-[10px]">Items</p> */}
      </Button>

      <Button
        variant="ghost"
        onClick={() => router.push("/links")}
        className={`flex-1 flex hover:bg-white hover:text-green-500  items-center justify-center flex-col  ${
          active === "links" ? " text-green-600" : "text-neutral-400"
        } w-full cursor-pointer`}
      >
        <LucideLink className="" size={24} />
        {/* <p className="text-[10px]">Pay links</p> */}
      </Button>

      <Button
        variant="ghost"
        onClick={() => router.push("/clients")}
        className={`flex-1 flex hover:bg-white hover:text-green-500  items-center justify-center flex-col  ${
          active === "user" ? " text-green-600" : "text-neutral-400"
        } w-full cursor-pointer`}
      >
        <User className="" size={24} />
        {/* <p className="text-[10px] absolute ">Clients</p> */}
      </Button>
    </div>
  );
};

export default BottomTabs;
