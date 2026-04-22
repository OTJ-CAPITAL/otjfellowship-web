'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function NotASchool() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section ref={ref} style={{ padding:'120px 32px', background:'#F5F5F5', borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(28px,4vw,56px)', color:'#000', letterSpacing:'-1.5px', lineHeight:1.1, marginBottom:'64px' }}>
            Not a school.<br />Not a consultancy.<br />The actual fund.
          </motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid', gridTemplateColumns:'1fr 1px 1fr', gap:'64px' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8, marginBottom:'24px' }}>Most programmes teach you about finance. We put you inside one. Fellows work directly on the quantitative models that execute trades on real capital every day.</p>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8 }}>If the model you build performs, it runs. If it does not, you fix it. That is the only feedback loop that matters.</p>
            </motion.div>
            <div style={{ background:'#D0D0D0' }} />
            <motion.div variants={fadeUp}>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8, marginBottom:'24px' }}>We do not train traders. We do not hire analysts. We groom system architects — people who understand quantitative finance, machine learning, and risk management at the same time.</p>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8 }}>The best Fellows do not graduate and leave. They become permanent builders inside OTJ.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
