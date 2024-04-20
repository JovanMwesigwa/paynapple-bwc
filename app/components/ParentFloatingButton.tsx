import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const ParentFloatingButton = ({ link }: { link: string }) => {
  return (
    <Link href={`/${link}`}>
      <Button
        variant="ghost"
        className="fixed bottom-16 right-5 bg-green-600 rounded-full size-12 text-white"
      >
        <Plus size={18} />
      </Button>
    </Link>
  );
};

export default ParentFloatingButton;
