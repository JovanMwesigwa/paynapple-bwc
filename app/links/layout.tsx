import BottomTabs from "@/components/bottom-tabs";
import React, { ReactNode } from "react";
import ParentFloatingButton from "../components/ParentFloatingButton";

const LinksLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <main className="mt-28 p-4">{children}</main>

      <ParentFloatingButton link="link/new" />

      <BottomTabs active="links" />
    </div>
  );
};

export default LinksLayout;
