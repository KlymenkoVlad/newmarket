import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { StateContext } from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketplace",
  description: "Marketplace by Vlad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContext>
          <Header />
          <Toaster />
          {children}

          <Footer />
        </StateContext>
      </body>
    </html>
  );
}
