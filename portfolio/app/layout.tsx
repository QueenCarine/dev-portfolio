import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://queencarine-dev-portfolio.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Queen Carine | Software Engineer",
    template: "%s | Queen Carine",
  },
  description:
    "Queen Carine is a software engineer building accessible technology for the people who need it most. View her projects, skills and contact details.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Queen Carine | Software Engineer",
    description:
      "Portfolio of Queen Carine, a software engineer building accessible technology.",
    url: SITE_URL,
    siteName: "Queen Carine",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Queen Carine",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/QueenCarine",
    "https://www.linkedin.com/in/queen-carine/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}