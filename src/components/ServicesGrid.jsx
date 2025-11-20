import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Subscription-based SaaS Platforms",
    description:
      "Full-featured applications delivered as a service with reliable uptime, user management, billing, and analytics.",
    icon: "cloud",
  },
  {
    title: "Custom Application Development",
    description:
      "We design and build web apps tailored to your workflows, optimized for performance, scalability, and security.",
    icon: "code",
  },
  {
    title: "Product Launch & GTM Enablement",
    description:
      "MVPs, rapid prototyping, and market-ready releases with CI/CD, QA automation, and growth tracking.",
    icon: "launch",
  },
  {
    title: "Security & Compliance",
    description:
      "Best practices for auth, audit trails, data encryption, and standards like SOC 2, GDPR, and HIPAA.",
    icon: "security",
  },
  {
    title: "Managed Cloud & DevOps",
    description:
      "Infrastructure as code, monitoring, autoscaling, and cost optimization across major cloud providers.",
    icon: "cloud",
  },
  {
    title: "AI-Powered Enhancements",
    description:
      "Intelligent features like search, recommendations, and automation using modern AI frameworks.",
    icon: "ai",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
