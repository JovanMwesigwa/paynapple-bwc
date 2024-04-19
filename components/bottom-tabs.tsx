import { Link, PackageOpen, Receipt, User } from "lucide-react";

const BottomTabs = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex flex-row">
      <div className="flex-1 flex  items-center justify-center flex-col  text-green-600 w-full">
        <Receipt className="" size={20} />
        <p className="text-[10px]">Invoices</p>
      </div>
      <div className="flex-1 flex  items-center justify-center flex-col  text-neutral-400 w-full">
        <PackageOpen className="" size={20} />
        <p className="text-[10px]">Items</p>
      </div>
      <div className="flex-1 flex  items-center justify-center flex-col  text-neutral-400 w-full">
        <Link className="" size={20} />
        <p className="text-[10px]">Pay links</p>
      </div>
      <div className="flex-1 flex  items-center justify-center flex-col  text-neutral-400 w-full">
        <User className="" size={20} />
        <p className="text-[10px]">Clients</p>
      </div>
    </div>
  );
};

export default BottomTabs;
