import type { Metadata } from "next";
import "./globals.css";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Nav from "@/components/Nav";


export const metadata: Metadata = {
  title: "Quotverse",
  description: "A collection of quotes from the best books, movies, and TV shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-[#101010]">
        <div className="w-full flex">
          <LeftSection/>
          <div className="lg:w-2/3 w-full border border-grey-primary height-max overflow-y-auto">
            <div className="border-b border-grey-primary py-4 pl-4 pb-[24px] pr-3 flex justify-center"> 
              <Nav/>
            </div>
            {children}
          </div>
          <RightSection/>
        </div>
      </body>
    </html>
  );
}
