"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { upsertGetAllClients } from "@/app/actions/clients";
import useFetchAll from "@/app/hooks/useFetchAll";
import { Client } from "@prisma/client";
import { PlusIcon, X } from "lucide-react";
import ClientCard from "../clients-card";
import { useState } from "react";
import { ClientT } from "@/types";

const ClientsDrawer = ({
  setClient,
  client,
}: {
  setClient: any;
  client: Client | null | ClientT;
}) => {
  const [open, setOpen] = useState(false);

  const { data, isLoading, error } = useFetchAll(
    upsertGetAllClients,
    "getAllClients"
  );

  const handleClientClick = (client: Client) => {
    setClient(client);
    setOpen(false);
  };

  if (!data) return null;

  return (
    <Drawer open={open}>
      <DrawerTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          className="flex cursor-pointer flex-row items-center justify-center gap-x-2"
        >
          <PlusIcon size={20} className="text-green-500" />
          <h1 className="font-light text-sm">
            {" "}
            {client ? "EDIT" : "ADD"} CLIENT
          </h1>
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex pb-4 w-full items-center justify-between">
              <div className=""></div>
              <p>Select a client </p>
              <div
                onClick={() => setOpen(false)}
                className="cursor-pointer text-neutral-500"
              >
                <X size={25} />
              </div>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="p-4 h-[450px]">
          {data.map((client: Client) => (
            <ClientCard
              key={client.id}
              client={client}
              setClient={handleClientClick}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ClientsDrawer;
