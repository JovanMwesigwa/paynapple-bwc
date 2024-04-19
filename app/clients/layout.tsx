import BottomTabs from "@/components/bottom-tabs";
import React, { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {children}

      <BottomTabs active="user" />
    </div>
  );
};

export default UserLayout;
