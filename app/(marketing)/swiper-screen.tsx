import { Button } from "@/components/ui/button";
import { ArrowRight, SendHorizonal, Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";

const SwiperScreen = ({
  btn,
  title,
  subTilte,
}: {
  btn?: boolean;
  title: string;
  subTilte: string;
}) => {
  return (
    <div className="flex flex-col  justify-center text-white  h-full py-5">
      <div className="flex flex-row items-center gap-x-2 px-4">
        <div className="bg-white rounded-md size-6 flex items-center justify-center">
          <h1 className="self-start text-md font-extrabold ">🍏</h1>
        </div>
        <div className="">
          <h1 className="self-start text-lg font-extrabold ">Paynapple</h1>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        <div className="flex flex-1"></div>

        <div className="flex flex-col ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{subTilte}</p>
        </div>
      </div>

      <div className="flex flex-row w-full items-center justify-center mt-3 px-4">
        {btn ? (
          <Link
            href="/dashboard"
            className="w-full bg-red-500 flex flex-row gap-x-2 rounded-md  items-center justify-center p-2"
          >
            Connect Wallet
            <Wallet size={18} />
          </Link>
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
