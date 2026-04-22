'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const stages = [
  { num: '01', title: 'Selection', desc: 'A rigorous process designed to identify exceptional thinkers across Africa and emerging markets. We look for intellectual depth, systems thinking, and the will to build.' },
  { num: '02', title: 'Foundation', desc: 'Intensive grounding in quantitative finance, machine learning, and AI-driven trading systems. Theory and practice from day one.' },
  { num: '03', title: 'Deployment', desc: 'Fellows embedded directly into OTJ Capital operations. Real responsibilities. Real stakes. Real decisions that affect real capital.' },
  { num: '04', title: 'Evolution', desc: 'The best Fellows become permanent architects of the OTJ system. They do not graduate and leave. They stay and build.' },
]

export default function Stages() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section id="programme" ref={ref} style={{ background: '#FAFAFA', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>THE PROGRAMME</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#080808', marginBottom: '64px' }}>Four stages. Real stakes.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', position: 'relative' }}>
            {/* Gold connecting line */}
            <div style={{ position: 'absolute', top: '20px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #C9A84C)', zIndex: 0, opacity: 0.3 }} />
            {stages.map((s, i) => (
              <motion.div key={i} variants={fadeUp} style={{ padding: '0 24px 0 0', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '40px', height: '40px', background: '#FFFFFF', border: '2px solid #C9A84C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#C9A84C', fontWeight: 700 }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: '#080808', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#555555', lineHeight: 1.7 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
