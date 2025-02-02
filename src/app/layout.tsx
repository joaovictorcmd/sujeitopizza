import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.scss";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sujeito Pizza - A melhor pizzaria",
  description: "A melhor pizzaria do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Toaster
          richColors
          position="bottom-right"
        />
        {children}
      </body>
    </html>
  );
}
