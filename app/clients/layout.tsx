import BottomTabs from "@/components/bottom-tabs";
import React, { ReactNode } from "react";
import ClientsHeader from "./clients-header";
import ParentFloatingButton from "../components/ParentFloatingButton";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <ClientsHeader />

      <main className="mt-28 p-4">{children}</main>

      <ParentFloatingButton link="client/new" />
      <BottomTabs active="user" />
    </div>
  );
};

export default UserLayout;
