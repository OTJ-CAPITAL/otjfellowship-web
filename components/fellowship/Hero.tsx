'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const stats = [
  { val: '6', label: 'disciplines', sub: 'One mission' },
  { val: 'Africa', label: 'Primary talent pool', sub: '' },
  { val: 'Real work', label: 'Real stakes', sub: '' },
  { val: 'Cohort One', label: '2026', sub: '' },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section ref={ref} style={{ background: '#FAFAFA', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 32px 80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '11px', color: '#C9A84C', letterSpacing: '4px', marginBottom: '32px' }}>THE HUMAN INTELLIGENCE LAYER</motion.div>
          <motion.h1 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(48px, 7vw, 80px)', color: '#080808', lineHeight: 1.05, marginBottom: '32px' }}>
            Where talent<br />becomes system.
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '20px', color: '#666666', maxWidth: '500px', lineHeight: 1.7, marginBottom: '32px' }}>
            The Fellowship identifies, grooms, and deploys the world&apos;s sharpest minds to build, govern, and evolve the AI systems that run OTJ Capital.
          </motion.p>
          <motion.div variants={fadeUp} style={{ width: '60px', height: '1px', background: '#C9A84C', marginBottom: '48px' }} />
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', marginBottom: '64px', flexWrap: 'wrap' }}>
            <a href="#apply" style={{ background: '#080808', color: '#FFFFFF', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>Apply to Cohort One →</a>
            <a href="#programme" style={{ border: '1px solid #080808', color: '#080808', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>The Programme</a>
          </motion.div>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', maxWidth: '640px', paddingTop: '40px', borderTop: '1px solid #E0E0E0' }}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: '#080808', marginBottom: '4px' }}>{s.val}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#888888' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
