import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqila Trans - Travel Aman & Nyaman di Jawa Tengah",
  description: "Aqila Trans melayani travel reguler dan charter dengan armada terbaru dan driver berpengalaman. Jemput dan antar door to door ke seluruh Jawa Tengah dan kota besar lainnya.",
  keywords: ["travel banjarnegara", "travel semarang", "travel jogja", "travel solo", "travel jakarta", "aqila trans", "charter travel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
