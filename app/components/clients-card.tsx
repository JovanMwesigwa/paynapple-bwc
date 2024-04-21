import { Separator } from "@/components/ui/separator";
import { Client } from "@prisma/client";
import { GripVertical } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ClientCard = ({
  client,
  setClient,
}: {
  client: Client;
  setClient?: any;
}) => {
  const router = useRouter();

  const handleClientClick = () => {
    if (setClient) {
      setClient(client);
      return;
    }

    router.push(`/client/${client.id}`);
  };

  return (
    <>
      <div
        onClick={handleClientClick}
        className="w-full flex flex-row my-4 cursor-pointer justify-between gap-x-6"
      >
        <div className="size-12 flex items-center justify-center rounded-full bg-neutral-100 text-green-500 font-medium text-2xl">
          <h1>{client.name.charAt(0).toUpperCase()}</h1>
        </div>
        <div className="flex flex-1 flex-col ">
          <h1 className="text-base font-medium">{client.name}</h1>
          <p className="text-xs font-light">{client.email}</p>
          <p className="text-xs font-light">{client.phone}</p>
        </div>
        <div className="">
          <GripVertical size={20} className="text-neutral-500 cursor-pointer" />
        </div>
      </div>

      <Separator />
    </>
  );
};

export default ClientCard;
