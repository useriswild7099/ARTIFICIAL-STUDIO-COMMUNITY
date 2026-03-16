import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import StyledJsxRegistry from "@/lib/registry";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "Artificial Studio — Join the Community",
  description: "The inner circle of AI builders, creators, and founders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Dela+Gothic+One&family=Manrope:wght@200..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="nebula-bg" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2, backgroundColor: '#000' }}>
          <Image 
            src="/nebula.jpg" 
            alt="Nebula background" 
            fill 
            quality={100} 
            priority 
            style={{ objectFit: 'cover', opacity: 0.7 }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }} />
        </div>
        <Particles className="particles-container" />
        <StyledJsxRegistry>
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
