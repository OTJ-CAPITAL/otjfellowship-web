'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { Check } from 'lucide-react'

const requirements = [
  'Strong foundation in mathematics, statistics, or CS',
  'Passion for financial markets and emerging economies',
  'Experience with Python, R, or quantitative modelling',
  'Genuine belief that AI is reshaping global capital',
  'Based in or connected to Africa or an emerging market',
]

export default function Apply() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section id="apply" ref={ref} style={{ background: '#080808', padding: '120px 32px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '11px', color: '#C9A84C', letterSpacing: '4px', marginBottom: '24px' }}>COHORT ONE. 2026.</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.2 }}>
            Apply to build<br />the future.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '18px', color: '#888888', marginBottom: '48px', lineHeight: 1.7 }}>
            We are building our first cohort. If you are a quantitative thinker, an AI engineer, a data scientist, or a market analyst who believes the future of finance is being built in the emerging world — this is for you.
          </motion.p>
          <motion.div variants={staggerContainer} style={{ marginBottom: '48px' }}>
            {requirements.map((req, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(201,168,76,0.15)', borderRadius: '50%', padding: '4px', flexShrink: 0, marginTop: '1px' }}>
                  <Check size={14} color="#C9A84C" />
                </div>
                <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#AAAAAA', lineHeight: 1.6 }}>{req}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <a href="mailto:fellowship@otjfellowship.com" style={{ background: '#C9A84C', color: '#080808', padding: '16px 40px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', textDecoration: 'none', borderRadius: '2px' }}>Apply Now →</a>
            <a href="mailto:fellowship@otjfellowship.com" style={{ fontFamily: 'Inter', fontSize: '14px', color: '#C9A84C', textDecoration: 'none' }}>fellowship@otjfellowship.com</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
