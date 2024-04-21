import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { appUrl } from "@/data";
import { Copy, Share2 } from "lucide-react";
import QRCode from "react-qr-code";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { PayLinkT } from "@/types";
import { PayLink } from "@prisma/client";
import Link from "next/link";

export function ShareLinkDrawer({ link }: { link: PayLink }) {
  const shareUrl = appUrl + "/pay/" + link.id;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex flex-row cursor-pointer items-center gap-x-2">
          <div className="size-5 bg-green-500 flex items-center justify-center rounded-full">
            <Share2 className="size-3 text-white" />
          </div>
          <p className="text-xs text-neutral-500">Share link</p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Share your paylink</DrawerTitle>
            <DrawerDescription>
              Share your paylink to your clients
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4   h-[400px] flex items-center justify-between flex-col ">
            <div className="h-full w-full flex items-center justify-center rounded-md">
              <QRCode
                size={100}
                style={{ height: 200, maxWidth: "100%", width: "100%" }}
                value={shareUrl}
                viewBox={`0 0 256 256`}
              />
            </div>

            <div className="flex flex-row w-full my-4 gap-x-3">
              <div className="flex text-sm flex-row items-center ">
                <h1>Share with:</h1>
              </div>

              <FacebookShareButton
                url={shareUrl}
                quote={
                  "Hey 👋😀 you can Pay me using this link. Thank you for your business."
                }
                hashtag={"#nextshare"}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <WhatsappShareButton
                url={shareUrl}
                title={
                  "Hey 👋😀 you can Pay me using this link. Thank you for your business."
                }
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <TelegramShareButton
                url={shareUrl}
                title={
                  "Hey 👋😀 you can Pay me using this link. Thank you for your business."
                }
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <EmailShareButton
                url={shareUrl}
                subject={"Paynapple pay link."}
                body="body"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>

            <Link
              href={`/pay/${link.id}`}
              className="flex text-xs bg-neutral-50 line-clamp-1 rounded-sm justify-between  items-center h-14 border w-full  flex-row  space-x-2"
            >
              <h1 className="ml-4">{shareUrl}</h1>
              <Button
                variant="ghost"
                className="bg-green-500 text-white rounded-r hover:bg-green-500 hover:text-white rounded-l-none border border-green-500 "
              >
                <Copy size={16} />
              </Button>
            </Link>
          </div>
          {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
