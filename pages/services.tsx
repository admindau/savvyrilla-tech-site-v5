import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <Layout title="Services" description="Web development, software solutions, IT strategy, and cybersecurity services by Savvy Gorilla Technologies.">
      <section className="container-responsive py-16 space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
        <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
          We deliver end-to-end technology services — from beautiful websites to enterprise-grade software, strategic IT guidance,
          and robust cybersecurity. Below is a snapshot of how we help organizations move faster and safer.
        </p>

        <div id="web" className="grid gap-6">
          <ServiceCard
            title="Web Development & Design"
            description="We craft modern, responsive, and user-friendly websites tailored to your brand and audience. From sleek corporate websites to dynamic e-commerce platforms, we ensure your online presence is fast, secure, and visually engaging."
            points={[
              "Corporate websites for banks, NGOs, and enterprises",
              "E-commerce with local & international payments",
              "Custom portals for reporting and stakeholder access"
            ]}
          />
        </div>

        <div id="software" className="grid gap-6">
          <ServiceCard
            title="Software Solutions & Applications"
            description="We build scalable software applications that solve complex business challenges. Our expertise covers web apps, mobile apps, and enterprise solutions that improve efficiency, reduce costs, and enhance customer experience."
            points={[
              "Mobile banking or fintech apps",
              "School management & education platforms",
              "Inventory, sales, and CRM systems for SMEs"
            ]}
          />
        </div>

        <div id="strategy" className="grid gap-6">
          <ServiceCard
            title="IT Strategy & Consulting"
            description="We provide tailored technology consulting that aligns IT with business goals. We design roadmaps for digital transformation, optimize IT investments, and prepare teams for the future of work."
            points={[
              "Website migrations to secure enterprise CMS (e.g., Drupal/Acquia)",
              "Digital transformation roadmaps & technology audits",
              "Cloud strategy on AWS, Azure, or Google Cloud"
            ]}
          />
        </div>

        <div id="cyber" className="grid gap-6">
          <ServiceCard
            title="Cybersecurity & Infrastructure Solutions"
            description="We safeguard businesses with advanced cybersecurity frameworks and resilient IT infrastructures. From penetration testing to disaster recovery planning, we ensure your systems remain secure, available, and compliant."
            points={[
              "Black-box penetration testing for financial institutions",
              "Disaster recovery site design & implementation",
              "Network monitoring, email security, and hardening"
            ]}
          />
        </div>
      </section>
    </Layout>
  );
}
