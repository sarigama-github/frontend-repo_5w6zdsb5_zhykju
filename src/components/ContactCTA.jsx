export default function ContactCTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Let’s build your next product</h2>
              <p className="mt-2 text-blue-200/80 max-w-xl">
                Tell us about your goals and we’ll recommend the right mix of subscription products and bespoke services.
              </p>
            </div>
            <a
              href="mailto:hello@qanzak.global?subject=Project%20Inquiry"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 text-white px-5 py-3 font-medium hover:bg-blue-400 transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
