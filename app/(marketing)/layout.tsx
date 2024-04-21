import React, { ReactNode } from "react";
import AuthMiddleware from "../providers/authmiddleware";

const HomeLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthMiddleware>{children}</AuthMiddleware>
    </div>
  );
};

export default HomeLayoutPage;
