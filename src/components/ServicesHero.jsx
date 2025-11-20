export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(147,197,253,0.12),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.12),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Services tailored for SaaS growth
          </h1>
          <p className="mt-4 text-lg text-blue-200/90">
            Qanzak Global delivers subscription-based software and digital services that help teams launch faster,
            scale securely, and operate with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">SaaS Platforms</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">Custom Development</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">Managed Cloud</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">AI Integrations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
