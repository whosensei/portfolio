import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from "@/utils/DarkModeContext";
import { personalInfo } from "@/data/portfolio";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: `${personalInfo.displayName}.`,
  description: `Portfolio Website of ${personalInfo.name}.`,
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
        <Analytics />
      </body>
    </html>
  );
}
