"use client";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import UserContextProvider from "./context/UserContextProvider";

const inter = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={`${inter.className} bg-gradient-to-r from-slate-800 to-slate-950`}>
      <UserContextProvider>
          {children}
      </UserContextProvider>
      </body>
    </html>
  );
}
