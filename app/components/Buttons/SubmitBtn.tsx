import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import React from "react";

const SubmitBtn = ({ title }: { title: string }) => {
  return (
    <Button
      className="w-full bg-green-500 text-white my-2 flex flex-row items-center gap-x-2"
      variant="ghost"
    >
      {title}
      <SendHorizonal size={18} />
    </Button>
  );
};

export default SubmitBtn;
