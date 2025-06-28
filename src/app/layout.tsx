import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from "@/utils/DarkModeContext";
import { personalInfo } from "@/data/portfolio";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: `${personalInfo.displayName}.`,
  description: `Portfolio Website of ${personalInfo.name}.`,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dipesshhhh',
    creator: '@dipesshhhh',
    title: `${personalInfo.displayName}. - Portfolio`,
    description: `Portfolio Website of ${personalInfo.name}.`,  
    images: 'https://whosensei.me/display.png',
  },

  openGraph: {
    title: `${personalInfo.displayName}. - Portfolio`,
    description: `Portfolio Website of ${personalInfo.name}.`,
    url: 'https://whosensei.me',
    siteName: `${personalInfo.name}'s Portfolio`,
    images: [
      {
        url: 'https://whosensei.me/display.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
