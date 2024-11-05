import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grainEffect";
import { Cursor } from "@/components/curser/curser";

const pixelFont = localFont({
  src: "./fonts/pixel font-7.ttf", variable: "--font-pixel"
});
const MainFont = Bricolage_Grotesque({ subsets: ['latin'] });
const OswaldFont = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

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
        className={`${OswaldFont.variable} ${MainFont.className} ${pixelFont.variable} antialiased`}
      >
        <Cursor color="#fff"/>
        <GrainEffect />
        {children}
      </body>
    </html>
  );
}
