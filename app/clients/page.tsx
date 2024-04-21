"use client";

import React from "react";
import ClientCard from "./clients-card";
import { clients } from "@/data";
import useFetchAll from "../hooks/useFetchAll";
import { upsertGetAllClients } from "../actions/clients";
import { Client } from "@prisma/client";

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
