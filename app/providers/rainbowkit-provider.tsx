"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from "@rainbow-me/rainbowkit-siwe-next-auth";
import { WagmiProvider } from "wagmi";
import { SessionProvider } from "next-auth/react";
import { celo, celoAlfajores } from "wagmi/chains";
import { authenticationAdapter } from "../actions/authAdapter";

const config = getDefaultConfig({
  appName: "Paynapple",
  projectId: "faa10b60dba554b03ec6b83c995d6aac",
  chains: [celo, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: "Sign in to my RainbowKit app",
});

const RainbowkitProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter}
          status={"authenticated"}
          enabled={true}
        >
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowkitProvider;
