import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@components/common/Header";
import { Footer } from "@components/common/Footer";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary layout">
        <ThemeProvider attribute="class">
          <Header />
          <div className="body-class">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
