import {SiteImagesProvider} from "../components/SiteImage";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeovus Herbs | Plants with purpose",
  description: "Science in every ingredient.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vmr2pnz.css" />
        <link rel="preload" as="video" href="https://assets.mixkit.co/videos/46091/46091-720.mp4" type="video/mp4" />
      </head>
      <body className="min-h-full flex flex-col"><SiteImagesProvider>{children}</SiteImagesProvider></body>
    </html>
  );
}

