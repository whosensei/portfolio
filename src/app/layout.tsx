import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from "@/utils/DarkModeContext";

export const metadata: Metadata = {
  title: "Dipesh.",
  description: "Portfolio Website of Dipesh Singnurkar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
