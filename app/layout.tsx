import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Authentic Frontend Design | Shefayet Nayon",
  description:
    "Clean code meets bold personality. Discover Shefayet Nayon expressive UI work.",
  keywords: [
    "frontend developer",
    "nextjs developer",
    "ui designer",
    "web developer",
    "shefayet nayon",
  ],
  applicationName: "Shefayet Nayon Portfolio",
  authors: [{ name: "Shefayet Nayon", url: "https://shefayetnayon.netlify.app" }],
  openGraph: {
    title: "Authentic Frontend Design | Shefayet Nayon",
    description: "Clean code meets bold personality.",
    url: "https://shefayetnayon.netlify.app",
    siteName: "Shefayet Nayon Portfolio",
    images: [
      {
        url: "https://shefayetnayon.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shefayet Nayon Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Frontend Design | Shefayet Nayon",
    description: "Clean code meets bold personality.",
    images: ["https://shefayetnayon.netlify.app/og-image.png"],
    site: "@your_twitter_handle", // optional
    creator: "@your_twitter_handle", // optional
  },
  alternates: {
    canonical: "https://shefayetnayon.netlify.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google verification */}
        <meta
          name="google-site-verification"
          content="googlecb13ee32ff977eea.html"
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Shefayet Nayon",
      url: "https://shefayetnayon.netlify.app",
      sameAs: [
        "https://www.linkedin.com/in/yourprofile",
        "https://github.com/yourprofile",
        "https://twitter.com/your_twitter_handle",
      ],
      jobTitle: "Frontend Developer",
      worksFor: {
        "@type": "Organization",
        name: "Shefayet Nayon Portfolio",
      },
    }),
  }}
/>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
