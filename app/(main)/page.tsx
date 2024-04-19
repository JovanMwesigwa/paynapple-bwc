import { Button } from "@/components/ui/button";
import SelectButtons from "../components/SelectButtons";
import SwipeCard from "../components/SwipeCard";
import Invoices from "./Invoices";
import Header from "./header";
import BottomTabs from "../../components/bottom-tabs";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white flex relative flex-1 flex-col overflow-y-auto">
      <Header />
      <div className="p-4 flex flex-1 flex-col overflow-y-auto h-full mt-5">
        <div className="mt-4 grid grid-cols-3 gap-4 h-20">
          <SwipeCard color="bg-blue-100" amount={30000} count={2} top="All" />

          <SwipeCard
            color="bg-green-100"
            amount={20000}
            count={1}
            top="Unpaid"
          />

          <SwipeCard
            color="bg-orange-100"
            amount={0.0}
            count={0}
            top="Partially"
          />
        </div>

        <SelectButtons />

        <Invoices />
      </div>

      <Link href="/invoice">
        <Button
          variant="ghost"
          className="fixed bottom-16 right-5 bg-green-600 rounded-full size-12 text-white"
        >
          <Plus size={18} />
        </Button>
      </Link>
      <BottomTabs />
    </div>
  );
}
