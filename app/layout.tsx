import type { Metadata } from "next";
import "./globals.css";
import StyledJsxRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Artificial Studio — Join the Community",
  description: "Where builders converge. Join the inner circle of AI practitioners, creators, coders and founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans+Condensed:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
