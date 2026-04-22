'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const disciplines = [
  { num:'01', title:'Quant Researchers', body:'Build the mathematical models that generate trading signals. You need to love statistics, hate ambiguity, and be comfortable being wrong most of the time.' },
  { num:'02', title:'AI Engineers', body:'Train and deploy the machine learning systems at the core of the trading engine. You build the brain.' },
  { num:'03', title:'Data Scientists', body:'Source, clean, and structure the market data that feeds everything. The models are only as good as what you feed them.' },
  { num:'04', title:'Risk Managers', body:'Define the rules the AI must follow. You are the last line of defence between a good trade and a catastrophic one.' },
  { num:'05', title:'Market Analysts', body:'Deep knowledge of African and emerging market dynamics. Context the models cannot derive from price data alone.' },
  { num:'06', title:'System Governors', body:'Ensure the AI evolves correctly over time. Monitor performance, detect drift, flag anomalies. You are the immune system.' },
]

export default function Disciplines() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="disciplines" ref={ref} style={{ padding:'120px 32px', borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'2px', color:'#888', marginBottom:'16px' }}>WHO WE SELECT</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(28px,4vw,48px)', color:'#000', letterSpacing:'-1px', marginBottom:'64px' }}>Six roles. One machine.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'0' }}>
            {disciplines.map((d,i) => (
              <motion.div key={i} variants={fadeUp} style={{ padding:'40px 32px', border:'1px solid #E5E5E5', marginLeft: i%3!==0?'-1px':'0', marginTop: i>2?'-1px':'0' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#BBB', marginBottom:'16px' }}>{d.num}</div>
                <h3 style={{ fontFamily:'var(--font-sg)', fontWeight:700, fontSize:'18px', color:'#000', marginBottom:'12px' }}>{d.title}</h3>
                <p style={{ fontSize:'14px', color:'#555', lineHeight:1.7 }}>{d.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
