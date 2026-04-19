const tracks = [
  {
    track: 'Quant Research',
    duration: '12 weeks',
    points: ['Alpha strategy design', 'Backtesting and validation', 'Statistical modelling', 'Live deployment with OTJ Capital'],
  },
  {
    track: 'Engineering',
    duration: '12 weeks',
    points: ['Trading system architecture', 'Real-time data pipelines', 'Risk engine development', 'Production infrastructure'],
  },
  {
    track: 'Fund Operations',
    duration: '8 weeks',
    points: ['Portfolio construction', 'Risk management', 'Investor reporting', 'Regulatory compliance'],
  },
]

export default function Program() {
  return (
    <section id="program" className="py-32 px-6 border-b border-[#1a1a1a] bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#999] text-xs tracking-[0.3em] uppercase mb-6">Program</p>
        <h2 className="text-5xl font-black mb-16">Three tracks. One goal.</h2>
        <div className="grid md:grid-cols-3 gap-px bg-[#e0e0e0]">
          {tracks.map((t) => (
            <div key={t.track} className="bg-white p-10">
              <p className="text-xs text-[#999] tracking-widest uppercase">{t.duration}</p>
              <h3 className="text-2xl font-black mt-2 mb-6">{t.track}</h3>
              <ul className="space-y-3">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-[#555]">
                    <span className="text-black mt-0.5">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
