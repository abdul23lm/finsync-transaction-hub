export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "FinSync",
  description:
    "FinSync is your ultimate financial management tool, seamlessly syncing all your bank accounts into one platform. Gain a comprehensive view of your spending, transactions, and financial flows with ease. Streamline your finances and experience synchronization like never before with FinSync. Discover efficient financial harmony today!",
  icons: {
    icon: "/icons/img-finsync-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
