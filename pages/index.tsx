import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="container-responsive py-16 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl">
          From concept to production, we build web and software solutions that are secure, scalable, and delightful to use.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold">Web Development & Design</h3>
            <p className="mt-2">Modern, responsive websites and portals tailored to your brand and audience.</p>
            <Link className="mt-4 inline-block text-accent font-semibold" href="/services#web">Learn more →</Link>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Software Solutions & Apps</h3>
            <p className="mt-2">Scalable apps that solve complex business challenges across web and mobile.</p>
            <Link className="mt-4 inline-block text-accent font-semibold" href="/services#software">Learn more →</Link>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">IT Strategy & Consulting</h3>
            <p className="mt-2">Roadmaps, audits, and guidance to align technology with business outcomes.</p>
            <Link className="mt-4 inline-block text-accent font-semibold" href="/services#strategy">Learn more →</Link>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Cybersecurity & Infrastructure</h3>
            <p className="mt-2">Pen-testing, DR planning, and resilient networks that keep you safe and online.</p>
            <Link className="mt-4 inline-block text-accent font-semibold" href="/services#cyber">Learn more →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
