import { ClientT } from "@/types";
import React from "react";

const ClientCard = ({
  client,
  invoiceNumber,
}: {
  client: ClientT;
  invoiceNumber?: number | string;
}) => {
  return (
    <>
      <div className="w-full mb-2 flex flex-row text-xs font-light text-neutral-600 items-center justify-between">
        <h1>BILL TO</h1>
        <h1>INVOICE INFO</h1>
      </div>

      <div className="w-full flex flex-row text-sm items-center justify-between">
        <h1>{client.name}</h1>
        <h1>#{invoiceNumber}</h1>
      </div>

      <div className="w-full flex flex-row text-xs items-center justify-between">
        <h1>{client.email}</h1>
        <h1>Date: 04/18/2024</h1>
      </div>

      <div className="w-full flex flex-row text-xs items-center justify-between">
        <h1>{client.phone}</h1>
        <h1>Due date: 04/25/2024</h1>
      </div>
    </>
  );
};

export default ClientCard;
