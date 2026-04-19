export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <div>
          <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">About</p>
          <h2 className="text-5xl font-black text-white leading-tight">
            Africa needs its own quants.
          </h2>
        </div>
        <div className="space-y-6 text-[#888] leading-relaxed">
          <p>The hedge fund industry is built on talent. Mathematicians, engineers, and researchers who understand markets deeply enough to build systems that beat them.</p>
          <p>That talent exists in Africa — in every university, in every city. It just needs infrastructure, mentorship, and a path to the industry.</p>
          <p className="text-white font-medium">OTJ Fellowship is that path.</p>
        </div>
      </div>
    </section>
  )
}
