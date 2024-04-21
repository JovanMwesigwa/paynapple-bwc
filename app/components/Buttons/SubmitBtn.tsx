import { Button } from "@/components/ui/button";
import { Loader, SendHorizonal } from "lucide-react";
import React from "react";

const SubmitBtn = ({ title, loading }: { title: string; loading: boolean }) => {
  return (
    <Button
      type="submit"
      className="w-full bg-green-500 text-white my-2 flex flex-row items-center gap-x-2"
      variant="ghost"
    >
      {loading ? (
        <Loader size={18} />
      ) : (
        <>
          {title}
          <SendHorizonal size={18} />
        </>
      )}
    </Button>
  );
};

export default SubmitBtn;
