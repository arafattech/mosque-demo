import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "THEMosque - Mosque Website Template",
  description: "Mosque Website Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheet */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Libraries Stylesheet */}
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />

        {/* Customized Bootstrap Stylesheet */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <Spinner />
        <Header />
        {children}
        <Footer />

        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/lib/tempusdominus/js/moment.min.js" strategy="afterInteractive" />
        <Script src="/lib/tempusdominus/js/moment-timezone.min.js" strategy="afterInteractive" />
        <Script src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" strategy="afterInteractive" />

        {/* Template Javascript */}
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
