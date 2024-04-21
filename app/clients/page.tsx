"use client";

import { Client } from "@prisma/client";
import { upsertGetAllClients } from "../actions/clients";
import useFetchAll from "../hooks/useFetchAll";
import ClientCard from "../components/clients-card";

const ClientsPage = () => {
  const { data, isLoading, error } = useFetchAll(
    upsertGetAllClients,
    "getAllClients"
  );

  if (!data) return null;

  return (
    <div>
      {data.map((client: Client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
};

export default ClientsPage;
