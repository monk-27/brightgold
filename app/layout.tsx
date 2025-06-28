import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { navItems } from "@/data";


import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Gold",
  description: "Bright Gold is a leading gold refinery, specializing in the highest quality gold refining and minting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head> */}
      <link rel="icon" href="/favicon.ico" />
      {/* </head> */}
      <body className={inter.className}>
        <FloatingNav navItems={navItems} />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
