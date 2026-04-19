export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[#444] text-sm tracking-[0.3em] uppercase mb-8">Nairobi, Kenya · 2026 Cohort</p>
        <h1 className="text-[clamp(3rem,9vw,8rem)] font-black leading-none tracking-tighter text-white">
          Build the<br />future of<br />African finance.
        </h1>
        <div className="mt-8 max-w-xl">
          <p className="text-[#888] text-xl leading-relaxed">
            OTJ Fellowship is a selective program for the next generation of African quantitative researchers, engineers, and fund managers.
          </p>
        </div>
        <div className="mt-12 flex gap-4">
          <a href="#apply" className="inline-block bg-white text-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#e0e0e0] transition-colors">
            Apply for 2026 Cohort
          </a>
          <a href="#program" className="inline-block border border-[#333] text-white px-8 py-4 text-sm tracking-wide hover:border-white transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
