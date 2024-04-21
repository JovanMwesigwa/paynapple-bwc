"use client";

import { Loader } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useAccount } from "wagmi";

const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const { isConnected, isDisconnected, isReconnecting, isConnecting } =
    useAccount();
  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (isDisconnected) {
      // Redirect to home only if not already there
      // if (pathname !== "/") {
      //   router.push("/");
      //   router.refresh();
      // }
    } else if (!isConnected) {
      // Redirect to dashboard only if not already there
      // if (pathname !== "/dashboard") {
      //   router.push("/dashboard");
      //   router.refresh();
      // }
    }
  }, [isConnected, isDisconnected, router]);

  if (isReconnecting || isConnecting) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Loader />
      </div>
    );
  }

  // Render children if connected
  if (isConnected) {
    return <>{children}</>;
  }

  // Display nothing or loading screen while routing
  return <>{children}</>;
};

export default AuthMiddleware;
