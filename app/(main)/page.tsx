import BottomTabs from "../../components/bottom-tabs";
import ParentFloatingButton from "../components/ParentFloatingButton";
import SelectButtons from "../components/SelectButtons";
import SwipeCard from "../components/SwipeCard";
import Invoices from "./Invoices";
import Header from "./header";

export default function Home() {
  return (
    <div className="bg-neutral-100 flex relative flex-1 flex-col overflow-y-auto">
      <Header />
      <div className="p-4 flex flex-1 flex-col overflow-y-auto h-full my-12">
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

      <ParentFloatingButton link="invoice" />
      <BottomTabs active="home" />
    </div>
  );
}
