import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Bricolage_Grotesque, Oswald } from "next/font/google";
import {Bricolage_Grotesque, Oswald} from 'next/font/google'
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grainEffect";
import { Cursor } from "@/components/curser/curser";
import { cn } from "@/libs/utilites";

const pixelFont = localFont({
  src: "./fonts/pixel font-7.ttf", variable: "--font-pixel"
});
const OswaldFont = localFont({
  src: "./fonts/Oswald-VariableFont_wght.ttf", variable: "--font-oswald"
});
const MainFont = Bricolage_Grotesque({ subsets: ['latin'], variable:'--font-bri'});
// const OswaldFont = Oswald({ subsets: ['latin'], variable:'--font-oswald'});

export const metadata: Metadata = {
  title: "Mahmoud Hesham",
  description: "Mahmoud Hesham's Offcial Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(OswaldFont.variable, MainFont.variable, pixelFont.variable ,`antialiased`)}
      >
        <Cursor color="#fff"/>
        <GrainEffect />
        {children}
      </body>
    </html>
  );
}
