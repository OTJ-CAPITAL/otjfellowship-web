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
            OTJ Fellowship is a selective, hands-on program for the next generation of African quantitative researchers, engineers, and fund managers. You will build real systems. Deploy real strategies. Work on a real fund.
          </p>
        </div>
        <div className="mt-12 flex gap-4">
          <a href="#apply" className="inline-block bg-white text-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#e0e0e0] transition-colors">
            Apply for 2026 Cohort
          </a>
          <a href="#program" className="inline-block border border-[#333] text-white px-8 py-4 text-sm tracking-wide hover:border-white transition-colors">
            See the Program
          </a>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1a1a1a] pt-12">
          {[
            { label: 'Cohort Size',    value: '10' },
            { label: 'Duration',       value: '12 wks' },
            { label: 'Stipend',        value: 'Paid' },
            { label: 'Starts',         value: 'Q3 2026' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-[#444] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
