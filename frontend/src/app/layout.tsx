import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MECH UBU TEAM | Formula SAE Thailand — Ubon Ratchathani University",
    template: "%s | MECH UBU TEAM",
  },
  description:
    "MECH UBU is a Formula SAE team from the Faculty of Engineering, Ubon Ratchathani University, Thailand. Established in 2013, blending engineering with motorsport passion. Competing in TSAE Auto Challenge Student Formula.",
  keywords: [
    "Formula SAE",
    "MECH UBU",
    "Ubon Ratchathani University",
    "TSAE",
    "Student Formula",
    "มหาวิทยาลัยอุบลราชธานี",
    "วิศวกรรมเครื่องกล",
    "รถแข่ง",
    "Formula Student",
  ],
  authors: [{ name: "MECH UBU TEAM" }],
  creator: "MECH UBU TEAM",
  openGraph: {
    title: "MECH UBU TEAM | Formula SAE Thailand",
    description:
      "Formula SAE team from Ubon Ratchathani University — Passion for Engineering & Motorsport",
    url: "https://mechubu.com",
    siteName: "MECH UBU TEAM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MECH UBU TEAM — Formula SAE",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MECH UBU TEAM | Formula SAE Thailand",
    description: "Formula SAE team from Ubon Ratchathani University",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
