import React from "react";
import "../globals.css";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Interactive Pricing",
    description: "Page for selecting the pricing of product",
    icons: {
        icon: '/favicon-32x32.png'
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}