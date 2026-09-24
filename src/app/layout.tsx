import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Valent Shop | Achados que valem a pena",
  description: "Achados, testes e produtos que valem a pena.",
  keywords: ["Valent Shop", "produtos testados", "achados", "demonstrações", "TikTok Shop"],
  openGraph: {
    title: "Valent Shop | Achados que valem a pena",
    description: "Achados, testes e produtos que valem a pena.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/perfil-valent.png", alt: "Valent, criador do Valent Shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valent Shop | Achados que valem a pena",
    description: "Achados, testes e produtos que valem a pena.",
    images: ["/perfil-valent.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
