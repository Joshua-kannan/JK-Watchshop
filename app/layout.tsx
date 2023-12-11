// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer"; // Make sure to adjust the import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jk Watch Shop",
  description: "Created by Joshua Kannan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              <Navbar />
              <ShoppingCartModal />
              {children}
            </div>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
