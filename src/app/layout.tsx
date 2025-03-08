import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "AENTX - Manufacturing Pipeline Management",
  description: "Transform your manufacturing processes with AENTX's comprehensive pipeline management tool. Create models, manage workflows, and collaborate across locations seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
