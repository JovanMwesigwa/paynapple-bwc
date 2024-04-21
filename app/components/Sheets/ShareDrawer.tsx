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
import Link from "next/link";

export function ShareDrawer({ invoiceID }: { invoiceID: number }) {
  const shareUrl = appUrl + "/invoice/" + invoiceID;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="rounded-full bg-green-600 size-12 text-white mr-4 "
          variant="ghost"
        >
          <Share2 size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Share your invoice</DrawerTitle>
            <DrawerDescription>
              Share your generated invoice to your clients
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
                  "Here is the invoice for your recent purchase. Thank you for your business."
                }
                hashtag={"#nextshare"}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <WhatsappShareButton
                url={shareUrl}
                title={
                  "Here is the invoice for your recent purchase. Thank you for your business."
                }
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <TelegramShareButton
                url={shareUrl}
                title={
                  "Here is the invoice for your recent purchase. Thank you for your business."
                }
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <EmailShareButton
                url={shareUrl}
                subject={
                  "Here is the invoice for your recent purchase. Thank you for your business."
                }
                body="body"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>

            <Link
              href={`/invoice/${invoiceID}`}
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
