import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
import { QueryClient, QueryClientProvider } from "react-query";
import QueryWrapper from "@/app/query-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Slider | Framer Motion | Tailwind Css | Next Js | Typescript | Sudhir Gadpayle",
  description:
    "Experience a seamless and interactive web experience with our custom slider. Built with cutting-edge technologies like React.js, Next.js, and Tailwind CSS, our slider offers smooth transitions powered by Framer Motion. Perfect for image galleries, product showcases, and more. Explore now!",

  keywords: [
    "Custom Slider",
    "Framer Motion Slider",
    "React.js Slider",
    "Next.js Slider",
    "Tailwind CSS Slider",
    "Interactive Web Experience",
    "Modern Web Design",
    "Responsive Slider",
    "User-friendly Slider",
    "Cutting-edge Web Technologies",
  ],

  openGraph: {
    title: "Slider | Framer Motion | Tailwind Css | Next Js | Typescript | Sudhir Gadpayle",
    description:
      "Experience a seamless and interactive web experience with our custom slider. Built with cutting-edge technologies like React.js, Next.js, and Tailwind CSS, our slider offers smooth transitions powered by Framer Motion. Perfect for image galleries, product showcases, and more. Explore now!",
    type: "website",
    siteName: "Custom Slider | Framer Motion | Tailwind",
    url: "https://custom-slider-framer-motion-nextjs-typescript.vercel.app",
    images: {
      url: "./demo.png",
      width: 1260,
      height: 800,
      alt: "Custom Slider Using Framer Motion React Js and more...",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>{children}</QueryWrapper>
      </body>
    </html>
  );
}
