export default function Apply() {
  return (
    <section id="apply" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <div>
          <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Applications</p>
          <h2 className="text-5xl font-black text-white leading-tight mb-6">2026 Cohort is open.</h2>
          <p className="text-[#666] leading-relaxed">We accept 10 fellows per cohort. We look for exceptional people with a deep curiosity for markets, mathematics, and systems — regardless of background.</p>
          <div className="mt-8 space-y-3 text-sm text-[#444]">
            <p>📍 Nairobi, Kenya (in-person)</p>
            <p>📅 Cohort starts Q3 2026</p>
            <p>💸 Stipend provided</p>
            <p>🚀 Top fellows join OTJ Capital full-time</p>
          </div>
        </div>
        <div className="border border-[#1a1a1a] p-8">
          <h3 className="text-white font-bold text-lg mb-6">Apply now</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Full name" className="w-full bg-transparent border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors" />
            <input type="email" placeholder="Email address" className="w-full bg-transparent border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors" />
            <select className="w-full bg-black border border-[#222] text-[#444] px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors">
              <option value="">Select track</option>
              <option value="quant">Quant Research</option>
              <option value="eng">Engineering</option>
              <option value="ops">Fund Operations</option>
            </select>
            <textarea placeholder="Why OTJ Fellowship? (2–3 sentences)" rows={4} className="w-full bg-transparent border border-[#222] text-white placeholder-[#444] px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors resize-none" />
            <button className="w-full bg-white text-black font-semibold py-4 text-sm tracking-wide hover:bg-[#e0e0e0] transition-colors">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
