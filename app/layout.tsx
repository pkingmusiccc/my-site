import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vitracosmetics.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vitracosmetics · dermatological skincare, Swiss precision",
    template: "%s · Vitracosmetics",
  },
  description:
    "TAO Cosmetics pairs clinical precision with natural efficacy. Available only to qualified aestheticians, dermatologists, and professional institutes across Switzerland.",
  applicationName: "Vitracosmetics",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vitracosmetics",
    locale: "en_CH",
    title: "Vitracosmetics · dermatological skincare, Swiss precision",
    description:
      "Science-led treatments that set your practice apart. Exclusive Swiss distribution of TAO Cosmetics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
