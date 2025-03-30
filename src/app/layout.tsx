import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import cherryBlossom from "@/assets/cherry-blossom-icon.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "robert lockay",
  description: "portfolio",
  icons: cherryBlossom,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
