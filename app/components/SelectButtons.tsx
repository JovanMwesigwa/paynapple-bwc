import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

const SelectButtons = () => {
  return (
    <div className="mt-8 flex space-x-2">
      <Button
        className="flex-1 text-xs bg-green-600 p-0 justify-center text-white font-bold rounded-full flex-row items-center"
        variant="ghost"
      >
        <Check className=" mr-1" size={15} />
        All
      </Button>
      <Button
        className="flex-1 bg-neutral-100 text-xs font-medium rounded-full text-neutral-500 p-0"
        variant="ghost"
      >
        Unpaid
      </Button>
      <Button
        className="flex-1 bg-neutral-100 font-medium text-xs rounded-full text-neutral-500 p-0"
        variant="ghost"
      >
        Partially
      </Button>
      <Button
        className="flex-1 bg-neutral-100 font-medium text-xs items-center rounded-full text-neutral-500 p-0"
        variant="ghost"
      >
        Overdue
      </Button>
    </div>
  );
};

export default SelectButtons;
