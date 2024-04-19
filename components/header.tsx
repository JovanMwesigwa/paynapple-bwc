import { Search } from "lucide-react";
import React from "react";

const MainHeader = () => {
  return (
    <nav className="w-full h-12 mb-3 flex flex-row items-center justify-between fixed top-0 left-0 right-0 px-4 bg-white">
      <h1 className="font-bold text-lg">Invoices</h1>
      <Search size={20} className="text-green-500 cursor-pointer" />
    </nav>
  );
};

export default MainHeader;
