import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@components/common/Header";
import { Footer } from "@components/common/Footer";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "김혜연 포트폴리오",
  description: "김혜연의 포트폴리오입니다.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto min-h-screen min-w-14">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
