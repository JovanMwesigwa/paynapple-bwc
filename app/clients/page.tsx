import React from "react";
import ClientCard from "./clients-card";
import { clients } from "@/data";

const ClientsPage = () => {
  return (
    <div>
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
};

export default ClientsPage;
