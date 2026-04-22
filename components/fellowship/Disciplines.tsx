'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const disciplines = [
  { num: '01', title: 'Quant Researchers', body: 'Build and refine the mathematical models powering OTJ Capital\'s decisions. Precision thinkers. Model architects.' },
  { num: '02', title: 'AI Engineers', body: 'Design, train, and deploy the ML systems at the core of OTJ\'s trading engine. The builders behind the intelligence.' },
  { num: '03', title: 'Data Scientists', body: 'Source, clean, and structure the market data that feeds the AI. Data quality determines decision quality.' },
  { num: '04', title: 'Risk Managers', body: 'Define the boundaries within which the AI operates. Protect the fund. Govern the machine.' },
  { num: '05', title: 'Market Analysts', body: 'Deep expertise in emerging market dynamics. The contextual intelligence the AI cannot derive from data alone.' },
  { num: '06', title: 'System Governors', body: 'The oversight layer. Ensure the AI performs, evolves, and operates within ethical and regulatory boundaries.' },
]

export default function Disciplines() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section id="disciplines" ref={ref} style={{ background: '#F0F0F0', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>WHO WE GROOM</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#080808', marginBottom: '64px' }}>Six disciplines. One mission.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {disciplines.map((d, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', padding: '40px 32px', borderRadius: '4px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#E0E0E0')}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#C9A84C', marginBottom: '16px' }}>{d.num}</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '18px', color: '#080808', marginBottom: '12px' }}>{d.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#555555', lineHeight: 1.7 }}>{d.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
