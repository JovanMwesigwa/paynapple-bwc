import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const LinksHeader = () => {
  return (
    <nav className="w-full h-24 mb-3 flex flex-col py-3 justify-between fixed top-0 left-0 right-0 px-4 bg-white">
      <h1 className="font-bold text-lg">Payment Links</h1>

      <div className="flex w-full relative">
        <Search
          size={20}
          className=" text-neutral-500 absolute bottom-3 left-2 cursor-pointer"
        />
        <Input
          placeholder="Search for payment link"
          className="mt-4 bg-neutral-200 border-none p-4 h-11 rounded-sm px-10 outline-none"
        />
      </div>
    </nav>
  );
};

export default LinksHeader;
