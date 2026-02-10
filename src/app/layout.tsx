import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Using Google Fonts via CSS import in globals.css for more control
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
    title: "Takunda Maswi | Systems Consultant",
    description: "Premium Portfolio of Takunda Christopher Maswi - Systems Consultant & Full-Stack Developer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
