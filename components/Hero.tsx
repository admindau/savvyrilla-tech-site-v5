import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-primary text-white">
      <div className="container-responsive py-24 md:py-28">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Connecting Ideas to Innovation — Powered by Technology
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl">
          We design and build fast, secure, and scalable digital products for organizations in Africa and beyond.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/services" className="btn-primary">Explore Our Services</Link>
          <Link href="/contact" className="inline-block px-5 py-3 rounded-2xl border border-white/30 hover:bg-white/10 transition">
            Let’s Build Together
          </Link>
        </div>
      </div>
    </section>
  );
}
