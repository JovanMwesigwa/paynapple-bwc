import FloatingButton from "@/components/FloatingButton";
import { Separator } from "@/components/ui/separator";
import {
  AudioWaveform,
  CreditCard,
  Heart,
  MenuIcon,
  PanelBottomOpen,
  Plus,
  PlusIcon,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const EditInvoice = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-4">
      {/* Header */}
      <div className="flex flex-row justify-between h-16 w-full">
        <div className="flex flex-1 flex-col">
          <h1 className="text-base font-bold">Zowie Designs</h1>
          <p className="text-xs text-neutral-400 font-medium">
            zoweidesigns@gmail.com
          </p>
          <p className="text-xs text-neutral-400 font-medium">25670071343434</p>
        </div>
        <div className="size-10 flex items-center justify-center border-green-500 border rounded-md">
          <h1 className="text-2xl">🎨</h1>
        </div>
      </div>

      {/* body */}
      <Separator />

      {/* Bill to */}
      <div className="flex  flex-row w-full mb-3">
        <div className="flex flex-1 flex-col gap-y-1">
          <div className="w-full mb-2 flex flex-row text-xs font-light text-neutral-600 items-center justify-between">
            <h1>BILL TO</h1>
            <h1>INVOICE INFO</h1>
          </div>

          <div className="w-full flex flex-row text-sm items-center justify-between">
            <h1>Mr. James Lineker</h1>
            <h1>#INV0002</h1>
          </div>

          <div className="w-full flex flex-row text-xs items-center justify-between">
            <h1>james.lineker@gmail.com</h1>
            <h1>Date: 04/18/2024</h1>
          </div>

          <div className="w-full flex flex-row text-xs items-center justify-between">
            <h1>25670071717171</h1>
            <h1>Due date: 04/25/2024</h1>
          </div>
        </div>
      </div>

      <Separator />

      {/* Items */}
      <div className="flex flex-col w-full gap-y-4">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h1 className="font-medium text-md">UI/UX Design</h1>
            <p className="text-sm font-light text-neutral-600">$100 x 5hrs</p>
          </div>
          <div className="">
            <h1 className="font-medium text-md">$500.00</h1>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h1 className="font-medium text-md">Front-end</h1>
            <p className="text-sm font-light text-neutral-600">$100 x 5hrs</p>
          </div>
          <div className="">
            <h1 className="font-medium text-md">$800.00</h1>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h1 className="font-medium text-md">Back-end</h1>
            <p className="text-sm font-light text-neutral-600">$100 x 5hrs</p>
          </div>
          <div className="">
            <h1 className="font-medium text-md">$700.00</h1>
          </div>
        </div>

        <div className="flex flex-row items-center gap-x-2 my-4">
          <Plus size={20} className="text-green-500" />
          <h1 className="font-light text-md">ADD ITEM</h1>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col  ">
        <div className="flex flex-col w-1/2 self-end gap-y-2">
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="font-semibold text-md">Sub total</h1>
            <h1 className="font-semibold text-md">$2,000.00</h1>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-md">Discount</h1>
            <h1 className="text-md">$0.00</h1>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-md">Tax(0%)</h1>
            <h1 className="text-md">$0.00</h1>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-md">Shipping fees</h1>
            <h1 className="text-md">$0.00</h1>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-md font-semibold">Total</h1>
            <h1 className="text-md font-semibold">$2,000.00</h1>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-md">Paid</h1>
            <h1 className="text-md">$0.00</h1>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-md font-semibold">Balance Due</h1>
            <h1 className="text-md font-semibold">$2,000.00</h1>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-x-2">
            <AudioWaveform size={20} className="text-green-500" />
            <h1 className="text-sm ">Signature</h1>
          </div>

          <div className="w-48 h-24 flex items-center justify-center rounded-sm border my-4">
            <AudioWaveform size={80} className="text-green-500" />
          </div>

          <h1 className="text-sm font-light ml-4">Zowie Designs</h1>
          <h1 className="text-sm mb-1 ml-6 font-light">04/18/2024</h1>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-x-2 my-4">
            <CreditCard size={20} className="text-green-500" />
            <div className="flex flex-col">
              <h1 className="text-sm ">Payment options</h1>

              <div className="flex flex-row items-center gap-x-1 my-1">
                <div className="size-4 overflow-hidden rounded-sm relative">
                  <Image
                    src="/minipay.jpeg"
                    layout="fill"
                    objectFit="contain"
                    alt="Minipay"
                  />
                </div>
                <h1 className="text-xs font-light ">Minipay Wallet</h1>
              </div>

              <div className="flex flex-row items-center gap-x-1 mb-1">
                <div className="size-4 overflow-hidden rounded-sm relative">
                  <Image
                    src="/cusd.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Minipay"
                  />
                </div>
                <h1 className="text-xs font-light ">cUSD | Celo dollar</h1>
              </div>

              <div className="flex flex-row items-center gap-x-1 mb-1">
                <div className="size-4 overflow-hidden rounded-sm relative">
                  <Image
                    src="/usdc-celo.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Minipay"
                  />
                </div>
                <h1 className="text-xs font-light ">USDC | Circle</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row gap-x-2 mb-4">
              <ShieldCheck size={20} className="text-green-500" />
              <div className="flex flex-col">
                <h1 className="text-sm ">Terms & conditions</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row gap-x-2 mb-4">
              <PanelBottomOpen size={20} className="text-green-500" />
              <div className="flex flex-col">
                <h1 className="text-sm ">Customer note</h1>
                <h1 className="text-xs font-light">
                  Most preffered mode of payment to be done with MiniPay
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row gap-x-2 mb-4">
              <Heart size={20} className="text-green-500" />
              <div className="flex flex-col">
                <h1 className="text-sm ">Thank you note</h1>
                <h1 className="text-xs font-light">
                  Thank you for your business. We appreciate it.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingButton Icon={MenuIcon} />
    </div>
  );
};

export default EditInvoice;
