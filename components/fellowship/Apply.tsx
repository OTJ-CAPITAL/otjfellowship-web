'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const requirements = [
  'Strong in mathematics, statistics, or computer science',
  'Some experience with Python or quantitative modelling',
  'Interested in financial markets and how they actually work',
  'Based in Africa or an emerging market, or deeply connected to one',
  'Willing to work on real capital from day one',
]

export default function Apply() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="apply" ref={ref} style={{ padding:'120px 32px', background:'#000', borderBottom:'1px solid #222' }}>
      <div style={{ maxWidth:'800px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'2px', color:'#666', marginBottom:'32px' }}>COHORT ONE — 2026</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(36px,5vw,64px)', color:'#fff', letterSpacing:'-1.5px', lineHeight:1.1, marginBottom:'24px' }}>
            Apply. Build<br />the system.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize:'18px', color:'#888', lineHeight:1.8, marginBottom:'48px' }}>We are selecting the founding cohort now. If you are the kind of person who reads the textbook before being asked to, this is for you.</motion.p>
          <motion.div variants={staggerContainer} style={{ marginBottom:'48px' }}>
            {requirements.map((r,i) => (
              <motion.div key={i} variants={fadeUp} style={{ display:'flex', gap:'16px', alignItems:'flex-start', marginBottom:'16px' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'#555', marginTop:'2px', flexShrink:0 }}>—</span>
                <span style={{ fontSize:'16px', color:'#AAA', lineHeight:1.6 }}>{r}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} style={{ display:'flex', flexDirection:'column', gap:'16px', alignItems:'flex-start' }}>
            <a href="mailto:fellowship@otjfellowship.com" style={{ background:'#fff', color:'#000', padding:'16px 40px', fontFamily:'var(--font-sg)', fontWeight:700, fontSize:'16px' }}>Apply Now →</a>
            <a href="mailto:fellowship@otjfellowship.com" style={{ fontSize:'14px', color:'#555' }}>fellowship@otjfellowship.com</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
