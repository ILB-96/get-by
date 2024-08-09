import type { Metadata } from "next";
import "@/styles/global.css";
import Navbar from "@/components/navbar/navbar";
import { BodyContainer } from "@/styles/style";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "GetBy",
  description:
    "GetBy is a platform for group buying of goods around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BodyContainer>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </BodyContainer>
    </html>
  );
}
