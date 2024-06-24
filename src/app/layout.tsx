import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | skrodrigo",
  description: "Portfolio do Rodrigo Carvalho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className + ' min-h-screen flex flex-col justify-between'}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
