import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gopher Research!",
  description: "Find Research at UMN!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen overflow-hidden bg-[#E0E0E0] text-black">
          <nav className="bg-[#7A0019] h-[8vh] flex items-center justify-between">
            <h1 className="p-10 text-[#FFCC33] text-3xl">GopherResearch</h1>
            <ul className="flex p-20 text-[#FFCC33]">
              <li className="px-8 hover:bg-gray-600">Yucky Icky Poopy Lucky</li>
              <li className="px-8 hover:bg-gray-600">Laim</li>
              <li className="px-8 hover:bg-gray-600">Preton</li>
              <li className="px-8 hover:bg-gray-600">Brandy</li>
              <li className="px-8 hover:bg-gray-600">Goonyeng</li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
