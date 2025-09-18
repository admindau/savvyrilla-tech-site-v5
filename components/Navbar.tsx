import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-slate-900 dark:text-white">
          <Image src="/logo.png" alt="Savvy Gorilla Logo" width={40} height={40} />
          <span>Savvy Gorilla</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
