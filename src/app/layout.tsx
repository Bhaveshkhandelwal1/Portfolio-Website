import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CursorTrail from "@/components/CursorTrail";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollProgressBar from "@/components/ScrollProgressBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavesh Khandelwal | Software Engineer & AI Developer",
  description: "Computer Science undergraduate at Ramaiah Institute of Technology experienced in Backend Engineering, AI-driven applications, RAG pipelines, and cloud-native tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider>
            <ScrollProgressBar />
            <CursorTrail />
            <div className="flex min-h-screen flex-col">
              <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
                <Navbar />

                <main className="grow m-4">
                  {children}
                </main>

                <Footer />
              </div>

            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

