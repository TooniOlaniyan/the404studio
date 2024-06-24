import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "the404Studio",
  description:
    "Build lorem ipsom",
 

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
