import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://sanjeewa.dev"),
  title: "Sanjeewa.dev",
  description: "Premium custom website design and web development for small businesses and creative professionals.",
  robots: { index: true, follow: true },
  authors: [{ name: "Sanjeewa Vipula Kumara" }],
  icons: {\n    icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml", sizes: "any" }],\n    shortcut: "/favicon.svg?v=2",\n  },\n  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><Nav />{children}<Footer /></body>
    </html>
  );
}
