import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <section className="container-responsive py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">About Savvy Gorilla Technologies</h1>
        <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
          Savvy Gorilla Technologies is a forward-thinking IT and digital solutions company. We help organizations harness
          the power of technology to grow, secure, and transform their businesses.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold">Vision</h3>
            <p className="mt-2">Innovating Africa’s digital future.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Mission</h3>
            <p className="mt-2">Design and deliver secure, scalable, and human-centered technology solutions.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Values</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Impact</li>
              <li>Integrity</li>
              <li>Security</li>
              <li>Craft</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
