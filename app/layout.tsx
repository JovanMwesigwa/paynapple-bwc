import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import RainbowkitProvider from "./providers/rainbowkit-provider";
import Authmiddleware from "./providers/authmiddleware";
import { Toaster } from "sonner";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🍏 Paynapple | The best freelance invoicing tool",
  description: "Manage your freelance business with Paynapple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RainbowkitProvider>
          <Authmiddleware>{children}</Authmiddleware>
          <Toaster />
        </RainbowkitProvider>
      </body>
    </html>
  );
}
