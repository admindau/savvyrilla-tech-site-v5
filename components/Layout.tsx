import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

type Props = { title?: string; description?: string; children: ReactNode };

export default function Layout({ title, description, children }: Props) {
  const siteTitle = title ? `${title} | Savvy Gorilla Technologies` : "Savvy Gorilla Technologies";
  const desc = description || "Innovating Africa’s digital future with web, software, IT strategy, and cybersecurity solutions.";
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A192F" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
