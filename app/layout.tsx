import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shefayet Nayon Fullstack || web Developer",
  description: "myPortfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex justify-between">
          {/* leftsidebar */}
          <LeftBar></LeftBar>
          <div className="w-[70%]">
                    {children}
          </div>
          {/* rightsidebar */}
          <RightBar></RightBar>
        </div>
      </body>
    </html>
  );
}
