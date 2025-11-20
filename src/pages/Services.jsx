import Navbar from "../components/Navbar";
import ServicesHero from "../components/ServicesHero";
import ServicesGrid from "../components/ServicesGrid";
import ContactCTA from "../components/ContactCTA";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <Navbar />
      <main className="pb-16">
        <ServicesHero />
        <ServicesGrid />
        <ContactCTA />
      </main>
      <footer className="border-t border-slate-800/60 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-blue-200/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Qanzak Global. All rights reserved.</span>
          <a href="/" className="hover:text-white transition">Back to Home</a>
        </div>
      </footer>
    </div>
  );
}
