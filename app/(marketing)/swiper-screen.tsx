"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import PaynappleLogo from "../components/PaynappleLogo";

const SwiperScreen = ({
  btn,
  title,
  subTilte,
}: {
  btn?: boolean;
  title: string;
  subTilte: string;
}) => {
  const { isConnected } = useAccount();

  const router = useRouter();

  // Navigate to the dashboard if the user is already connected

  if (isConnected) {
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col  justify-center text-white  h-full py-5">
      <PaynappleLogo />

      <div className="flex flex-1 flex-col px-4 py-4">
        <div className="flex flex-1"></div>

        <div className="flex flex-col ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{subTilte}</p>
        </div>
      </div>

      <div className="flex flex-row w-full items-center justify-center mt-3 px-4">
        {btn ? (
          // <Link
          //   href="/dashboard"
          //   className="w-full bg-red-500 flex flex-row gap-x-2 rounded-md  items-center justify-center p-2"
          // >
          //   Connect Wallet
          //   <Wallet size={18} />
          // </Link>
          <div className="w-full flex flex-row gap-x-2 items-center justify-evenly italic">
            {isConnected ? (
              <>
                Sign In 👉
                <ConnectButton />
              </>
            ) : (
              <>
                Connect your wallet 👉
                <ConnectButton />
              </>
            )}
          </div>
        ) : (
          <div className="w-full flex flex-row gap-x-2 items-center justify-end italic">
            Swipe to continue 👉
            <ArrowRight size={18} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SwiperScreen;
