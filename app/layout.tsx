import type { Metadata } from "next";
import { Tektur as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin-ext"],
  variable: "--font-sans",
  weight:['400']
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "the404Studio",
  description: "Build lorem ipsom",
  icons: {
    icon: "/assets/icons/Exclude.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className={`flex min-h-screen flex-col `}>
          <Header />
          <div className="flex flex-1 justify-center w-full">
            <div className="flex w-full max-w-[1280px] h-full">{children}</div>
          </div>
          <Footer />
        </main>
      
      </body>
    </html>
  );
}
