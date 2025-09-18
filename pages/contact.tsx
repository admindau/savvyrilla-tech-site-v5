import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <section className="container-responsive py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl">
          Tell us about your project. We’ll respond within 1–2 business days.
        </p>
        <form action="https://formspree.io/f/xzzanbbl" method="POST" className="card grid gap-4 max-w-2xl">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border rounded-xl p-3 dark:bg-slate-950 dark:border-slate-800" placeholder="Full Name" name="name" required />
            <input className="border rounded-xl p-3 dark:bg-slate-950 dark:border-slate-800" placeholder="Email" type="email" name="email" required />
          </div>
          <input className="border rounded-xl p-3 dark:bg-slate-950 dark:border-slate-800" placeholder="Company (optional)" name="company" />
          <textarea className="border rounded-xl p-3 min-h-[140px] dark:bg-slate-950 dark:border-slate-800" placeholder="Your message" name="message" required />
          <button className="btn-primary w-fit" type="submit">Send Message</button>
        </form>
        <p className="text-xs text-slate-500 dark:text-slate-400">Submissions are routed via Formspree. Replace <code>yourFormID</code> with your endpoint and confirm forwarding to your PrivateEmail inbox.</p>
      </section>
    </Layout>
  );
}
