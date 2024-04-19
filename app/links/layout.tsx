import BottomTabs from "@/components/bottom-tabs";
import React, { ReactNode } from "react";

const LinksLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {children}

      <BottomTabs active="links" />
    </div>
  );
};

export default LinksLayout;
